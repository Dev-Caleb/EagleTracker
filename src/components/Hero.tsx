export default function Hero() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
                Track Smarter. Protect Faster.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Real-time vehicle intelligence, anti-tamper alerts, and actionable fleet analytics — built for logistics teams and small operators.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white/60 backdrop-blur border border-slate-300 text-slate-900 rounded-lg font-semibold hover:bg-white/80 transition-all">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-slate-300 to-blue-500 opacity-20"></div>
            <div className="absolute inset-0 backdrop-blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-slate-500 mx-auto flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-slate-700 font-semibold">Fleet Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
