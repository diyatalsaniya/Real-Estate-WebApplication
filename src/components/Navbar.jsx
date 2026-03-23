import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { User } from 'lucide-react';
import MainLogo from '../assets/Logo.png';

/* ─────────────────────────────────────────────
   Navigation links — add / remove items here
───────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  { label: 'Property',  href: '/property' },
  { label: 'Developer', href: '/developer' },
  { label: 'Contact',   href: '/contact' },
  { label: 'Seller',    href: '/seller' },
];

const Navbar = () => {
  const location = useLocation();
  // Mobile hamburger menu open / close
  const [menuOpen, setMenuOpen] = useState(false);
  // Track scroll position to enhance navbar appearance
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the scrolled state after 10px scroll
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    if (href === '/property') return location.pathname.startsWith('/property') || location.pathname.startsWith('/properties');
    if (href === '/seller') return location.pathname.startsWith('/seller');
    return location.pathname === href;
  };

  return (
    <>
      {/* ══════════════════════════════════════════
          MAIN NAVBAR — floating pill shape
      ══════════════════════════════════════════ */}
      {/* ── Fixed wrapper so navbar always sits at top of viewport ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 pointer-events-none">
      <nav
        className={`
          w-[95%] max-w-7xl pointer-events-auto
          bg-white backdrop-blur-md
          rounded-full px-6 py-3
          flex items-center justify-between
          transition-all duration-300
          font-serif
          ${scrolled
            ? 'shadow-[0_8px_40px_rgba(0,0,0,0.18)] bg-white/100'
            : 'shadow-[0_4px_30px_rgba(0,0,0,0.12)] bg-white/100'}
        `}
      >

        {/* ── LEFT: Logo ── */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Link to="/">
            <img 
              src={MainLogo} 
              alt="NestNova Logo" 
              className="h-10 w-auto object-contain cursor-pointer" 
            />
          </Link>
        </div>

        {/* ── CENTER: Nav links (desktop) ── */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <li key={label}>
                <Link
                  to={href}
                  className={`
                    relative px-2 py-1 text-sm font-semibold tracking-wide transition-colors duration-300
                    ${active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}
                  `}
                >
                  {label}
                  {/* Underline animation for active item */}
                  <span
                    className={`
                      absolute left-1/2 -bottom-1 h-0.5 bg-blue-600 rounded-full
                      transform -translate-x-1/2 transition-all duration-300 ease-out
                      ${active ? 'w-[80%] scale-x-100 opacity-100' : 'w-0 scale-x-0 opacity-0'}
                    `}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── RIGHT: Auth buttons ── */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Profile Icon — links to /profile */}
          <Link
            to="/profile"
            className="hidden sm:flex items-center justify-center w-10 h-10
                       text-gray-600 hover:text-blue-600 hover:bg-gray-100
                       rounded-full transition-all duration-200"
            title="Profile"
          >
            <User size={20} />
          </Link>

          {/* Log in — plain text link */}
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center px-4 py-2
                       text-[0.9rem] font-medium text-gray-700 hover:text-gray-900
                       rounded-full hover:bg-gray-100 transition-all duration-200"
          >
            Log in
          </Link>

          {/* Sign up — solid dark slate pill link */}
          <Link
            to="/signup"
            className="inline-flex items-center px-5 py-2
                       text-[0.9rem] font-semibold text-white rounded-full
                       shadow-md hover:shadow-xl
                       transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0
                       bg-gradient-to-br from-[#0f172a] to-[#1e293b] hover:shadow-[0_8px_25px_rgba(15,23,42,0.35)]"
          >
            Sign up
          </Link>

          {/* Hamburger icon — mobile only */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block h-0.5 w-5 bg-gray-700 rounded transition-all duration-300
                  ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              />
              <span
                className={`block h-0.5 w-5 bg-gray-700 rounded transition-all duration-300
                  ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-5 bg-gray-700 rounded transition-all duration-300
                  ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              />
            </div>
          </button>
        </div>
      </nav>
      </div>{/* end fixed wrapper */}

      {/* ══════════════════════════════════════════
          MOBILE DROPDOWN MENU
      ══════════════════════════════════════════ */}
      {menuOpen && (
        <div
          className="relative z-10 mx-auto mt-2 w-[90%] max-w-sm
                     bg-white/100 backdrop-blur-md rounded-2xl shadow-xl
                     flex flex-col py-3 px-4 gap-1 md:hidden"
        >
          {/* Mobile nav links */}
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={label}
                to={href}
                onClick={() => setMenuOpen(false)}
                className={`
                  block w-full py-2 text-center text-lg font-semibold transition-colors duration-200
                  ${active ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}
                `}
              >
                {label}
              </Link>
            );
          })}

          <hr className="my-1 border-gray-200" />

          {/* Mobile Log in */}
          <Link to="/login" className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 text-left transition block w-full">
            Log in
          </Link>

          {/* Mobile Sign up */}
          <Link
            to="/signup"
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white text-center transition block w-full outline-none bg-gradient-to-br from-[#0f172a] to-[#1e293b]"
            onClick={() => setMenuOpen(false)}
          >
            Sign up
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
