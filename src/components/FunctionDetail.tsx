import { ArrowLeft, CheckCircle, Clock, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import * as Icons from 'lucide-react';
import { FunctionType } from '../types/function';

interface FunctionDetailProps {
  functionData: FunctionType;
  onBack: () => void;
}

export default function FunctionDetail({ functionData, onBack }: FunctionDetailProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const IconComponent = Icons[functionData.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-white hover:text-red-100 mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Services
          </button>
          <div className="flex items-center mb-4">
            {IconComponent && (
              <div className="bg-white bg-opacity-20 p-4 rounded-xl mr-6">
                <IconComponent className="h-12 w-12 text-white" />
              </div>
            )}
            <div>
              <div className="text-sm text-red-100 mb-2">{functionData.category}</div>
              <h1 className="text-5xl font-bold mb-3">{functionData.title}</h1>
              <p className="text-xl text-red-100">{functionData.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{functionData.fullDescription}</p>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {functionData.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-8 border-2 border-red-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Documents Required for {functionData.title}
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Ensure you have the following documents ready for a smooth process
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {functionData.documentsRequired.map((doc, index) => {
                  const DocIcon = Icons[doc.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-red-100 p-4 rounded-lg mb-4">
                          {DocIcon && <DocIcon className="h-10 w-10 text-red-600" />}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
                        <p className="text-gray-600 text-sm">{doc.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-6">
                {functionData.processSteps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        {step.duration && (
                          <span className="text-sm text-red-600 font-semibold bg-red-50 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700">{step.description}</p>
                      {index < functionData.processSteps.length - 1 && (
                        <div className="mt-6 mb-2 ml-6 border-l-2 border-gray-200 h-8"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Get</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {functionData.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start bg-red-50 rounded-lg p-4">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{deliverable}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {functionData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {functionData.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      {expandedFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-red-600 flex-shrink-0" />
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-600">Timeline</div>
                      <div className="font-semibold text-gray-900">{functionData.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-600">Pricing</div>
                      <div className="font-semibold text-gray-900">{functionData.pricing}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500 rounded-xl shadow-md p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 text-red-100">
                  Our experts are here to help you every step of the way. Let's begin your journey!
                </p>
                <button className="w-full bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold mb-3">
                  Get Started Now
                </button>
                <button className="w-full border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold">
                  Schedule Consultation
                </button>
              </div>

              <div className="bg-gray-900 rounded-xl shadow-md p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Need Assistance?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Our team is available to answer your questions
                </p>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">Phone:</div>
                  <div className="font-semibold">+91 98765 43210</div>
                  <div className="text-gray-300 mt-3">Email:</div>
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
