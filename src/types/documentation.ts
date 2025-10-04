export interface DocumentationType {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  overview: string;
  benefits: string[];
  requirements: string[];
  process: ProcessStep[];
  timeline: string;
  pricing: string;
  faqs: FAQ[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
