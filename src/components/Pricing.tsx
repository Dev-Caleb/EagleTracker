import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Tracking & basic alerts',
    cta: 'Contact Sales',
    features: ['Real-time tracking', 'Basic alerts', '30-day history'],
    highlight: false,
  },
  {
    name: 'Business',
    description: 'Analytics, geofencing & alerts',
    cta: 'Get Business',
    features: ['All Starter features', 'Fleet analytics', 'Geofencing', '60-day history'],
    highlight: true,
  },
  {
    name: 'Fleet Pro',
    description: 'Full telematics suite & SLA',
    cta: 'Contact Sales',
    features: ['All Business features', 'Remote immobilization', '90-day history', 'Priority support'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 border-t border-slate-200/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600">Choose the plan that fits your fleet size and needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlight
                  ? 'p-8 bg-gradient-to-br from-blue-500 to-slate-600 border border-blue-400/40 shadow-xl shadow-blue-500/20 scale-105'
                  : 'p-8 bg-white/50 backdrop-blur-lg border border-slate-200/60 hover:border-blue-300/60 hover:bg-white/70 hover:shadow-lg hover:shadow-blue-500/10'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-blue-100' : 'text-slate-600'}`}>
                {plan.description}
              </p>

              <button
                className={`w-full px-6 py-3 rounded-lg font-semibold mb-8 transition-all ${
                  plan.highlight
                    ? 'bg-white text-blue-600 hover:shadow-lg'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/30'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-blue-600'}`} strokeWidth={3} />
                    <span className={`text-sm ${plan.highlight ? 'text-blue-50' : 'text-slate-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
