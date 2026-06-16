'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const SLIDES = [
  { src: '/screen-fishlog.png',  label: 'Fish Log' },
  { src: '/screen-weather.png',  label: 'Weather' },
  { src: '/screen-photos.png',   label: 'Photos' },
  { src: '/screen-notes.png',    label: 'Notes' },
]

export function PhoneSlideshow() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % SLIDES.length)
        setFading(false)
      }, 300)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Phone frame */}
      <div className="relative w-[260px] rounded-[2.5rem] border-4 border-slate-700 bg-black shadow-2xl overflow-hidden" style={{ aspectRatio: '9/19.5' }}>

        {/* Fake status bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 pt-2 pb-1" style={{ background: 'rgba(15,31,53,0.95)' }}>
          <span className="text-white text-[10px] font-semibold">6:41 AM</span>
          <div className="flex items-center gap-1">
            {/* Signal */}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
              <rect x="0" y="7" width="2" height="3" rx="0.5"/>
              <rect x="3" y="5" width="2" height="5" rx="0.5"/>
              <rect x="6" y="3" width="2" height="7" rx="0.5"/>
              <rect x="9" y="1" width="2" height="9" rx="0.5"/>
            </svg>
            {/* WiFi */}
            <svg width="12" height="10" viewBox="0 0 12 10" fill="white">
              <path d="M6 8.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              <path d="M2.5 6C3.8 4.8 4.9 4 6 4s2.2.8 3.5 2" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              <path d="M0 3.5C2 1.5 4 0.5 6 0.5s4 1 6 3" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            </svg>
            {/* Battery 100% */}
            <div className="flex items-center gap-0.5">
              <div className="relative w-5 h-2.5 rounded-[2px] border border-white/80 flex items-center px-px">
                <div className="h-full w-full bg-white rounded-[1px]" />
              </div>
              <div className="w-0.5 h-1.5 bg-white/60 rounded-r-sm" />
            </div>
          </div>
        </div>

        {/* Screenshot — crop status bar by shifting up */}
        <div
          className="absolute inset-0 top-[22px] transition-opacity duration-300"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={SLIDES[current].src}
              alt={SLIDES[current].label}
              fill
              className="object-cover object-top"
              style={{ marginTop: '-44px' }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false) }, 300) }}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-5 h-2 bg-sky-500' : 'w-2 h-2 bg-slate-300'}`}
          />
        ))}
      </div>
    </div>
  )
}
