import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Great product — early feedback here.',
    author: 'Sarah Mitchell',
    role: 'Fleet Manager',
  },
  {
    quote: 'Helped reduce downtime for our fleet by 40%.',
    author: 'James Chen',
    role: 'Logistics Director',
  },
  {
    quote: 'Clear UI and fast alerts saved us during an incident.',
    author: 'Rachel Torres',
    role: 'Operations Lead',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 border-t border-slate-200/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">What Users Say</h2>
          <p className="text-lg text-slate-600">Trusted by fleet operators and logistics teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-white/50 backdrop-blur-lg border border-slate-200/60 hover:border-blue-300/60 hover:bg-white/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic text-sm leading-relaxed">"{testi.quote}"</p>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{testi.author}</p>
                <p className="text-slate-600 text-xs">{testi.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
