import Image from 'next/image'
import Link from 'next/link'

const APP_URL = 'https://app.guidestride.com'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function Screenshot({ label }: { label: string }) {
  return (
    <div className="w-full aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center border border-slate-200">
      <p className="text-slate-400 text-sm font-medium">{label}</p>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="GuideStride logo" width={36} height={36} className="rounded-lg" />
            <span className="font-bold text-lg text-slate-900">GuideStride</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href={`${APP_URL}/login`} className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors hidden sm:block">Sign In</Link>
            <Link href={APP_URL} className="bg-[#0ea5e9] hover:bg-sky-400 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">Get Started Free</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#0f1f35] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">Built for fishing guides</p>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-6">
            Run Your Guide Business<br /><span className="text-sky-400">Like a Pro</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            GuideStride gives independent fishing guides an easy, affordable way to manage clients, log trips, track payments, and grow their business — all from their phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={APP_URL} className="bg-[#0ea5e9] hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors w-full sm:w-auto text-center">Start Free Trial</Link>
            <Link href="#features" className="text-slate-400 hover:text-white font-medium transition-colors">See how it works →</Link>
          </div>
          <p className="text-slate-500 text-sm mt-4">No credit card required · $20/month after trial</p>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-slate-50 border-y border-slate-200 py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-slate-500 font-medium">
          <span>✦ Built for independent fishing guides</span>
          <span>✦ Works on iPhone, Android, and desktop</span>
          <span>✦ Just $20/month — no contracts</span>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6 bg-[#0f1f35] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Still running your guide business on spreadsheets and text messages?</h2>
          <p className="text-slate-400 text-lg mb-14 max-w-2xl mx-auto">Most fishing guides are leaving money on the table and spending hours on admin work that should take minutes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '💸', text: 'Chasing clients for payments after every trip' },
              { icon: '🤔', text: 'Scrambling to remember fish counts and trip details' },
              { icon: '📋', text: 'No way to show new clients your track record' },
            ].map(({ icon, text }) => (
              <div key={text} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-3xl mb-3">{icon}</p>
                <p className="text-slate-300 font-medium leading-snug">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-sky-400 font-bold text-xl mt-12">GuideStride fixes all of this.</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Everything a fishing guide needs. Nothing they don&apos;t.</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">GuideStride is designed to be simple enough that anyone can pick it up on the first day — no training required.</p>
          </div>
          <div className="space-y-24">

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-3">Trip Mode</p>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Log Everything on the Water</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">Start a trip, log fish species, size, weight, and lure — right from your phone while you&apos;re out there. No more trying to remember it all when you get back to the dock.</p>
                <ul className="space-y-2">
                  {['Log catches in real time', 'Track weather and conditions automatically', 'Add photos from the water', 'Notes tab for quick observations'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium"><CheckIcon />{item}</li>
                  ))}
                </ul>
              </div>
              <Screenshot label="Live Trip Mode — coming soon" />
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-3">Payments</p>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Get Paid Without the Awkward Follow-Up</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">Track what every client owes, collect payment at the end of the trip, and see your outstanding balances at a glance. Cash, card, Venmo, Zelle — however your clients pay.</p>
                <ul className="space-y-2">
                  {['Track deposits and remaining balances', 'Collect payment from the trip summary', 'See all outstanding balances in one view', 'Full financial analytics by month and year'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium"><CheckIcon />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1"><Screenshot label="Payment collection — coming soon" /></div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-3">Client Management</p>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Your Clients, All in One Place</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">Every client&apos;s contact info, trip history, and outstanding balance — organized and always with you. Build real relationships and know exactly who you&apos;ve fished with and when.</p>
                <ul className="space-y-2">
                  {['Client contact info and notes', 'Full trip history per client', 'Outstanding balance tracking', 'Quick call or email directly from the app'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium"><CheckIcon />{item}</li>
                  ))}
                </ul>
              </div>
              <Screenshot label="Client management — coming soon" />
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-3">Water Flows</p>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Know Your Water Before You Launch</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">Check live USGS river flow data for your favorite spots before every trip. Never show up to blown-out water again. Save your key gauges for quick access.</p>
                <ul className="space-y-2">
                  {['Real-time streamflow in CFS', '7-day trend charts', 'Save your favorite gauges', 'Search any river or stream in the US'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium"><CheckIcon />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1"><Screenshot label="Water flows — coming soon" /></div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-3">Analytics</p>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Analytics That Help Sell Your Business</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">See your average fish per trip, best day of the week, top fishing spots, and year-over-year revenue growth. Real numbers that prove your value to every new client who asks.</p>
                <ul className="space-y-2">
                  {['Fish caught by species, month, and time of day', 'Best day of the week and top locations', 'Revenue tracking and payment analytics', 'Year-over-year growth comparison'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium"><CheckIcon />{item}</li>
                  ))}
                </ul>
              </div>
              <Screenshot label="Analytics dashboard — coming soon" />
            </article>

          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-slate-50">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Simple Pricing. No Surprises.</h2>
          <p className="text-slate-500 text-lg mb-12">One plan. Everything included. Cancel anytime.</p>
          <div className="bg-white border-2 border-sky-500 rounded-3xl p-8 shadow-xl shadow-sky-100">
            <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-2">GuideStride Pro</p>
            <div className="flex items-end justify-center gap-1 mb-2">
              <span className="text-6xl font-black text-slate-900">$20</span>
              <span className="text-slate-400 text-lg mb-2">/month</span>
            </div>
            <p className="text-slate-400 text-sm mb-8">per guide · billed monthly · cancel anytime</p>
            <ul className="space-y-3 text-left mb-8">
              {['Unlimited clients', 'Unlimited trips', 'Live Trip Mode', 'Real-time water flow data', 'Financial analytics', 'Fish catch analytics', 'Works on iPhone, Android, and desktop', 'No contracts or setup fees'].map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><CheckIcon />{item}</li>
              ))}
            </ul>
            <Link href={APP_URL} className="block w-full bg-[#0ea5e9] hover:bg-sky-400 text-white font-bold py-4 rounded-2xl text-lg transition-colors text-center">Start Free Trial</Link>
            <p className="text-slate-400 text-sm mt-3">No credit card required</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#0f1f35] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">Ready to run a real guide business?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">Join fishing guides using GuideStride to book more trips, get paid faster, and prove their worth to every new client.</p>
          <Link href={APP_URL} className="inline-block bg-[#0ea5e9] hover:bg-sky-400 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-colors">Get Started Free</Link>
          <p className="text-slate-500 text-sm mt-4">No credit card required · $20/month after trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="GuideStride" width={28} height={28} className="rounded-md" />
            <span className="text-white font-bold">GuideStride</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} GuideStride. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href={`${APP_URL}/login`} className="hover:text-white transition-colors">Sign In</Link>
            <Link href="mailto:hello@guidestride.com" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>

    </main>
  )
}
