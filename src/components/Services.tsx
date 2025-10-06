import { Briefcase, DollarSign, FileCheck, TrendingUp, Calculator, Shield } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Business Advisory',
    description: 'Strategic planning and growth consulting to help your business reach new heights',
    features: ['Business Strategy', 'Market Analysis', 'Growth Planning']
  },
  {
    icon: DollarSign,
    title: 'Financial Planning',
    description: 'Comprehensive financial planning and wealth management solutions',
    features: ['Investment Planning', 'Risk Management', 'Wealth Creation']
  },
  {
    icon: FileCheck,
    title: 'Compliance Services',
    description: 'Stay compliant with all regulatory requirements and avoid penalties',
    features: ['Regulatory Compliance', 'Audit Support', 'Legal Documentation']
  },
  {
    icon: Calculator,
    title: 'Tax Advisory',
    description: 'Expert tax planning and advisory to optimize your tax obligations',
    features: ['Tax Planning', 'GST Consultation', 'Tax Filing']
  },
  {
    icon: TrendingUp,
    title: 'Accounting Services',
    description: 'Professional bookkeeping and accounting for accurate financial records',
    features: ['Bookkeeping', 'Financial Reports', 'Payroll Management']
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate business risks effectively',
    features: ['Risk Assessment', 'Insurance Planning', 'Business Continuity']
  }
];

interface ServicesProps {
  onNavigateToServices: () => void;
}

export default function Services({ onNavigateToServices }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive advisory services tailored to your business needs
          </p>
          <button
            onClick={onNavigateToServices}
            className="mt-6 inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            View All Documentation & Guides →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors flex items-center group">
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
