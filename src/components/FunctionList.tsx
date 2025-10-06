import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { FunctionType } from '../types/function';

interface FunctionListProps {
  functions: FunctionType[];
  onSelectFunction: (func: FunctionType) => void;
}

export default function FunctionList({ functions, onSelectFunction }: FunctionListProps) {
  const categories = Array.from(new Set(functions.map(func => func.category)));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-emerald-500 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services & Functions</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Comprehensive business solutions tailored to meet your unique needs.
            Explore our full range of services and discover how we can help you succeed.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category) => {
          const categoryFunctions = functions.filter(func => func.category === category);

          return (
            <section key={category} className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{category}</h2>
                <div className="w-24 h-1 bg-emerald-500 rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryFunctions.map((func) => {
                  const IconComponent = Icons[func.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

                  return (
                    <div
                      key={func.id}
                      onClick={() => onSelectFunction(func)}
                      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
                    >
                      <div className="p-8">
                        <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                          {IconComponent && (
                            <IconComponent className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                          )}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                          {func.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {func.shortDescription}
                        </p>

                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              {func.timeline.split(',')[0]}
                            </div>
                            <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-emerald-50 px-8 py-4">
                        <div className="flex items-center text-sm">
                          <span className="text-gray-600 mr-2">Starting from</span>
                          <span className="font-bold text-emerald-700">{func.pricing.split('(')[0]}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        <section className="mt-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Our experts can help you identify the right solutions for your business.
            Schedule a free consultation to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
              Contact Us
            </button>
          </div>
        </section>

        <section className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Experienced professionals with proven track records</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Timely Delivery</h3>
              <p className="text-gray-600 text-sm">Commitment to deadlines and quality service</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">No hidden costs, clear pricing structure</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">Continuous support even after service completion</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
