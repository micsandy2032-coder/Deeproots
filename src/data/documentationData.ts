import { DocumentationType } from '../types/documentation';

export const documentationData: DocumentationType[] = [
  {
    id: 'private-limited-company',
    title: 'Private Limited Company Registration',
    category: 'Company Registration',
    description: 'Register your Private Limited Company with ease. Enjoy limited liability protection and attract investors.',
    icon: 'Building2',
    overview: 'A Private Limited Company is the most popular business structure for startups and growing businesses in India. It offers limited liability protection to its shareholders and provides credibility to attract investors and customers. This structure is ideal for businesses looking to scale and raise capital.',
    benefits: [
      'Limited Liability Protection for shareholders',
      'Separate Legal Entity status',
      'Easy to raise capital and attract investors',
      'Perpetual succession regardless of ownership changes',
      'Enhanced credibility with customers and vendors',
      'Tax benefits and deductions available',
      'Easy transferability of shares',
      'Foreign Direct Investment (FDI) allowed'
    ],
    requirements: [
      'Minimum 2 Directors (Maximum 15)',
      'Minimum 2 Shareholders (Maximum 200)',
      'Digital Signature Certificate (DSC) for all directors',
      'Director Identification Number (DIN) for all directors',
      'PAN Card and Aadhaar Card of all directors',
      'Registered office address proof',
      'Minimum authorized capital of Rs. 1 lakh (no longer mandatory)',
      'Unique company name'
    ],
    process: [
      {
        step: 1,
        title: 'Obtain Digital Signature Certificate (DSC)',
        description: 'All directors must obtain a Digital Signature Certificate to sign documents electronically.'
      },
      {
        step: 2,
        title: 'Apply for Director Identification Number (DIN)',
        description: 'Each director needs a unique DIN, which is obtained through the MCA portal.'
      },
      {
        step: 3,
        title: 'Name Approval',
        description: 'Submit the proposed company name through the RUN (Reserve Unique Name) form for approval.'
      },
      {
        step: 4,
        title: 'File Incorporation Documents',
        description: 'Prepare and file SPICe+ form along with MOA, AOA, and other required documents.'
      },
      {
        step: 5,
        title: 'Certificate of Incorporation',
        description: 'Upon approval, receive the Certificate of Incorporation with CIN, PAN, and TAN.'
      }
    ],
    timeline: '15-20 working days',
    pricing: 'Starting from ₹9,999 (excluding government fees)',
    faqs: [
      {
        question: 'What is the minimum capital required?',
        answer: 'There is no minimum capital requirement for Private Limited Company registration in India.'
      },
      {
        question: 'Can a single person start a Private Limited Company?',
        answer: 'No, you need at least 2 directors and 2 shareholders to register a Private Limited Company.'
      },
      {
        question: 'Is a physical office required?',
        answer: 'Yes, you need a registered office address. It can be a residential or commercial address with proper documentation.'
      },
      {
        question: 'What are the annual compliance requirements?',
        answer: 'You need to file annual returns, conduct annual general meetings, maintain statutory registers, and file income tax returns.'
      }
    ]
  },
  {
    id: 'llp-registration',
    title: 'Limited Liability Partnership (LLP) Registration',
    category: 'Company Registration',
    description: 'Combine the benefits of partnership and company with LLP registration. Ideal for professionals and small businesses.',
    icon: 'Users',
    overview: 'Limited Liability Partnership (LLP) is a hybrid business structure that combines the flexibility of a partnership with the advantages of limited liability. It is ideal for professional services firms and small to medium businesses that want operational flexibility with protection from personal liability.',
    benefits: [
      'Limited liability protection for partners',
      'No minimum capital requirement',
      'Fewer compliance requirements compared to companies',
      'Flexible management structure',
      'Lower registration and operational costs',
      'Perpetual succession',
      'Separate legal entity',
      'Tax benefits for partners'
    ],
    requirements: [
      'Minimum 2 Designated Partners (no maximum limit)',
      'At least one partner must be Indian resident',
      'Digital Signature Certificate (DSC) for designated partners',
      'Director Identification Number (DIN) for designated partners',
      'PAN Card and Aadhaar Card of all partners',
      'Registered office address proof',
      'LLP Agreement',
      'Unique LLP name'
    ],
    process: [
      {
        step: 1,
        title: 'Obtain DSC and DIN',
        description: 'Get Digital Signature Certificate and Director Identification Number for designated partners.'
      },
      {
        step: 2,
        title: 'Name Reservation',
        description: 'Apply for name approval through RUN-LLP form on MCA portal.'
      },
      {
        step: 3,
        title: 'File Incorporation Form',
        description: 'Submit FiLLiP form with required documents including LLP Agreement draft.'
      },
      {
        step: 4,
        title: 'Certificate of Incorporation',
        description: 'Receive LLP Incorporation Certificate with LLPIN upon approval.'
      },
      {
        step: 5,
        title: 'File LLP Agreement',
        description: 'Submit the executed LLP Agreement within 30 days of incorporation.'
      }
    ],
    timeline: '12-15 working days',
    pricing: 'Starting from ₹7,999 (excluding government fees)',
    faqs: [
      {
        question: 'What is the difference between LLP and Private Limited Company?',
        answer: 'LLP has fewer compliance requirements, more flexible management, but cannot raise funds through equity. Private Limited Company has more compliance but can raise capital easily.'
      },
      {
        question: 'Can foreigners be partners in an LLP?',
        answer: 'Yes, foreign nationals can be partners, but at least one designated partner must be an Indian resident.'
      },
      {
        question: 'Is audit mandatory for LLP?',
        answer: 'Audit is mandatory if contribution exceeds ₹25 lakhs or annual turnover exceeds ₹40 lakhs.'
      }
    ]
  },
  {
    id: 'sole-proprietorship',
    title: 'Sole Proprietorship Registration',
    category: 'Company Registration',
    description: 'Start your business as a sole proprietor. Simple, cost-effective, and ideal for individual entrepreneurs.',
    icon: 'User',
    overview: 'Sole Proprietorship is the simplest form of business structure where a single individual owns and operates the business. It is ideal for freelancers, consultants, and small business owners who want to start quickly with minimal formalities and costs.',
    benefits: [
      'Easy and quick to set up',
      'Minimal compliance requirements',
      'Complete control over business decisions',
      'Low setup and operational costs',
      'Direct claim to all profits',
      'Easy to dissolve',
      'Minimal paperwork',
      'Simple tax filing'
    ],
    requirements: [
      'PAN Card of the proprietor',
      'Aadhaar Card',
      'Bank account proof',
      'Address proof of business premises',
      'Passport size photographs',
      'Business name (optional)',
      'Mobile number and email ID'
    ],
    process: [
      {
        step: 1,
        title: 'Choose Business Name',
        description: 'Select a unique name for your business (optional for sole proprietorship).'
      },
      {
        step: 2,
        title: 'Register for GST',
        description: 'If turnover exceeds threshold, register for GST. This also serves as business registration proof.'
      },
      {
        step: 3,
        title: 'Open Bank Account',
        description: 'Open a current account in the business name for financial transactions.'
      },
      {
        step: 4,
        title: 'Obtain Trade License',
        description: 'Get trade license from local municipal authority (if required).'
      },
      {
        step: 5,
        title: 'Register for Other Licenses',
        description: 'Obtain any industry-specific licenses or registrations as applicable.'
      }
    ],
    timeline: '7-10 working days',
    pricing: 'Starting from ₹2,999 (excluding government fees)',
    faqs: [
      {
        question: 'Is registration mandatory for sole proprietorship?',
        answer: 'No formal registration is required. However, you may need GST registration, shop act license, or other permits based on your business type.'
      },
      {
        question: 'What are the tax implications?',
        answer: 'Business income is added to your personal income and taxed according to individual income tax slabs.'
      },
      {
        question: 'Can I hire employees?',
        answer: 'Yes, you can hire employees and must comply with labor laws and regulations.'
      }
    ]
  },
  {
    id: 'partnership-firm',
    title: 'Partnership Firm Registration',
    category: 'Company Registration',
    description: 'Register your partnership firm and share responsibilities with partners. Perfect for collaborative businesses.',
    icon: 'UserPlus',
    overview: 'A Partnership Firm is a business structure where two or more individuals manage and operate a business in accordance with the terms laid out in a Partnership Deed. It is suitable for professional services and small to medium-sized businesses.',
    benefits: [
      'Easy to form and manage',
      'Shared responsibility and decision making',
      'Combined capital and resources',
      'Flexibility in operations',
      'Lower compliance compared to companies',
      'Tax benefits for partners',
      'Shared business risks',
      'Collaborative expertise'
    ],
    requirements: [
      'Minimum 2 partners (Maximum 20 for non-banking, 10 for banking)',
      'Partnership Deed',
      'PAN Card of all partners',
      'Address proof of all partners',
      'Address proof of business premises',
      'Photographs of all partners',
      'Unique firm name'
    ],
    process: [
      {
        step: 1,
        title: 'Draft Partnership Deed',
        description: 'Prepare a comprehensive partnership deed outlining roles, profit sharing, and terms.'
      },
      {
        step: 2,
        title: 'Apply for PAN',
        description: 'Obtain PAN card for the partnership firm from Income Tax Department.'
      },
      {
        step: 3,
        title: 'Register Partnership Deed',
        description: 'Register the partnership deed with the Registrar of Firms (optional but recommended).'
      },
      {
        step: 4,
        title: 'Open Bank Account',
        description: 'Open a current account in the partnership firm name.'
      },
      {
        step: 5,
        title: 'Obtain Required Licenses',
        description: 'Apply for GST registration, shop license, and other applicable registrations.'
      }
    ],
    timeline: '10-12 working days',
    pricing: 'Starting from ₹4,999 (excluding government fees)',
    faqs: [
      {
        question: 'Is partnership deed registration mandatory?',
        answer: 'Registration is optional but highly recommended for legal protection and dispute resolution.'
      },
      {
        question: 'What happens if a partner wants to exit?',
        answer: 'The partnership deed should outline exit procedures. Generally, partners can exit with proper notice and settlement.'
      },
      {
        question: 'Are partners personally liable?',
        answer: 'Yes, partners have unlimited liability and are personally liable for firm debts and obligations.'
      }
    ]
  },
  {
    id: 'one-person-company',
    title: 'One Person Company (OPC) Registration',
    category: 'Company Registration',
    description: 'Solo entrepreneur? Register an OPC and enjoy company benefits with single ownership.',
    icon: 'Award',
    overview: 'One Person Company (OPC) is a unique business structure that allows a single entrepreneur to operate a company with limited liability protection. It combines the benefits of a sole proprietorship with the advantages of a company structure.',
    benefits: [
      'Single ownership with limited liability',
      'Separate legal entity status',
      'Easier to raise funds than sole proprietorship',
      'Perpetual succession',
      'No minimum capital requirement',
      'Better credibility than sole proprietorship',
      'Can be converted to Private Limited Company',
      'Tax benefits available'
    ],
    requirements: [
      'One director and one nominee',
      'Indian citizen and resident',
      'Digital Signature Certificate (DSC)',
      'Director Identification Number (DIN)',
      'PAN Card and Aadhaar Card',
      'Registered office address proof',
      'Unique company name',
      'Nominee consent'
    ],
    process: [
      {
        step: 1,
        title: 'Obtain DSC and DIN',
        description: 'Get Digital Signature Certificate and Director Identification Number for the director.'
      },
      {
        step: 2,
        title: 'Name Approval',
        description: 'Apply for name reservation through RUN form on MCA portal.'
      },
      {
        step: 3,
        title: 'Prepare Documents',
        description: 'Draft MOA, AOA, and obtain nominee consent for OPC formation.'
      },
      {
        step: 4,
        title: 'File SPICe+ Form',
        description: 'Submit incorporation application with all required documents.'
      },
      {
        step: 5,
        title: 'Certificate of Incorporation',
        description: 'Receive Certificate of Incorporation with CIN upon approval.'
      }
    ],
    timeline: '15-18 working days',
    pricing: 'Starting from ₹8,999 (excluding government fees)',
    faqs: [
      {
        question: 'Can NRI register an OPC?',
        answer: 'No, only Indian citizens who are residents in India can register an OPC.'
      },
      {
        question: 'What is the role of nominee?',
        answer: 'The nominee becomes the member in case of death or incapacity of the sole member.'
      },
      {
        question: 'Can OPC do all types of business?',
        answer: 'OPC cannot carry out Non-Banking Financial Investment activities or charitable activities.'
      }
    ]
  },
  {
    id: 'gst-registration',
    title: 'GST Registration',
    category: 'Tax Registration',
    description: 'Register for GST and stay compliant. Mandatory for businesses with turnover above threshold.',
    icon: 'FileText',
    overview: 'Goods and Services Tax (GST) Registration is mandatory for businesses that supply goods or services above the specified turnover threshold. GST is a comprehensive indirect tax that has replaced multiple taxes like VAT, service tax, and excise duty.',
    benefits: [
      'Legal recognition for business',
      'Input tax credit benefits',
      'Seamless interstate business operations',
      'Increased credibility with customers',
      'Competitive advantage over unregistered dealers',
      'Easy online filing and tracking',
      'Government tender eligibility',
      'Protection against tax evasion'
    ],
    requirements: [
      'PAN Card of business/proprietor',
      'Aadhaar Card',
      'Business registration proof',
      'Address proof of business premises',
      'Bank account details with cancelled cheque',
      'Digital signature (for companies)',
      'Photographs of proprietor/partners/directors',
      'Letter of authorization/board resolution'
    ],
    process: [
      {
        step: 1,
        title: 'Create GST Portal Account',
        description: 'Visit GST portal and create an account using valid mobile number and email ID.'
      },
      {
        step: 2,
        title: 'Fill Application Form',
        description: 'Complete GST REG-01 form with business details and upload required documents.'
      },
      {
        step: 3,
        title: 'Verification',
        description: 'Verify application through OTP and submit digitally signed application.'
      },
      {
        step: 4,
        title: 'ARN Generation',
        description: 'Receive Application Reference Number (ARN) for tracking application status.'
      },
      {
        step: 5,
        title: 'GST Certificate',
        description: 'Upon approval, download GSTIN certificate from GST portal.'
      }
    ],
    timeline: '5-7 working days',
    pricing: 'Starting from ₹1,999 (no government fees)',
    faqs: [
      {
        question: 'What is the turnover threshold for GST registration?',
        answer: 'GST registration is mandatory if annual turnover exceeds ₹40 lakhs for services and ₹20 lakhs for goods (₹20/10 lakhs for special category states).'
      },
      {
        question: 'Can I register for GST voluntarily?',
        answer: 'Yes, you can voluntarily register for GST even if your turnover is below the threshold limit.'
      },
      {
        question: 'What are GST return filing frequencies?',
        answer: 'Regular taxpayers file GSTR-1 monthly, GSTR-3B monthly, and annual returns. Composition scheme taxpayers file quarterly.'
      }
    ]
  },
  {
    id: 'trademark-registration',
    title: 'Trademark Registration',
    category: 'Intellectual Property',
    description: 'Protect your brand identity with trademark registration. Secure exclusive rights to your brand name and logo.',
    icon: 'Shield',
    overview: 'Trademark Registration provides legal protection for your brand name, logo, or tagline. It grants exclusive rights to use the mark and prevents others from using similar marks that could confuse consumers. A registered trademark is a valuable asset that adds credibility and value to your business.',
    benefits: [
      'Exclusive rights to use the mark',
      'Legal protection against infringement',
      'Nationwide brand protection',
      'Enhanced brand credibility',
      'Asset that can be licensed or sold',
      'Use of ® symbol',
      'Valid for 10 years (renewable)',
      'Protection in e-commerce platforms'
    ],
    requirements: [
      'Unique brand name or logo',
      'Applicant details (individual/company)',
      'Address proof of applicant',
      'Logo/wordmark representation',
      'List of goods/services covered',
      'Power of attorney (if filed through agent)',
      'User affidavit (if already using mark)',
      'Priority document (if claiming priority)'
    ],
    process: [
      {
        step: 1,
        title: 'Trademark Search',
        description: 'Conduct comprehensive search to check availability of the mark.'
      },
      {
        step: 2,
        title: 'File Application',
        description: 'Submit TM-A form with trademark details and select appropriate class(es).'
      },
      {
        step: 3,
        title: 'Examination',
        description: 'Trademark office examines the application for compliance and distinctiveness.'
      },
      {
        step: 4,
        title: 'Publication in Journal',
        description: 'If accepted, mark is published in Trademark Journal for opposition.'
      },
      {
        step: 5,
        title: 'Registration Certificate',
        description: 'If no opposition, receive Trademark Registration Certificate.'
      }
    ],
    timeline: '12-18 months',
    pricing: 'Starting from ₹6,999 per class (excluding government fees)',
    faqs: [
      {
        question: 'How long does trademark protection last?',
        answer: 'Trademark registration is valid for 10 years from the date of filing and can be renewed indefinitely.'
      },
      {
        question: 'Can I trademark a descriptive name?',
        answer: 'Generic or purely descriptive terms cannot be trademarked. The mark should be distinctive or acquire distinctiveness through use.'
      },
      {
        question: 'What are trademark classes?',
        answer: 'Trademarks are classified into 45 classes (34 for goods, 11 for services). You must register in classes relevant to your business.'
      }
    ]
  },
  {
    id: 'msme-registration',
    title: 'MSME/Udyam Registration',
    category: 'Business Registration',
    description: 'Get MSME registration and unlock government benefits, subsidies, and easier access to credit.',
    icon: 'Briefcase',
    overview: 'MSME (Micro, Small & Medium Enterprises) Registration, now called Udyam Registration, is a government initiative to provide recognition and benefits to small businesses. It offers various advantages including easier credit access, tax benefits, and protection against delayed payments.',
    benefits: [
      'Priority sector lending from banks',
      'Lower interest rates on loans',
      'Collateral-free credit',
      'Government subsidy schemes',
      'Protection against delayed payments',
      'Exemption from direct tax laws',
      'Preference in government tenders',
      'Reimbursement of ISO certification costs'
    ],
    requirements: [
      'Aadhaar number of entrepreneur',
      'PAN of enterprise',
      'GSTIN (if registered)',
      'Bank account details',
      'Business activity details',
      'Investment in plant & machinery',
      'Annual turnover information',
      'Number of employees'
    ],
    process: [
      {
        step: 1,
        title: 'Visit Udyam Portal',
        description: 'Access the official Udyam Registration portal (udyamregistration.gov.in).'
      },
      {
        step: 2,
        title: 'Fill Online Form',
        description: 'Complete the registration form with Aadhaar and business details.'
      },
      {
        step: 3,
        title: 'Auto-populate Data',
        description: 'System auto-fetches PAN and GST details based on provided information.'
      },
      {
        step: 4,
        title: 'Submit Application',
        description: 'Review details and submit application with self-declaration.'
      },
      {
        step: 5,
        title: 'Udyam Certificate',
        description: 'Receive Udyam Registration Number and downloadable certificate instantly.'
      }
    ],
    timeline: 'Instant (same day)',
    pricing: 'Starting from ₹999 (no government fees)',
    faqs: [
      {
        question: 'Who is eligible for MSME registration?',
        answer: 'All micro, small, and medium enterprises engaged in manufacturing, service, or trading activities are eligible.'
      },
      {
        question: 'What is the classification criteria?',
        answer: 'Micro: Investment up to ₹1 Cr & turnover up to ₹5 Cr. Small: Investment up to ₹10 Cr & turnover up to ₹50 Cr. Medium: Investment up to ₹50 Cr & turnover up to ₹250 Cr.'
      },
      {
        question: 'Is Udyam registration mandatory?',
        answer: 'It is not mandatory but highly beneficial for accessing government schemes and benefits.'
      }
    ]
  },
  {
    id: 'fssai-license',
    title: 'FSSAI License Registration',
    category: 'Business License',
    description: 'Mandatory for food businesses. Get FSSAI license and ensure food safety compliance.',
    icon: 'Apple',
    overview: 'Food Safety and Standards Authority of India (FSSAI) License is mandatory for all food business operators. It ensures that food products meet safety standards and regulations. The license type depends on the scale of business operations - Basic, State, or Central license.',
    benefits: [
      'Legal authorization to operate food business',
      'Consumer trust and credibility',
      'Access to larger markets',
      'Government tender participation',
      'Export eligibility',
      'Brand protection',
      'Compliance with food safety laws',
      'Avoid penalties and legal issues'
    ],
    requirements: [
      'Form B (for Basic/State) or Form A (for Central)',
      'Photo ID proof of proprietor/partners',
      'List of food products',
      'Business premises documents',
      'Business registration certificate',
      'Partnership deed/MOA-AOA (if applicable)',
      'NOC from municipality/panchayat',
      'Water test report (for Central license)'
    ],
    process: [
      {
        step: 1,
        title: 'Determine License Type',
        description: 'Choose between Basic Registration, State License, or Central License based on turnover.'
      },
      {
        step: 2,
        title: 'Create FoSCoS Account',
        description: 'Register on FSSAI FoSCoS portal and create account.'
      },
      {
        step: 3,
        title: 'Fill Application Form',
        description: 'Complete online application form with business and product details.'
      },
      {
        step: 4,
        title: 'Upload Documents',
        description: 'Upload all required documents and pay applicable fees.'
      },
      {
        step: 5,
        title: 'FSSAI Certificate',
        description: 'After verification, receive FSSAI license certificate and number.'
      }
    ],
    timeline: '15-60 days (depending on license type)',
    pricing: 'Starting from ₹2,999 (excluding government fees)',
    faqs: [
      {
        question: 'What are the different types of FSSAI licenses?',
        answer: 'Basic Registration (turnover up to ₹12 lakhs), State License (turnover ₹12 lakhs to ₹20 Cr), Central License (turnover above ₹20 Cr or for importers/manufacturers of specific categories).'
      },
      {
        question: 'Is FSSAI license required for home-based food business?',
        answer: 'Yes, even home-based food businesses require FSSAI Basic Registration if they are selling food products.'
      },
      {
        question: 'How long is FSSAI license valid?',
        answer: 'FSSAI license is valid for 1-5 years depending on the option selected during application. It can be renewed before expiry.'
      }
    ]
  },
  {
    id: 'import-export-code',
    title: 'Import Export Code (IEC)',
    category: 'Business Registration',
    description: 'Start international trade with IEC registration. Mandatory for importing or exporting goods and services.',
    icon: 'Globe',
    overview: 'Import Export Code (IEC) is a unique 10-digit code issued by the Directorate General of Foreign Trade (DGFT). It is mandatory for any business or individual wanting to import or export goods and services from India. The code is valid for a lifetime and requires no renewal.',
    benefits: [
      'Legal authorization for import/export',
      'Access to international markets',
      'Customs clearance facilitation',
      'Lifetime validity with one-time registration',
      'Benefits under Foreign Trade Policy',
      'Export incentives eligibility',
      'Required for EPCG and Advance License',
      'Build international business relationships'
    ],
    requirements: [
      'PAN Card of applicant',
      'Aadhaar Card (for individual)',
      'Business PAN (for companies/firms)',
      'Cancelled cheque or bank certificate',
      'Photograph of applicant',
      'Digital signature (for companies)',
      'Address proof of business',
      'Partnership deed/MOA-AOA (if applicable)'
    ],
    process: [
      {
        step: 1,
        title: 'Visit DGFT Portal',
        description: 'Access the official DGFT website and navigate to IEC section.'
      },
      {
        step: 2,
        title: 'Fill Online Application',
        description: 'Complete ANF 2A form with business and bank details.'
      },
      {
        step: 3,
        title: 'Upload Documents',
        description: 'Upload required documents including PAN, Aadhaar, and bank certificate.'
      },
      {
        step: 4,
        title: 'Pay Application Fee',
        description: 'Pay the applicable government fees through online payment gateway.'
      },
      {
        step: 5,
        title: 'IEC Certificate',
        description: 'Receive IEC number via email after verification and approval.'
      }
    ],
    timeline: '7-10 working days',
    pricing: 'Starting from ₹2,999 (excluding government fees)',
    faqs: [
      {
        question: 'Is IEC required for service exports?',
        answer: 'While IEC is not mandatory for service exports, it is required to avail export benefits and incentives under Foreign Trade Policy.'
      },
      {
        question: 'Can IEC be obtained by an individual?',
        answer: 'Yes, individuals, proprietorships, partnerships, LLPs, and companies can all obtain IEC.'
      },
      {
        question: 'Does IEC need to be renewed?',
        answer: 'No, IEC is valid for lifetime and does not require renewal. However, you must update it if business details change.'
      }
    ]
  }
];
