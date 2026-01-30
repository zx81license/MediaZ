import React from 'react';
import { Question, Language } from '../types';
import { Check, Plus } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  isSelected: boolean;
  onToggle: () => void;
  language: Language;
  allowSelection?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  isSelected,
  onToggle,
  language,
  allowSelection = true
}) => {
  const isArabic = language === 'ar';
  
  return (
    <div 
      className={`relative p-6 rounded-xl border-2 transition-all duration-200 group
        ${isSelected 
          ? 'border-green-500 bg-green-50 shadow-md' 
          : 'border-slate-200 bg-white hover:border-brand-300 hover:shadow-sm'}`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="flex justify-between items-start gap-4 mb-4">
        <div className="flex-1">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            {question.section}
          </div>
          <h3 className={`font-bold text-lg leading-tight ${isArabic ? 'font-arabic' : 'font-sans'} text-slate-800`}>
            {isArabic ? question.text_ar : question.text_en}
          </h3>
        </div>
        
        {allowSelection && (
          <button
            onClick={onToggle}
            className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
              ${isSelected 
                ? 'bg-green-500 text-white rotate-0' 
                : 'bg-slate-100 text-slate-400 group-hover:bg-brand-100 group-hover:text-brand-600'}`}
          >
            {isSelected ? <Check className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
          </button>
        )}
      </div>

      {question.options && (
        <div className="space-y-2 mt-4">
          {question.options.map((opt, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-3 p-3 rounded-lg text-sm border border-slate-100 bg-slate-50/50 text-slate-600 ${isArabic ? 'font-arabic' : 'font-sans'}`}
            >
              <div className="w-4 h-4 rounded border border-slate-300 shrink-0 bg-white"></div>
              <span>{isArabic ? opt.label_ar : opt.label_en}</span>
            </div>
          ))}
        </div>
      )}

      {question.type === 'text' && (
        <div className="mt-4 p-4 border border-dashed border-slate-300 rounded-lg bg-slate-50 text-slate-400 text-sm italic">
          {isArabic ? '[مساحة للنص المفتوح]' : '[Open text input area]'}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;