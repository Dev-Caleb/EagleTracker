import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-slate-200/30">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 via-slate-600 to-blue-700 rounded-2xl p-12">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Protect Your Fleet?</h2>
            <p className="text-lg text-blue-100">Book a demo and we'll show you how to cut losses and improve efficiency.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all">
              Request Demo
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur border border-white/30 text-white rounded-lg font-semibold hover:bg-white/30 transition-all flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
