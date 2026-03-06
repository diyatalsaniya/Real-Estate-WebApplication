import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (!email || !email.includes('@')) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 3000)
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="w-full">

      {/* Newsletter Section */}
      <div className="bg-blue-400 py-20 px-6 flex flex-col items-center text-center">

        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-[#d4b86a] flex items-center justify-center mb-6">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13" stroke="#1a4a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#1a4a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-white text-3xl font-bold tracking-tight mb-3">
          Stay Up to Date
        </h2>
        <p className="text-white/60 text-sm mb-8">
          Subscribe to our newsletter to receive our weekly feed.
        </p>

        {/* Email Input */}
        <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-5 py-1 w-full max-w-sm backdrop-blur-sm">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Your e-mail"
            className="flex-1 bg-transparent text-white placeholder-white/40 text-sm outline-none py-2"/>
          <button onClick={handleSend} className="flex items-center gap-1.5 text-white text-sm font-semibold hover:text-[#d4b86a] transition-colors duration-200 ml-2 whitespace-nowrap">
            {sent ? 'Sent ✓' : (
              <>
                Send
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2a2a2a] py-5 px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-white/40 text-sm">
            Copyright © {new Date().getFullYear()}. NestNova
          </p>

          {/* Logo + Name */}
          <div className="flex items-center">
            <img src="/main.png" alt="NestNova" className="h-10 w-auto brightness-0 invert"/>
          </div>

          {/* Social Icons + Scroll Top */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Scroll to top */}
            <button onClick={scrollToTop} className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#d4b86a] flex items-center justify-center transition-colors duration-200 ml-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 12V4M4 8L8 4L12 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer