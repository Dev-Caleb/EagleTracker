export default function Problems() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-12">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">We Solve Real Problems</h2>
          <p className="text-lg text-blue-100">Targeted features designed for fast savings and safer assets.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'Vehicle Theft Risk',
              description: 'Real-time alerts and recovery workflows to speed response.',
            },
            {
              title: 'Poor Route Visibility',
              description: '90-day route history and replay to audit driver behaviour.',
            },
            {
              title: 'Delayed Recovery',
              description: 'Automated immobilization commands and live alerting to recovery teams.',
            },
          ].map((problem, idx) => (
            <div key={idx} className="p-8 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-400/40 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {['GPS', 'GSM', 'IoT', 'Cloud Backup', 'AES Encryption'].map((tag, idx) => (
              <span key={idx} className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-blue-100 text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-xl bg-gradient-to-r from-blue-500/20 to-slate-500/20 border border-blue-400/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-white font-semibold">Founder's Phase — Get Priority Support & Lower Pricing for Life</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all whitespace-nowrap">
            Join Early Access
          </button>
        </div>
      </div>
    </section>
  );
}
