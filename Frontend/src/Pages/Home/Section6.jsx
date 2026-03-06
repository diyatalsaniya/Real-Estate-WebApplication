import React, { useState } from 'react'

const reviews = [
  {
    id: 1,
    name: "Cameron Williamson",
    role: "Designer",
    image: "/Reviews/Image1.jpeg",
    text: "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
  {
    id: 2,
    name: "James Thornton",
    role: "Property Investor",
    image: "/Reviews/Image2.jpeg",
    text: "The dashboard made managing my portfolio incredibly simple. Real-time updates and the analytics section gave me insights I never had before. Absolutely worth every penny.",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Home Buyer",
    image: "/Reviews/Image3.jpeg",
    text: "Found my dream apartment in just two weeks. The filters are incredibly precise and the virtual tour feature saved so much time. Couldn't be happier with the experience.",
  },
  {
    id: 4,
    name: "Marcus Liu",
    role: "Real Estate Agent",
    image: "/Reviews/Image4.jpeg",
    text: "As an agent, this platform has tripled my lead quality. The seller dashboard is clean, inquiry management is seamless, and clients love the professional look of the listings.",
  },
]

const Section6 = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = (idx) => {
    if (animating || idx === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 280)
  }

  const r = reviews[current]

  return (
    <div className="bg-gray-100 flex items-center justify-center p-8">
      <div className=" rounded-3xl px-14 py-12 max-w-4xl w-full shadow-sm">
        <div className="flex items-center gap-14">

          {/* Left: Image */}
          <div className="shrink-0">
            <div className="w-52 h-72 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={r.image}
                alt={r.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <div className={`transition-all duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>

              {/* Author chip */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-yellow-300 flex items-center justify-center shrink-0">
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                    <path d="M0 18V11.1C0 9.3 0.4 7.7 1.2 6.3C2 4.9 3.2 3.6 4.8 2.4L6.6 4C5.4 4.9 4.5 5.8 3.9 6.7C3.3 7.6 3 8.6 3 9.6H6V18H0ZM12 18V11.1C12 9.3 12.4 7.7 13.2 6.3C14 4.9 15.2 3.6 16.8 2.4L18.6 4C17.4 4.9 16.5 5.8 15.9 6.7C15.3 7.6 15 8.6 15 9.6H18V18H12Z" fill="#78350f" opacity="0.6" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-base text-gray-900 tracking-tight">{r.name}</p>
                  <p className="text-sm text-stone-400 mt-0.5">{r.role}</p>
                </div>
              </div>

              {/* Review text */}
              <p className="text-sm leading-7 text-stone-600 mb-8">
                {r.text}
              </p>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => goTo((current - 1 + reviews.length) % reviews.length)}
                  className="w-10 h-10 rounded-xl border border-stone-200 bg-white hover:bg-orange-50 transition-colors duration-150 flex items-center justify-center cursor-pointer"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 3L5 8L10 13" stroke="#44302a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <span className="text-xs text-stone-400 font-medium w-10 text-center">
                  {current + 1} / {reviews.length}
                </span>

                <button
                  onClick={() => goTo((current + 1) % reviews.length)}
                  className="w-10 h-10 rounded-xl border border-stone-200 bg-white hover:bg-orange-50 transition-colors duration-150 flex items-center justify-center cursor-pointer"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="#44302a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section6