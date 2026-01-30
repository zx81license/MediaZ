import { SurveyVersion, CartItem } from '../types';

export const generateMarkdown = (
  surveyData: SurveyVersion[],
  cartItems: CartItem[]
): string => {
  let markdown = `# Selected Media Z Survey Questions\n\nGenerated on ${new Date().toLocaleDateString()}\n\n`;

  // Group cart items by LLM
  const itemsByLLM: Record<string, string[]> = {};
  cartItems.forEach(item => {
    if (!itemsByLLM[item.llmId]) {
      itemsByLLM[item.llmId] = [];
    }
    itemsByLLM[item.llmId].push(item.questionId);
  });

  // Iterate through available LLMs to maintain order
  surveyData.forEach(llm => {
    if (itemsByLLM[llm.id]) {
      markdown += `## ${llm.name}\n\n`;
      markdown += `> ${llm.description_en}\n\n`;

      const questionIds = itemsByLLM[llm.id];
      
      questionIds.forEach(qId => {
        const question = llm.questions.find(q => q.id === qId);
        if (question) {
            markdown += `### ${question.text_en}\n`;
            markdown += `*(${question.text_ar})*\n\n`;
            
            if (question.type !== 'text' && question.options) {
                question.options.forEach(opt => {
                    markdown += `- [ ] ${opt.label_en} / ${opt.label_ar}\n`;
                });
            } else if (question.type === 'text') {
                markdown += `> [Open text field]\n`;
            }
            markdown += `\n---\n\n`;
        }
      });
    }
  });

  return markdown;
};

export const downloadFile = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
