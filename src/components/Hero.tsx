import { ArrowRight, TrendingUp, Users, Award, Star, MapPin } from 'lucide-react';

interface HeroProps {
  onNavigateToServices: () => void;
  onNavigateToFunctions: () => void;
}

export default function Hero({ onNavigateToServices, onNavigateToFunctions }: HeroProps) {
  return (
    <section id="home" className="pt-20 pb-24 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-emerald-600">Compliance</span>
              <br />
              <span className="text-gray-900">Made easy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Start, run and grow your business with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onNavigateToFunctions}
                className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center justify-center group shadow-lg"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-1">12000+</div>
                <p className="text-gray-600 text-sm">Customers served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-1">75%</div>
                <p className="text-gray-600 text-sm">Customers recommend us</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-1">50+</div>
                <p className="text-gray-600 text-sm">Cities across India</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="text-4xl font-bold text-emerald-600">4.6</div>
                  <Star className="h-6 w-6 text-yellow-400 fill-yellow-400 ml-1" />
                </div>
                <p className="text-gray-600 text-sm">Google Rating</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full opacity-20 absolute blur-3xl"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-80 h-96 relative">
                  <svg viewBox="0 0 300 400" className="w-full h-full">
                    <ellipse cx="150" cy="350" rx="80" ry="20" fill="#e5e7eb" opacity="0.3"/>

                    <rect x="100" y="200" width="100" height="150" rx="10" fill="#10b981"/>

                    <circle cx="150" cy="120" r="50" fill="#fef3c7"/>

                    <path d="M 130 100 Q 140 90 150 100 Q 160 90 170 100" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round"/>

                    <circle cx="135" cy="110" r="3" fill="#000"/>
                    <circle cx="165" cy="110" r="3" fill="#000"/>

                    <path d="M 140 125 Q 150 130 160 125" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round"/>

                    <rect x="145" y="135" width="10" height="5" rx="2" fill="#fbbf24"/>

                    <path d="M 100 210 Q 90 200 85 195 L 80 200 Q 75 210 80 220 L 100 220 Z" fill="#fef3c7"/>
                    <path d="M 200 210 Q 210 200 215 195 L 220 200 Q 225 210 220 220 L 200 220 Z" fill="#fef3c7"/>

                    <rect x="130" y="180" width="40" height="30" rx="5" fill="white" opacity="0.9"/>
                    <text x="150" y="200" fontSize="12" fill="#10b981" textAnchor="middle" fontWeight="bold">TAX</text>
                    <circle cx="165" cy="185" r="8" fill="#10b981"/>
                    <path d="M 162 185 L 165 188 L 170 181" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

                    <rect x="120" y="240" width="60" height="4" rx="2" fill="#1f2937"/>
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-8 right-0 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 animate-pulse">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="font-semibold">WhatsApp Chat</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-bounce delay-100"></div>
    </section>
  );
}
