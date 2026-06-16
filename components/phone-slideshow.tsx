'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Slide { src: string; label: string }

const TRIP_MODE_SLIDES: Slide[] = [
  { src: '/screen-fishlog.png',      label: 'Fish Log' },
  { src: '/screen-weather.png',      label: 'Weather' },
  { src: '/screen-photos.png',       label: 'Photos' },
  { src: '/screen-notes.png',        label: 'Notes' },
  { src: '/screen-tripcomplete.png', label: 'Trip Summary' },
]

const FINANCIAL_SLIDES: Slide[] = [
  { src: '/screen-fin-overview.png',   label: 'Overview' },
  { src: '/screen-fin-revenue.png',    label: 'Monthly Revenue' },
  { src: '/screen-fin-breakdown.png',  label: 'Collected vs Outstanding' },
  { src: '/screen-fin-clients.png',    label: 'Top Clients' },
]

const FISHING_SLIDES: Slide[] = [
  { src: '/screen-fish-overview.png',  label: 'Overview' },
  { src: '/screen-fish-timeday.png',   label: 'Fish by Time of Day' },
  { src: '/screen-fish-spots.png',     label: 'Top Fishing Spots' },
  { src: '/screen-fish-species.png',   label: 'Species Breakdown' },
  { src: '/screen-fish-moon.png',      label: 'Moon Phase & Pressure' },
]

const STATUS_BAR_CROP = 32

function Slideshow({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  function go(i: number) {
    if (i === current) return
    setFading(true)
    setTimeout(() => { setCurrent(i); setFading(false) }, 200)
  }

  function prev() { go((current - 1 + slides.length) % slides.length) }
  function next() { go((current + 1) % slides.length) }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative w-[260px] rounded-[2.5rem] border-[6px] border-slate-800 bg-black shadow-2xl overflow-hidden"
        style={{ aspectRatio: '9/19.5' }}
      >
        {/* Fake status bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-1.5" style={{ background: '#0f1f35' }}>
          <span className="text-white text-[9px] font-bold tracking-tight">6:41 AM</span>
          <div className="flex items-center gap-1">
            <svg width="13" height="9" viewBox="0 0 13 9" fill="white">
              <rect x="0" y="6" width="2" height="3" rx="0.4"/>
              <rect x="3" y="4" width="2" height="5" rx="0.4"/>
              <rect x="6" y="2" width="2" height="7" rx="0.4"/>
              <rect x="9" y="0" width="2" height="9" rx="0.4"/>
            </svg>
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
              <circle cx="5.5" cy="8" r="1" fill="white"/>
              <path d="M2 5.5C3.1 4.4 4.2 3.8 5.5 3.8s2.4.6 3.5 1.7" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
              <path d="M0 3C1.8 1.2 3.5 0.3 5.5 0.3S9.2 1.2 11 3" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
            </svg>
            <div className="flex items-center">
              <div className="w-[18px] h-[9px] rounded-[2px] border border-white/70 p-px flex">
                <div className="flex-1 bg-white rounded-[1px]" />
              </div>
              <div className="w-[2px] h-[5px] bg-white/50 rounded-r-sm ml-px" />
            </div>
          </div>
        </div>

        {/* Screenshot */}
        <div
          className="absolute inset-0 transition-opacity duration-200"
          style={{ opacity: fading ? 0 : 1, top: 22 }}
        >
          <div
            className="relative w-full overflow-hidden"
            style={{ height: `calc(100% + ${STATUS_BAR_CROP}px)`, marginTop: -STATUS_BAR_CROP }}
          >
            <Image
              src={slides[current].src}
              alt={slides[current].label}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Tap zones */}
        <button onClick={prev} className="absolute left-0 top-0 bottom-0 w-1/2 z-30 cursor-w-resize" aria-label="Previous" />
        <button onClick={next} className="absolute right-0 top-0 bottom-0 w-1/2 z-30 cursor-e-resize" aria-label="Next" />
      </div>

      {/* Dots + label */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={s.label}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-5 h-2 bg-sky-500' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'}`}
            />
          ))}
        </div>
        <p className="text-xs text-slate-400 font-medium">{slides[current].label}</p>
      </div>
    </div>
  )
}

export function PhoneSlideshow() {
  return <Slideshow slides={TRIP_MODE_SLIDES} />
}

export function FinancialSlideshow() {
  return <Slideshow slides={FINANCIAL_SLIDES} />
}

export function FishingSlideshow() {
  return <Slideshow slides={FISHING_SLIDES} />
}
