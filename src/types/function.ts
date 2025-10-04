export interface FunctionDocument {
  title: string;
  description: string;
  icon: string;
}

export interface FunctionType {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  icon: string;
  heroImage?: string;
  fullDescription: string;
  keyFeatures: string[];
  documentsRequired: FunctionDocument[];
  processSteps: {
    step: number;
    title: string;
    description: string;
    duration?: string;
  }[];
  deliverables: string[];
  timeline: string;
  pricing: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  benefits: string[];
}
