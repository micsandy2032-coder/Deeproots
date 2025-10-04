import { Menu, X, ChevronDown, FileText, Layers } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigateHome: () => void;
  onNavigateToDocumentation: () => void;
  onNavigateToFunctions: () => void;
}

export default function Header({ onNavigateHome, onNavigateToDocumentation, onNavigateToFunctions }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [incorporationOpen, setIncorporationOpen] = useState(false);
  const [iprOpen, setIprOpen] = useState(false);
  const [taxesOpen, setTaxesOpen] = useState(false);
  const [compliancesOpen, setCompliancesOpen] = useState(false);

  const incorporationItems = [
    'Private Limited Company',
    'Limited Liability Partnership',
    'Partnership Firm',
    'One Person Company',
    'Proprietorship Firm',
    'Public Limited Company',
    'Section 8 Company',
    'Nidhi Company',
    'Producer Company',
    'Trust'
  ];

  const iprItems = [
    'Trademark Registration',
    'Trademark Assignment',
    'Trademark Objection',
    'Trademark Hearing',
    'Copyright Registration',
    'Patent Registration'
  ];

  const taxesItems = [
    { label: 'Tax Filings', items: ['Income tax Return', 'GST Return', 'TDS/TCS Return', 'Respond to Income Tax Notice', 'Respond to GST Notice', 'E-way bill'] },
    { label: 'Tax Registration', items: ['TAN Application', 'PAN Application', 'GST Registration'] }
  ];

  const compliancesItems = [
    'ROC Compliance',
    'LLP Annual Filing',
    'MSME Registration',
    'Accounting & Bookkeeping',
    'Payroll Management'
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button onClick={onNavigateHome} className="text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors">
              Deeproots Advisory
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-2"
                onMouseEnter={() => setIncorporationOpen(true)}
                onMouseLeave={() => setIncorporationOpen(false)}
              >
                Incorporation
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {incorporationOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 z-50"
                  onMouseEnter={() => setIncorporationOpen(true)}
                  onMouseLeave={() => setIncorporationOpen(false)}
                >
                  {incorporationItems.map((item, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-2"
                onMouseEnter={() => setIprOpen(true)}
                onMouseLeave={() => setIprOpen(false)}
              >
                IPR
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {iprOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 z-50"
                  onMouseEnter={() => setIprOpen(true)}
                  onMouseLeave={() => setIprOpen(false)}
                >
                  {iprItems.map((item, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-2"
                onMouseEnter={() => setTaxesOpen(true)}
                onMouseLeave={() => setTaxesOpen(false)}
              >
                Taxes
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {taxesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-2 z-50"
                  onMouseEnter={() => setTaxesOpen(true)}
                  onMouseLeave={() => setTaxesOpen(false)}
                >
                  {taxesItems.map((section, idx) => (
                    <div key={idx}>
                      <div className="px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-50">
                        {section.label}
                      </div>
                      {section.items.map((item, itemIdx) => (
                        <button
                          key={itemIdx}
                          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-2"
                onMouseEnter={() => setCompliancesOpen(true)}
                onMouseLeave={() => setCompliancesOpen(false)}
              >
                Compliances Package
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {compliancesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 z-50"
                  onMouseEnter={() => setCompliancesOpen(true)}
                  onMouseLeave={() => setCompliancesOpen(false)}
                >
                  {compliancesItems.map((item, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onNavigateToDocumentation}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Learning center
            </button>
          </div>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={onNavigateHome} className="text-gray-700 hover:text-red-600 transition-colors text-left">
                Home
              </button>
              <button onClick={onNavigateToFunctions} className="text-gray-700 hover:text-red-600 transition-colors text-left">
                All Services
              </button>
              <button onClick={onNavigateToDocumentation} className="text-gray-700 hover:text-red-600 transition-colors text-left">
                Learning Center
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
