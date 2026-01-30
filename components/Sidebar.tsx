import React from 'react';
import { SurveyVersion, CartItem } from '../types';
import { Bot, CheckSquare, Trash2 } from 'lucide-react';

interface SidebarProps {
  llms: SurveyVersion[];
  selectedLLMId: string;
  onSelectLLM: (id: string) => void;
  cartItems: CartItem[];
  onCheckout: () => void;
  onReset: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  llms,
  selectedLLMId,
  onSelectLLM,
  cartItems,
  onCheckout,
  onReset,
  isOpen,
  setIsOpen
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-white z-30 transition-transform duration-300 transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static flex flex-col`}
      >
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Bot className="w-6 h-6 text-brand-500" />
            Media Z AI
          </h1>
          <p className="text-xs text-slate-400 mt-1">Survey Comparator</p>
          <p className="text-[10px] text-slate-500 mt-0.5">Asem Galal (G&K) - 2006</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {llms.map((llm) => (
            <React.Fragment key={llm.id}>
              <button
                onClick={() => {
                  onSelectLLM(llm.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex justify-between items-center group
                  ${selectedLLMId === llm.id 
                    ? 'bg-brand-600 text-white shadow-lg' 
                    : 'hover:bg-slate-800 text-slate-300'}`}
              >
                <span className="font-medium text-sm">{llm.name}</span>
                {cartItems.some(item => item.llmId === llm.id) && (
                   <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                )}
              </button>
              {llm.id === 'prompt' && (
                <div className="py-2">
                  <div className="border-b border-slate-700 mx-2" />
                </div>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3">
          {cartItems.length > 0 && (
            <button
              onClick={onReset}
              className="w-full py-2 px-4 rounded-lg text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors flex items-center justify-center gap-2 border border-red-900/30"
            >
              <Trash2 className="w-3 h-3" />
              Reset Selection
            </button>
          )}

          <button
            onClick={onCheckout}
            disabled={cartItems.length === 0}
            className={`w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all
              ${cartItems.length > 0 
                ? 'bg-green-500 hover:bg-green-600 text-white shadow-green-500/20 shadow-lg' 
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
          >
            <CheckSquare className="w-5 h-5" />
            Checkout ({cartItems.length})
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;