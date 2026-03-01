import { useState, useEffect } from "react";
import signUp from "../Pages/signUp.jpg";
import { Link } from "react-router-dom";

// ── Google Icon ──
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.1-6.1C34.46 3.19 29.5 1 24 1 14.82 1 7.07 6.48 3.6 14.27l7.1 5.52C12.43 13.78 17.73 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.52 24.5c0-1.63-.15-3.2-.42-4.72H24v8.94h12.67c-.55 2.93-2.2 5.41-4.68 7.08l7.18 5.58C43.48 37.67 46.52 31.57 46.52 24.5z"/>
    <path fill="#FBBC05" d="M10.7 28.79A14.58 14.58 0 0 1 9.5 24c0-1.66.28-3.27.78-4.79L3.18 13.7A23.93 23.93 0 0 0 .5 24c0 3.77.9 7.34 2.5 10.48l7.7-5.69z"/>
    <path fill="#34A853" d="M24 47c5.5 0 10.12-1.82 13.5-4.94l-7.18-5.58c-1.99 1.34-4.54 2.12-6.32 2.12-6.27 0-11.57-4.28-13.3-10.03l-7.7 5.69C7.07 41.52 14.82 47 24 47z"/>
  </svg>
);

// ── Eye Icon ──
const EyeIcon = ({ open }) => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </>
    )}
  </svg>
);

// ── Main Component ──
export default function SignIn() {

  // State
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  // Hide page scrollbar on this page only
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  // Handle form submit
  const handleSubmit = () => {
    if (!form.email || !form.password) return alert("Please fill in all fields.");
    alert("Signed in successfully!");
  };

  // Reusable input style
  const inputStyle = {
    width: "100%",
    padding: "10px 13px",
    border: "1.5px solid #e5e7eb",
    borderRadius: "10px",
    fontSize: "0.86rem",
    color: "#111827",
    backgroundColor: "#fafafa",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#e8edf5",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      padding: "24px",
    }}>

      {/* ── Main Card ── */}
      <div style={{
        display: "flex",
        width: "100%",
        maxWidth: "880px",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
        alignItems: "stretch",      // ← KEY FIX: both sides same height
      }}>

        {/* ── LEFT: Image Panel ── */}
        <div style={{
          position: "relative",
          width: "50%",
          flexShrink: 0,
          minHeight: "520px",       // ← ensures minimum height
        }}>

          {/* Image fills entire left panel absolutely */}
          <img
            src={signUp}
            alt="Home"
            style={{
              position: "absolute",  // ← KEY FIX: absolute so it fills fully
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Dark Overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(160deg, rgba(10,20,50,0.42) 0%, rgba(10,20,50,0.72) 100%)",
          }} />

          {/* Text Content — no logo */}
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "2.2rem 2.5rem",
            color: "#fff",
          }}>

            {/* Hero Text */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#60a5fa",
                textTransform: "uppercase",
                margin: "0 0 0.75rem 0",
              }}>
                Welcome Back
              </p>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1.15, margin: "0 0 0.9rem 0" }}>
                Your dream home<br />is waiting for you
              </h2>
              <p style={{
                fontSize: "0.84rem",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: "240px",
              }}>
                Sign in to access your saved listings, connect with agents, and continue your journey.
              </p>
            </div>

            {/* Stats Row */}
            <div style={{
              display: "flex",
              gap: "1.8rem",
              paddingTop: "1.2rem",
              borderTop: "1px solid rgba(255,255,255,0.15)",
            }}>
              {[
                ["50K+", "Happy Families"],
                ["12K+", "Properties Listed"],
                ["98%",  "Satisfaction Rate"],
              ].map(([val, lbl]) => (
                <div key={lbl} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "1.25rem", fontWeight: 800 }}>{val}</span>
                  <span style={{
                    fontSize: "0.6rem",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                  }}>
                    {lbl}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── RIGHT: Form Panel ── */}
        <div style={{
          width: "50%",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 2.5rem",
          boxSizing: "border-box",
        }}>
          <div style={{ width: "100%" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "1.4rem" }}>
              <h1 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#111827", margin: "0 0 4px 0" }}>
                Welcome back
              </h1>
              <p style={{ fontSize: "0.82rem", color: "#6b7280", margin: 0 }}>
                Sign in to your NestNova account
              </p>
            </div>

            {/* Form Fields */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "#374151" }}>Email Address</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  style={inputStyle}
                />
              </div>

              {/* Password */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <label style={{ fontSize: "0.78rem", fontWeight: 600, color: "#374151" }}>Password</label>
                  <a href="#" style={{ fontSize: "0.76rem", color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>
                    Forgot password?
                  </a>
                </div>
                <div style={{ position: "relative" }}>
                  <input
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    type={showPass ? "text" : "password"}
                    placeholder="Enter your password"
                    style={{ ...inputStyle, paddingRight: "42px" }}
                  />
                  <button
                    onClick={() => setShowPass(!showPass)}
                    style={{
                      position: "absolute", right: "12px", top: "50%",
                      transform: "translateY(-50%)", background: "none",
                      border: "none", cursor: "pointer", color: "#9ca3af",
                      display: "flex", alignItems: "center", padding: 0,
                    }}
                  >
                    <EyeIcon open={showPass} />
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  style={{ accentColor: "#2563eb", cursor: "pointer" }}
                />
                <label htmlFor="remember" style={{ fontSize: "0.8rem", color: "#6b7280", cursor: "pointer" }}>
                  Keep me signed in
                </label>
              </div>

              {/* Login Button */}
              <button
                onClick={handleSubmit}
                style={{
                  width: "100%",
                  padding: "11px",
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "0.93rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.30)",
                  marginTop: "2px",
                }}
              >
                LogIn →
              </button>

              {/* OR Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "0.4rem 0" }}>
                <span style={{ flex: 1, height: "1px", backgroundColor: "#e5e7eb" }} />
                <span style={{ fontSize: "0.74rem", color: "#9ca3af" }}>or</span>
                <span style={{ flex: 1, height: "1px", backgroundColor: "#e5e7eb" }} />
              </div>

              {/* Continue with Google */}
              <button
                onClick={() => alert("Google sign-in coming soon!")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "10px 16px",
                  border: "1.5px solid #e5e7eb",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  fontSize: "0.86rem",
                  fontWeight: 600,
                  color: "#374151",
                  fontFamily: "inherit",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                <GoogleIcon /> Continue with Google
              </button>

              {/* Link to Sign Up */}
              <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#6b7280", margin: 0 }}>
                Don't have an account?{" "}
                <Link to="/signup" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>
                  Create one
                </Link>
              </p>

            </div>

            {/* Trust Badges */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              marginTop: "1.1rem",
              paddingTop: "1rem",
              borderTop: "1px solid #f0f0f0",
            }}>
              {["Secure login", "256-bit SSL", "Privacy protected"].map((txt, i) => (
                <span key={txt} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "0.7rem", color: "#9ca3af" }}>{txt}</span>
                  {i < 2 && (
                    <span style={{
                      width: "3px", height: "3px", borderRadius: "50%",
                      backgroundColor: "#d1d5db", display: "inline-block",
                    }} />
                  )}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
