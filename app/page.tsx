import Image from 'next/image'
import Link from 'next/link'
import { PhoneSlideshow, FinancialSlideshow, FishingSlideshow, ClientSlideshow, PaymentSlideshow, FlowsSlideshow } from '@/components/phone-slideshow'

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
    <div className="w-full aspect-[9/16] max-w-[260px] mx-auto bg-[#0f1f35] rounded-[2.5rem] border-4 border-slate-700 shadow-2xl flex flex-col items-center justify-center gap-3 p-6">
      <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>
      </div>
      <p className="text-slate-400 text-xs font-medium text-center leading-snug">{label}</p>
      <div className="w-full space-y-2 mt-2">
        <div className="h-2 bg-white/10 rounded-full w-3/4 mx-auto" />
        <div className="h-2 bg-white/10 rounded-full w-1/2 mx-auto" />
        <div className="h-2 bg-white/10 rounded-full w-2/3 mx-auto" />
      </div>
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
            <Link href={APP_URL} className="bg-[#0ea5e9] hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors w-full sm:w-auto text-center">Get Early Access — Free During Beta</Link>
            <Link href="#features" className="text-slate-400 hover:text-white font-medium transition-colors">See how it works →</Link>
          </div>
          <p className="text-slate-500 text-sm mt-4">Free during beta · $20/month when billing launches</p>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-slate-50 border-y border-slate-200 py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-slate-500 font-medium">
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Built for independent fishing guides
          </span>
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>
            Works on iPhone, Android, and desktop
          </span>
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            Just $20/month — no contracts
          </span>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6 bg-[#0f1f35] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Still running your guide business on spreadsheets and text messages?</h2>
          <p className="text-slate-400 text-lg mb-14 max-w-2xl mx-auto">Most fishing guides are leaving money on the table and spending hours on admin work that should take minutes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <svg className="mb-4" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              <p className="text-slate-300 font-medium leading-snug">Chasing clients for payments after every trip</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <svg className="mb-4" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              <p className="text-slate-300 font-medium leading-snug">Scrambling to remember fish counts and trip details</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <svg className="mb-4" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              <p className="text-slate-300 font-medium leading-snug">No way to show new clients your track record</p>
            </div>
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
              <div className="flex justify-center">
                <PhoneSlideshow />
              </div>
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
              <div className="lg:order-1 flex justify-center">
                <PaymentSlideshow />
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-3">Schedule Management</p>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Ditch the Paper Calendar for Good</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">If you&apos;re still writing trips on a wall calendar or in a notebook, GuideStride replaces all of it — and never loses a booking, double-books a day, or leaves you guessing what&apos;s coming up this week.</p>
                <ul className="space-y-2">
                  {[
                    'See your full month at a glance on the dashboard',
                    'Schedule trips in seconds — date, client, location, package',
                    'Reschedule or cancel with one tap',
                    'Upcoming trips always front and center',
                    'Never double-book or forget a client again',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium"><CheckIcon />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1 flex justify-center">
                <Screenshot label="Schedule & Dashboard" />
              </div>
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
              <div className="flex justify-center">
                <ClientSlideshow />
              </div>
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
              <div className="lg:order-1 flex justify-center">
                <FlowsSlideshow />
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-3">Fishing Analytics</p>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Data That Proves Your Worth to Every New Client</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">GuideStride tracks every catch, location, and condition automatically. When a new client asks how you do — you have the numbers to back it up.</p>
                <ul className="space-y-2">
                  {['Fish caught by species, month, and time of day', 'Average fish per trip over time', 'Best days of the week and top locations', 'Catch trends to spot your most productive patterns'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium"><CheckIcon />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <FishingSlideshow />
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-3">Financial Analytics</p>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Know Exactly Where Your Business Stands</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">See your revenue, collection rate, outstanding balances, and year-over-year growth — broken down by month. Run your guide business like the real business it is.</p>
                <ul className="space-y-2">
                  {['Total revenue and collection rate', 'Outstanding balances across all clients', 'Best month and year-over-year growth', 'Tips tracked separately from trip revenue'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium"><CheckIcon />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1 flex justify-center">
                <FinancialSlideshow />
              </div>
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
            <p className="text-slate-400 text-sm mb-8">Free during beta · $20/month when billing launches</p>
            <ul className="space-y-3 text-left mb-8">
              {['Unlimited clients', 'Unlimited trips', 'Live Trip Mode', 'Real-time water flow data', 'Financial analytics', 'Fish catch analytics', 'Works on iPhone, Android, and desktop', 'No contracts or setup fees'].map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><CheckIcon />{item}</li>
              ))}
            </ul>
            <Link href={APP_URL} className="block w-full bg-[#0ea5e9] hover:bg-sky-400 text-white font-bold py-4 rounded-2xl text-lg transition-colors text-center">Get Early Access — Free During Beta</Link>
            <p className="text-slate-400 text-sm mt-3">Free during beta · no credit card required</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#0f1f35] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">Ready to run a real guide business?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">Join fishing guides using GuideStride to book more trips, get paid faster, and prove their worth to every new client.</p>
          <Link href={APP_URL} className="inline-block bg-[#0ea5e9] hover:bg-sky-400 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-colors">Get Started Free</Link>
          <p className="text-slate-500 text-sm mt-4">Free during beta · $20/month when billing launches</p>
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
            <Link href="mailto:contact@guidestride.com" className="hover:text-white transition-colors">Contact</Link>
            <Link href={`${APP_URL}/privacy`} className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </main>
  )
}
