import { FunctionType } from '../types/function';

export const functionsData: FunctionType[] = [
  {
    id: 'business-advisory',
    title: 'Business Advisory Services',
    category: 'Advisory',
    shortDescription: 'Strategic business consulting to drive growth and operational excellence',
    icon: 'Briefcase',
    fullDescription: 'Our Business Advisory Services provide comprehensive strategic guidance to help your business achieve sustainable growth. We work closely with you to understand your business objectives, analyze market opportunities, and develop actionable strategies.',
    keyFeatures: [
      'Strategic Business Planning',
      'Market Entry Strategy',
      'Business Model Optimization',
      'Performance Improvement',
      'Change Management',
      'Operational Excellence'
    ],
    documentsRequired: [
      { title: 'Business Registration', description: 'Company incorporation certificate or business registration documents', icon: 'FileText' },
      { title: 'Financial Statements', description: 'Last 2-3 years financial statements and projections', icon: 'DollarSign' },
      { title: 'Business Plan', description: 'Current business plan or executive summary', icon: 'BookOpen' },
      { title: 'Market Analysis', description: 'Any existing market research or competitor analysis', icon: 'TrendingUp' }
    ],
    processSteps: [
      { step: 1, title: 'Initial Consultation', description: 'Understanding your business goals and challenges', duration: '1-2 hours' },
      { step: 2, title: 'Business Assessment', description: 'Comprehensive analysis of operations and market position', duration: '1-2 weeks' },
      { step: 3, title: 'Strategy Development', description: 'Creating customized strategies and action plans', duration: '2-3 weeks' },
      { step: 4, title: 'Implementation Support', description: 'Guiding you through strategy execution', duration: 'Ongoing' }
    ],
    deliverables: ['Business Assessment Report', 'Strategic Roadmap', 'Financial Projections', 'Implementation Guidelines'],
    timeline: '4-6 weeks for strategy development',
    pricing: 'Starting from ₹50,000',
    benefits: ['Data-driven decisions', 'Improved efficiency', 'Enhanced competitiveness', 'Risk mitigation'],
    faqs: [
      { question: 'How is advisory different from consulting?', answer: 'Business advisory is a long-term partnership focused on strategic guidance, while consulting is project-based.' },
      { question: 'What size businesses do you work with?', answer: 'We work with businesses of all sizes, from startups to enterprises.' }
    ]
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning & Wealth Management',
    category: 'Financial Services',
    shortDescription: 'Comprehensive financial planning for businesses and individuals',
    icon: 'DollarSign',
    fullDescription: 'Our Financial Planning services help you build and protect wealth through strategic investment planning, risk management, and comprehensive financial analysis.',
    keyFeatures: ['Investment Portfolio Management', 'Retirement Planning', 'Tax-efficient Strategies', 'Risk Assessment', 'Estate Planning', 'Cash Flow Management'],
    documentsRequired: [
      { title: 'PAN Card', description: 'Permanent Account Number for tax identification', icon: 'CreditCard' },
      { title: 'Income Proof', description: 'Salary slips, ITR, or business income statements', icon: 'FileText' },
      { title: 'Investment Statements', description: 'Current portfolio statements and asset details', icon: 'PieChart' },
      { title: 'Bank Statements', description: 'Last 6 months bank statements', icon: 'Landmark' }
    ],
    processSteps: [
      { step: 1, title: 'Financial Assessment', description: 'Review of current financial situation', duration: '1 week' },
      { step: 2, title: 'Goal Setting', description: 'Define financial objectives and risk tolerance', duration: '1 week' },
      { step: 3, title: 'Strategy Development', description: 'Create customized financial plan', duration: '2 weeks' },
      { step: 4, title: 'Implementation', description: 'Execute the financial plan', duration: '1-2 weeks' }
    ],
    deliverables: ['Financial Plan Document', 'Investment Recommendations', 'Risk Management Strategy', 'Tax Optimization Plan'],
    timeline: '4-6 weeks for plan development',
    pricing: 'Starting from ₹25,000',
    benefits: ['Personalized roadmap', 'Tax-efficient wealth creation', 'Diversified portfolio', 'Financial security'],
    faqs: [
      { question: 'What is the minimum investment?', answer: 'No minimum investment required. We customize strategies for all wealth levels.' },
      { question: 'How often should I review my plan?', answer: 'We recommend quarterly reviews and annual comprehensive reviews.' }
    ]
  },
  {
    id: 'compliance-services',
    title: 'Regulatory Compliance Services',
    category: 'Compliance',
    shortDescription: 'Stay compliant with all regulatory requirements effortlessly',
    icon: 'FileCheck',
    fullDescription: 'Our Compliance Services ensure your business meets all regulatory requirements across various laws and regulations. We help you navigate complex compliance landscapes.',
    keyFeatures: ['ROC Compliance', 'GST Compliance', 'Income Tax Filing', 'TDS Compliance', 'Regulatory Filings', 'Compliance Calendar'],
    documentsRequired: [
      { title: 'Company Documents', description: 'Certificate of Incorporation, MOA, AOA, and PAN', icon: 'Building2' },
      { title: 'Financial Records', description: 'Books of accounts and financial statements', icon: 'Receipt' },
      { title: 'Previous Returns', description: 'Copies of previously filed returns', icon: 'Archive' },
      { title: 'Director Details', description: 'DIN, PAN, Aadhaar of all directors', icon: 'Users' }
    ],
    processSteps: [
      { step: 1, title: 'Compliance Audit', description: 'Review current compliance status', duration: '1 week' },
      { step: 2, title: 'Documentation Review', description: 'Collect and verify documents', duration: '1 week' },
      { step: 3, title: 'Return Preparation', description: 'Prepare compliance documents', duration: '1-2 weeks' },
      { step: 4, title: 'Filing & Submission', description: 'File returns with authorities', duration: '3-5 days' }
    ],
    deliverables: ['Compliance Report', 'Filed Returns', 'Compliance Calendar', 'Register Updates'],
    timeline: 'Ongoing annual engagement',
    pricing: 'Starting from ₹15,000/year',
    benefits: ['Avoid penalties', 'Timely filing', 'Professional record keeping', 'Peace of mind'],
    faqs: [
      { question: 'What if I miss a deadline?', answer: 'We help file belated returns and minimize penalties.' },
      { question: 'Can you help with past issues?', answer: 'Yes, we can rectify past compliance issues.' }
    ]
  },
  {
    id: 'tax-advisory',
    title: 'Tax Advisory & Planning',
    category: 'Taxation',
    shortDescription: 'Expert tax planning to optimize your tax liability legally',
    icon: 'Calculator',
    fullDescription: 'Our Tax Advisory services help businesses and individuals minimize tax liability through strategic planning and expert guidance.',
    keyFeatures: ['Income Tax Planning', 'GST Advisory', 'Tax Optimization', 'Transfer Pricing', 'International Taxation', 'Dispute Resolution'],
    documentsRequired: [
      { title: 'PAN & Aadhaar', description: 'Permanent Account Number and Aadhaar card', icon: 'CreditCard' },
      { title: 'Income Documents', description: 'Form 16, salary slips, business income statements', icon: 'FileText' },
      { title: 'Investment Proof', description: 'Investment certificates and loan statements', icon: 'TrendingUp' },
      { title: 'Bank Statements', description: 'Bank statements for the financial year', icon: 'Landmark' }
    ],
    processSteps: [
      { step: 1, title: 'Tax Position Analysis', description: 'Review current tax situation', duration: '3-5 days' },
      { step: 2, title: 'Tax Planning Strategy', description: 'Develop optimization strategies', duration: '1 week' },
      { step: 3, title: 'Implementation', description: 'Guide through tax-saving measures', duration: '2-3 weeks' },
      { step: 4, title: 'Return Preparation', description: 'Prepare and file tax returns', duration: '1 week' }
    ],
    deliverables: ['Tax Planning Report', 'Tax Computation', 'Filed Tax Returns', 'Tax Saving Recommendations'],
    timeline: '2-3 weeks for planning',
    pricing: 'Starting from ₹5,000',
    benefits: ['Reduced tax liability', 'Proactive planning', 'Compliance with laws', 'Avoid notices'],
    faqs: [
      { question: 'When should I start tax planning?', answer: 'At the beginning of the financial year for maximum benefits.' },
      { question: 'Can you help with tax notices?', answer: 'Yes, we provide complete support for tax notices and appeals.' }
    ]
  },
  {
    id: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    category: 'Accounting',
    shortDescription: 'Professional bookkeeping for accurate financial records',
    icon: 'TrendingUp',
    fullDescription: 'Our Accounting and Bookkeeping services provide comprehensive financial record management for your business.',
    keyFeatures: ['Transaction Recording', 'Bank Reconciliation', 'Financial Statements', 'Payroll Processing', 'Accounts Management', 'MIS Reports'],
    documentsRequired: [
      { title: 'Business Documents', description: 'Company PAN, GST registration, incorporation certificate', icon: 'Building2' },
      { title: 'Bank Statements', description: 'All bank and credit card statements', icon: 'Landmark' },
      { title: 'Invoice Copies', description: 'Sales invoices, purchase invoices, expense bills', icon: 'Receipt' },
      { title: 'Salary Records', description: 'Employee salary details, PF, ESI records', icon: 'Users' }
    ],
    processSteps: [
      { step: 1, title: 'Initial Setup', description: 'Set up accounting system', duration: '3-5 days' },
      { step: 2, title: 'Data Entry', description: 'Record all transactions', duration: 'Daily/Weekly' },
      { step: 3, title: 'Reconciliation', description: 'Reconcile bank accounts', duration: 'Monthly' },
      { step: 4, title: 'Financial Statements', description: 'Prepare P&L and Balance Sheet', duration: 'Monthly' }
    ],
    deliverables: ['Updated Books', 'Monthly Financial Statements', 'Bank Reconciliations', 'MIS Reports'],
    timeline: 'Ongoing monthly engagement',
    pricing: 'Starting from ₹5,000/month',
    benefits: ['Accurate records', 'Better decisions', 'Audit-ready books', 'Real-time insights'],
    faqs: [
      { question: 'Do I need to provide physical documents?', answer: 'No, we work with scanned copies and digital documents.' },
      { question: 'How often will I receive reports?', answer: 'Monthly financial statements as standard.' }
    ]
  },
  {
    id: 'risk-management',
    title: 'Business Risk Management',
    category: 'Risk Advisory',
    shortDescription: 'Identify, assess, and mitigate business risks effectively',
    icon: 'Shield',
    fullDescription: 'Our Risk Management services help businesses identify potential risks, assess their impact, and develop strategies to mitigate them.',
    keyFeatures: ['Risk Assessment', 'Business Continuity', 'Insurance Advisory', 'Cybersecurity Risk', 'Compliance Risk', 'Crisis Management'],
    documentsRequired: [
      { title: 'Business Profile', description: 'Company details and organizational structure', icon: 'Building2' },
      { title: 'Financial Statements', description: 'Recent financial statements', icon: 'DollarSign' },
      { title: 'Insurance Policies', description: 'Current insurance coverage details', icon: 'Shield' },
      { title: 'Contracts', description: 'Key business contracts and agreements', icon: 'FileText' }
    ],
    processSteps: [
      { step: 1, title: 'Risk Assessment', description: 'Evaluate all business risk areas', duration: '2 weeks' },
      { step: 2, title: 'Risk Prioritization', description: 'Categorize risks by impact', duration: '1 week' },
      { step: 3, title: 'Mitigation Strategy', description: 'Develop risk mitigation plans', duration: '2 weeks' },
      { step: 4, title: 'Implementation', description: 'Implement risk controls', duration: '3-4 weeks' }
    ],
    deliverables: ['Risk Assessment Report', 'Risk Register', 'Business Continuity Plan', 'Insurance Gap Analysis'],
    timeline: '6-8 weeks for assessment',
    pricing: 'Starting from ₹40,000',
    benefits: ['Proactive identification', 'Reduced disruptions', 'Better insurance', 'Enhanced resilience'],
    faqs: [
      { question: 'What types of risks do you cover?', answer: 'All major categories including operational, financial, strategic, and compliance risks.' },
      { question: 'Is this only for large companies?', answer: 'No, businesses of all sizes need risk management.' }
    ]
  }
];
