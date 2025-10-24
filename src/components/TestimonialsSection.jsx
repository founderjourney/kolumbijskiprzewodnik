import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === t.testimonials.items.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [t.testimonials.items.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <path d="M20 20Q20 10 30 10H70Q80 10 80 20V70Q80 80 70 80H30Q20 80 20 70Z" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.testimonials.title}
          </h2>
        </div>

        {/* Testimonials */}
        <div className="relative">
          {/* Quote icon */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">
                "{t.testimonials.items[currentTestimonial].text}"
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-black">
                  {t.testimonials.items[currentTestimonial].author.charAt(0)}
                </span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">
                  {t.testimonials.items[currentTestimonial].author}
                </div>
                <div className="text-gray-500">
                  {t.testimonials.items[currentTestimonial].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {t.testimonials.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Social proof elements */}
        <div className="mt-16 flex justify-center gap-8 opacity-60">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-600 font-medium">5.0 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            <span className="text-gray-600 font-medium">25+ Tours</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇵🇱</span>
            <span className="text-gray-600 font-medium">Polish Owned</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;