import { Activity } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/40 border-b border-slate-200/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-slate-600 flex items-center justify-center">
            <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-slate-900">Eagle Track</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-600 hover:text-slate-900 transition font-medium text-sm">Home</a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition font-medium text-sm">Services</a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition font-medium text-sm">Pricing</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 transition font-medium text-sm">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-slate-700 hover:text-slate-900 font-medium text-sm transition">Login</button>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
