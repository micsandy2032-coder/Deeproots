import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart Solutions',
    content: 'Deeproots Advisory transformed our financial planning. Their strategic guidance helped us scale from 10 to 100 employees in just 18 months.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, GreenLeaf Enterprises',
    content: 'The team\'s expertise in compliance and tax planning saved us significant costs. They\'re not just advisors, they\'re partners in our growth.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Anil Verma',
    role: 'Director, Manufacturing Co.',
    content: 'Outstanding service! Their business advisory helped us navigate complex market challenges and emerge stronger. Highly recommended.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Meera Patel',
    role: 'Owner, Retail Chain',
    content: 'Professional, responsive, and results-driven. Deeproots Advisory has been instrumental in our expansion across multiple cities.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-emerald-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
            <p className="text-gray-600">Businesses Advised</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="text-4xl font-bold text-emerald-600 mb-2">4.9/5</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
