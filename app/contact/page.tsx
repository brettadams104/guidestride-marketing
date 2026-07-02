import Link from 'next/link'

export const metadata = {
  title: 'Contact Us — GuideStride',
  description: 'Get in touch with the GuideStride team. We\'re here to help.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        {/* Back link */}
        <Link href="/" className="text-sky-400 hover:text-sky-300 text-sm font-medium mb-8 inline-block transition-colors">
          ← Back to GuideStride
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-300">We're here to help. Reach out with any questions about GuideStride.</p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-lg mb-2">Email Support</h2>
            <p className="text-slate-300 mb-4">Have a question? Send us an email and we'll get back to you soon.</p>
            <a href="mailto:brett@guidestride.com" className="text-sky-400 hover:text-sky-300 font-medium transition-colors">
              brett@guidestride.com →
            </a>
          </div>

          {/* App Feedback */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-lg mb-2">Send Feedback</h2>
            <p className="text-slate-300 mb-4">Have a feature idea or found a bug? Let us know directly in the app.</p>
            <p className="text-slate-400 text-sm">Use the "Contact Us" section in GuideStride settings to submit feedback.</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-white font-bold text-lg mb-6">Quick Links</h2>
          <div className="space-y-3">
            <Link href="/" className="flex items-center text-slate-300 hover:text-white transition-colors">
              <span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>
              Back to Home
            </Link>
            <Link href="/#features" className="flex items-center text-slate-300 hover:text-white transition-colors">
              <span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>
              Features
            </Link>
            <a href="/privacy" className="flex items-center text-slate-300 hover:text-white transition-colors">
              <span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm">© 2026 Ethical Edge Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
