import { MapPin, Shield, TrendingUp, Clock, Zap, Globe } from 'lucide-react';

const capabilities = [
  {
    icon: MapPin,
    title: 'Real-time Tracking',
    description: 'Minute-by-minute location, live vehicle markers and route replay.',
  },
  {
    icon: Shield,
    title: 'Anti-Tamper Alert',
    description: 'Instant notifications on disconnection, tamper, or unusual behaviour.',
  },
  {
    icon: TrendingUp,
    title: 'Fleet Analytics',
    description: 'Idle time, route efficiency, and performance snapshots.',
  },
  {
    icon: Clock,
    title: 'History Playback',
    description: 'Replay trips, audit drivers and export route history up to 90 days.',
  },
  {
    icon: Zap,
    title: 'Remote Cut Power',
    description: 'Secure remote immobilization to assist fast recovery.',
  },
  {
    icon: Globe,
    title: 'Works Everywhere',
    description: 'Reliable connectivity across GSM networks and satellite-ready integrations.',
  },
];

export default function Capabilities() {
  return (
    <section className="py-24 px-6 border-t border-slate-200/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Key Capabilities</h2>
          <p className="text-lg text-slate-600">Everything your fleet needs — from live tracking to remote immobilization.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-slate-200/60 hover:border-blue-300/60 hover:bg-white/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-slate-500 p-2.5 mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                  <Icon className="w-full h-full text-white" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{cap.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
