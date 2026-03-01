import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  // ── Center navigation links only (NO login/signup here) ──
  const navLinks = [
    { name: "Home",     path: "/"         },
    { name: "Property", path: "/property" },
    { name: "Contact",  path: "/contact"  },
    { name: "About",    path: "/about"    },
    { name: "Profile",  path: "/profile"  },
  ];

  return (
    // ── Outer wrapper: fixed at top, full width, centered ──
    <nav style={{
      position: "fixed",
      top: "20px",
      left: 0,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      paddingLeft: "16px",
      paddingRight: "16px",
      zIndex: 1000,
      boxSizing: "border-box",
    }}>

      {/* ── Pill container ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1100px",
        backgroundColor: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(12px)",
        borderRadius: "999px",
        padding: "10px 28px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      }}>

        {/* ── LEFT: Logo ── */}
        <div style={{ flexShrink: 0 }}>
          <img
            src="/HomePageImage/main.png"
            alt="NestNova"
            style={{ height: "40px", width: "auto", objectFit: "contain" }}
          />
        </div>

        {/* ── CENTER: Nav Links ── */}
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: 600,
                color: "#111827",
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.color = "#2563eb"}
              onMouseLeave={(e) => e.target.style.color = "#111827"}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ── RIGHT: Login + Sign Up ── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          paddingLeft: "20px",
          borderLeft: "1px solid #e5e7eb",
        }}>

          {/* Login button */}
          <Link
            to="/logIn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: 600,
              color: "#374151",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => e.target.style.color = "#2563eb"}
            onMouseLeave={(e) => e.target.style.color = "#374151"}
          >
            {/* Login arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
            Login
          </Link>

          {/* Sign Up button */}
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: 600,
              backgroundColor: "#2563eb",
              color: "#fff",
              padding: "8px 20px",
              borderRadius: "999px",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#1d4ed8"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#2563eb"}
          >
            Sign Up
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;