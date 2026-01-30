import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { SURVEY_DATA } from './data';
import { Language, CartItem, Question } from './types';
import Sidebar from './components/Sidebar';
import QuestionCard from './components/QuestionCard';
import { generateMarkdown, downloadFile } from './services/downloadService';
import { Menu, Globe, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [selectedLLMId, setSelectedLLMId] = useState<string>(SURVEY_DATA[0].id);
  const [language, setLanguage] = useState<Language>('en');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentLLM = SURVEY_DATA.find(llm => llm.id === selectedLLMId) || SURVEY_DATA[0];

  const toggleQuestion = (questionId: string) => {
    setCartItems(prev => {
      const exists = prev.some(item => item.llmId === selectedLLMId && item.questionId === questionId);
      if (exists) {
        return prev.filter(item => !(item.llmId === selectedLLMId && item.questionId === questionId));
      } else {
        return [...prev, { llmId: selectedLLMId, questionId }];
      }
    });
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to clear all selected questions?')) {
      setCartItems([]);
    }
  };

  const handleCheckout = () => {
    const markdown = generateMarkdown(SURVEY_DATA, cartItems);
    downloadFile(markdown, 'MediaZ_Survey_Selection.md');
  };

  // Group questions by page
  const questionsByPage = currentLLM.questions.reduce((acc, q) => {
    const page = q.page || 1;
    if (!acc[page]) acc[page] = [];
    acc[page].push(q);
    return acc;
  }, {} as Record<number, Question[]>);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900 font-sans">
      <Sidebar 
        llms={SURVEY_DATA}
        selectedLLMId={selectedLLMId}
        onSelectLLM={setSelectedLLMId}
        cartItems={cartItems}
        onCheckout={handleCheckout}
        onReset={handleReset}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-lg font-semibold text-slate-800 hidden sm:block">
              {currentLLM.name}
            </h2>
          </div>

          <div className="flex items-center gap-3">
             <div className="flex items-center bg-slate-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    language === 'en' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('ar')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    language === 'ar' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  العربية
                </button>
             </div>
             <Globe className="w-5 h-5 text-slate-400" />
          </div>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-4xl mx-auto">
            
            {/* Intro Section */}
            <div className={`mb-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">{currentLLM.name}</h1>
              <p className={`text-slate-500 mb-6 text-sm ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? currentLLM.description_ar : currentLLM.description_en}
              </p>
              
              <div className="bg-brand-50 p-4 rounded-xl border border-brand-100 text-brand-800">
                <p className={`leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? currentLLM.intro_ar : currentLLM.intro_en}
                </p>
              </div>
            </div>

            {/* Questions Grouped by Page */}
            {Object.entries(questionsByPage).map(([page, questions]) => (
              <div key={page} className="mb-10">
                <h3 
                  className={`text-xl font-bold text-brand-700 mb-5 px-1 flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse font-arabic' : ''}`}
                >
                  <span className="bg-brand-100 text-brand-600 px-3 py-1 rounded text-sm uppercase tracking-wide">
                     {language === 'ar' ? `الصفحة ${page}` : `Page ${page}`}
                  </span>
                  <span className="h-px bg-slate-200 flex-1"></span>
                </h3>
                
                <div className="grid grid-cols-1 gap-6">
                  {questions.map((q) => (
                    <QuestionCard 
                      key={q.id}
                      question={q}
                      language={language}
                      isSelected={cartItems.some(item => item.llmId === currentLLM.id && item.questionId === q.id)}
                      onToggle={() => toggleQuestion(q.id)}
                      allowSelection={currentLLM.id !== 'prompt'}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Footer hint */}
            <div className="mt-12 text-center text-slate-400 text-sm flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>
                {language === 'ar' 
                  ? 'اختر الأسئلة التي تريد إضافتها إلى القائمة النهائية.' 
                  : 'Check the boxes to add questions to your final export.'}
              </span>
            </div>
            
            <div className="h-20"></div> {/* Spacer for bottom scroll */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;