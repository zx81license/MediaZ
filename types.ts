export type Language = 'en' | 'ar';

export type QuestionType = 'single' | 'multiple' | 'text' | 'rank' | 'slider';

export interface Option {
  label_en: string;
  label_ar: string;
}

export interface Question {
  id: string;
  section: string;
  text_en: string;
  text_ar: string;
  type: QuestionType;
  options?: Option[];
  instructions_en?: string;
  instructions_ar?: string;
  page: number; // Page number for pagination grouping
}

export interface SurveyVersion {
  id: string; // The LLM name as ID
  name: string; // Display name
  description_en: string;
  description_ar: string;
  intro_en: string;
  intro_ar: string;
  questions: Question[];
}

export interface CartItem {
  llmId: string;
  questionId: string;
}
