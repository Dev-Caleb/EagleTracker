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
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
