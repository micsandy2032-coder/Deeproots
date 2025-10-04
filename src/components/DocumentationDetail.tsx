import { ArrowLeft, CheckCircle, Clock, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import * as Icons from 'lucide-react';
import { DocumentationType } from '../types/documentation';

interface DocumentationDetailProps {
  documentation: DocumentationType;
  onBack: () => void;
}

export default function DocumentationDetail({ documentation, onBack }: DocumentationDetailProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const IconComponent = Icons[documentation.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-emerald-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-white hover:text-emerald-100 mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Documentation
          </button>
          <div className="flex items-center mb-4">
            {IconComponent && (
              <div className="bg-white bg-opacity-20 p-4 rounded-lg mr-4">
                <IconComponent className="h-10 w-10 text-white" />
              </div>
            )}
            <div>
              <div className="text-sm text-emerald-100 mb-1">{documentation.category}</div>
              <h1 className="text-4xl font-bold">{documentation.title}</h1>
            </div>
          </div>
          <p className="text-xl text-emerald-100 max-w-3xl">{documentation.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{documentation.overview}</p>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {documentation.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Process</h2>
              <div className="space-y-6">
                {documentation.process.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                      {index < documentation.process.length - 1 && (
                        <div className="mt-4 mb-2 ml-5 border-l-2 border-gray-200 h-6"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Documents Required</h2>
              <ul className="space-y-3">
                {documentation.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {documentation.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      {expandedFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-600">Timeline</div>
                      <div className="font-semibold text-gray-900">{documentation.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-600">Pricing</div>
                      <div className="font-semibold text-gray-900">{documentation.pricing}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-600 rounded-xl shadow-md p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 text-emerald-100">
                  Our experts will guide you through the entire process. Get started today!
                </p>
                <button className="w-full bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold mb-3">
                  Start Application
                </button>
                <button className="w-full border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                  Talk to Expert
                </button>
              </div>

              <div className="bg-gray-900 rounded-xl shadow-md p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Need Help?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Have questions? Our support team is here to help.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">Call us at:</div>
                  <div className="font-semibold">+91 98765 43210</div>
                  <div className="text-gray-300 mt-3">Email us at:</div>
                  <div className="font-semibold">info@deeprootsadvisory.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
