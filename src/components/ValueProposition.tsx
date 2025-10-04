import { CheckCircle, Clock, Target, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Tailored Solutions',
    description: 'Every business is unique. We provide customized strategies that align with your specific goals and challenges.'
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Time is money. Our streamlined processes ensure quick delivery without compromising on quality.'
  },
  {
    icon: CheckCircle,
    title: 'Proven Expertise',
    description: 'Decades of combined experience across industries, ensuring you get the best advice every time.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Questions don\'t follow business hours. Our team is always available to support your business needs.'
  }
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Deeproots Advisory?</h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Building lasting partnerships through trust, expertise, and results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-white bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-20 transition-all transform group-hover:scale-110">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-emerald-100">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white bg-opacity-10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-emerald-100 mb-6">
                Join hundreds of successful businesses that trust Deeproots Advisory for their growth journey. Let's discuss how we can help you achieve your business goals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 mr-3 text-emerald-300" />
                  Free initial consultation
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 mr-3 text-emerald-300" />
                  Customized service packages
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 mr-3 text-emerald-300" />
                  Ongoing support and guidance
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Get Started Today</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <textarea
                  placeholder="Tell us about your business needs"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
