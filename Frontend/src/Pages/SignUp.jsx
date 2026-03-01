import { useState } from "react";
import signUp from "../mainpages/signUp.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.1-6.1C34.46 3.19 29.5 1 24 1 14.82 1 7.07 6.48 3.6 14.27l7.1 5.52C12.43 13.78 17.73 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.52 24.5c0-1.63-.15-3.2-.42-4.72H24v8.94h12.67c-.55 2.93-2.2 5.41-4.68 7.08l7.18 5.58C43.48 37.67 46.52 31.57 46.52 24.5z"/>
    <path fill="#FBBC05" d="M10.7 28.79A14.58 14.58 0 0 1 9.5 24c0-1.66.28-3.27.78-4.79L3.18 13.7A23.93 23.93 0 0 0 .5 24c0 3.77.9 7.34 2.5 10.48l7.7-5.69z"/>
    <path fill="#34A853" d="M24 47c5.5 0 10.12-1.82 13.5-4.94l-7.18-5.58c-1.99 1.34-4.54 2.12-6.32 2.12-6.27 0-11.57-4.28-13.3-10.03l-7.7 5.69C7.07 41.52 14.82 47 24 47z"/>
  </svg>
);

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

export default function SignUp() {
  const [role, setRole] = useState("Buyer");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", terms: false });

  // Inside your component, before the return:
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = () => {
    if (!form.terms) return alert("Please agree to the Terms of Service.");
    if (form.password !== form.confirm) return alert("Passwords do not match.");
    alert("Account created!");
  };

  const inputStyle = {
    width: "100%",
    padding: "9px 13px",
    border: "1.5px solid #e5e7eb",
    borderRadius: "10px",
    fontSize: "0.85rem",
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
      {/* Card: fixed height, perfect 50/50 */}
      <div style={{
        display: "flex",
        width: "100%",
        maxWidth: "920px",
        height: "600px",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
      }}>

        {/* ── LEFT: Image ── */}
        <div style={{ position: "relative", width: "50%", height: "100%", flexShrink: 0 }}>
          <img src={signUp} alt="Home" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />

          {/* Overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(160deg, rgba(10,20,50,0.42) 0%, rgba(10,20,50,0.72) 100%)",
          }} />

          {/* Text — NO logo */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            justifyContent: "space-between",
            padding: "2.2rem 2.5rem",
            color: "#fff",
          }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", color: "#60a5fa", textTransform: "uppercase", margin: "0 0 0.75rem 0" }}>
                Trusted Real Estate Platform
              </p>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1.15, margin: "0 0 0.9rem 0" }}>
                Find the home<br />you'll love forever
              </h2>
              <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.65, margin: 0, maxWidth: "240px" }}>
                Browse thousands of curated listings and connect with top agents in your area.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "1.8rem", paddingTop: "1.2rem", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              {[["50K+", "Happy Families"], ["12K+", "Properties Listed"], ["98%", "Satisfaction Rate"]].map(([val, lbl]) => (
                <div key={lbl} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "1.25rem", fontWeight: 800 }}>{val}</span>
                  <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.07em" }}>{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div style={{
          width: "50%",
          height: "100%",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.8rem 2.5rem",
          boxSizing: "border-box",
          overflowY: "auto",
        }}>
          <div style={{ width: "100%" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "1.1rem" }}>
              <h1 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#111827", margin: "0 0 4px 0" }}>Create your account</h1>
              </div>

            {/* Fields */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>

              {/* Full Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <label style={{ fontSize: "0.77rem", fontWeight: 600, color: "#374151" }}>Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" style={inputStyle} />
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <label style={{ fontSize: "0.77rem", fontWeight: 600, color: "#374151" }}>Email Address</label>
                <input name="email" value={form.email} onChange={handleChange} placeholder="name@example.com" style={inputStyle} />
              </div>

              {/* Role */}
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <label style={{ fontSize: "0.77rem", fontWeight: 600, color: "#374151" }}>I am a</label>
                <div style={{ display: "flex", gap: "8px" }}>
                  {["Buyer", "Seller"].map((r) => (
                    <button
                      key={r}
                      onClick={() => setRole(r)}
                      style={{
                        flex: 1, padding: "8px", fontFamily: "inherit", cursor: "pointer",
                        fontSize: "0.85rem", fontWeight: role === r ? 600 : 500,
                        border: `1.5px solid ${role === r ? "#3b82f6" : "#e5e7eb"}`,
                        borderRadius: "10px",
                        backgroundColor: role === r ? "#eff6ff" : "#fafafa",
                        color: role === r ? "#2563eb" : "#6b7280",
                        transition: "all 0.2s",
                      }}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Password */}
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <label style={{ fontSize: "0.77rem", fontWeight: 600, color: "#374151" }}>Password</label>
                <div style={{ position: "relative" }}>
                  <input name="password" value={form.password} onChange={handleChange} type={showPass ? "text" : "password"} placeholder="Create a strong password" style={{ ...inputStyle, paddingRight: "42px" }} />
                  <button onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9ca3af", display: "flex", alignItems: "center", padding: 0 }}>
                    <EyeIcon open={showPass} />
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <label style={{ fontSize: "0.77rem", fontWeight: 600, color: "#374151" }}>Confirm Password</label>
                <div style={{ position: "relative" }}>
                  <input name="confirm" value={form.confirm} onChange={handleChange} type={showConfirm ? "text" : "password"} placeholder="Re-enter your password" style={{ ...inputStyle, paddingRight: "42px" }} />
                  <button onClick={() => setShowConfirm(!showConfirm)} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9ca3af", display: "flex", alignItems: "center", padding: 0 }}>
                    <EyeIcon open={showConfirm} />
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <input type="checkbox" name="terms" id="terms" checked={form.terms} onChange={handleChange} style={{ marginTop: "2px", accentColor: "#2563eb", cursor: "pointer" }} />
                <label htmlFor="terms" style={{ fontSize: "0.78rem", color: "#6b7280", lineHeight: 1.5, cursor: "pointer" }}>
                  I agree to the{" "}
                  <a href="#" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Privacy Policy</a>
                </label>
              </div>

                 {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "0.9rem 0" }}>
              <span style={{ flex: 1, height: "1px", backgroundColor: "#e5e7eb" }} />
              <span style={{ fontSize: "0.74rem", color: "#9ca3af" }}>or</span>
              <span style={{ flex: 1, height: "1px", backgroundColor: "#e5e7eb" }} />
            </div>

               {/* Google Button */}
            <button
              onClick={() => alert("Google sign-up coming soon!")}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
                gap: "10px", padding: "9px 16px", border: "1.5px solid #e5e7eb", borderRadius: "10px",
                backgroundColor: "#fff", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600,
                color: "#374151", fontFamily: "inherit", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <GoogleIcon /> Continue with Google
            </button>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                style={{
                  width: "100%", padding: "10px", backgroundColor: "#2563eb", color: "#fff",
                  border: "none", borderRadius: "12px", fontSize: "0.92rem", fontWeight: 700,
                  cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 14px rgba(37,99,235,0.30)", marginTop: "2px",
                }}
              >
                Create Account →
              </button>

              {/* Sign In link */}
              <p style={{ textAlign: "center", fontSize: "0.79rem", color: "#6b7280", margin: 0 }}>
                Already have an account?{" "}
              <Link to="/login" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>Sign In</Link>
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
