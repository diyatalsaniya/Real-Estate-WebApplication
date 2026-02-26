import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Premium Color Palette - No Gradients
const COLORS = {
  primary: "#1a1a2e",
  secondary: "#16213e",
  accent: "#c9a227",
  accentHover: "#b8941f",
  success: "#059669",
  danger: "#dc2626",
  warning: "#d97706",
  info: "#2563eb",
  background: "#fafaf9",
  surface: "#ffffff",
  text: {
    primary: "#1c1917",
    secondary: "#57534e",
    muted: "#a8a29e",
  },
  border: "#e7e5e4",
  sidebar: "#0f172a",
};

const PROPERTY_TYPES = ["Apartment", "Villa", "Plot", "Commercial", "Penthouse", "Studio"];
const AMENITIES_LIST = ["Pool", "Gym", "Parking", "Garden", "Balcony", "Sea View", "Lift", "Security", "24x7 Security", "Power Backup", "Clubhouse"];

// Icons
const Icons = {
  ArrowLeft: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
  ),
  Home: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Check: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Upload: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
  ),
};

export default function AddProperty() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "Apartment",
    amenities: [],
    images: [],
    bedrooms: "",
    bathrooms: "",
    area: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }));
  };

  const toggleAmenity = (a) => {
    setForm(f => ({
      ...f,
      amenities: f.amenities.includes(a) ? f.amenities.filter(x => x !== a) : [...f.amenities, a]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Navigate back to seller dashboard
    navigate("/seller");
  };

  const handleCancel = () => {
    navigate("/seller");
  };

  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        * { scrollbar-width: thin; scrollbar-color: ${COLORS.border} transparent; }
        *::-webkit-scrollbar { width: 6px; height: 6px; }
        *::-webkit-scrollbar-track { background: transparent; }
        *::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 3px; }
      `}</style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <button style={styles.backBtn} onClick={handleCancel}>
            <Icons.ArrowLeft /> Back to Dashboard
          </button>
          <h1 style={styles.pageTitle}>Add New Property</h1>
          <p style={styles.pageSubtitle}>Fill in the details below to list your property</p>
        </div>
      </header>

      {/* Main Form */}
      <main style={styles.main}>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Basic Information */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Basic Information</h2>
            <div style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Property Title *</label>
                <input 
                  style={styles.input} 
                  placeholder="e.g. Modern 3BHK Apartment in Andheri"
                  value={form.title}
                  onChange={(e) => handleFormChange("title", e.target.value)}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Property Type *</label>
                <select 
                  style={styles.select}
                  value={form.type}
                  onChange={(e) => handleFormChange("type", e.target.value)}
                >
                  {PROPERTY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Location *</label>
                <input 
                  style={styles.input} 
                  placeholder="e.g. Andheri West, Mumbai"
                  value={form.location}
                  onChange={(e) => handleFormChange("location", e.target.value)}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Price (₹) *</label>
                <input 
                  style={styles.input} 
                  type="number"
                  placeholder="e.g. 5000000"
                  value={form.price}
                  onChange={(e) => handleFormChange("price", e.target.value)}
                  required
                />
              </div>
            </div>
          </section>

          {/* Property Details */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Property Details</h2>
            <div style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Bedrooms</label>
                <input 
                  style={styles.input} 
                  type="number"
                  placeholder="e.g. 3"
                  value={form.bedrooms}
                  onChange={(e) => handleFormChange("bedrooms", e.target.value)}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Bathrooms</label>
                <input 
                  style={styles.input} 
                  type="number"
                  placeholder="e.g. 2"
                  value={form.bathrooms}
                  onChange={(e) => handleFormChange("bathrooms", e.target.value)}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Area (sq ft)</label>
                <input 
                  style={styles.input} 
                  type="number"
                  placeholder="e.g. 1200"
                  value={form.area}
                  onChange={(e) => handleFormChange("area", e.target.value)}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Description</label>
              <textarea 
                style={styles.textarea}
                placeholder="Describe your property in detail..."
                value={form.description}
                onChange={(e) => handleFormChange("description", e.target.value)}
                rows={5}
              />
            </div>
          </section>

          {/* Amenities - Menu Bar Style */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Amenities</h2>
            <div style={styles.amenitiesMenuBar}>
              {AMENITIES_LIST.map((amenity, index) => (
                <button
                  key={amenity}
                  type="button"
                  style={styles.amenityMenuItem(form.amenities.includes(amenity), index)}
                  onClick={() => toggleAmenity(amenity)}
                >
                  {form.amenities.includes(amenity) && <Icons.Check />}
                  <span>{amenity}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Image Upload */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Property Images</h2>
            <div style={styles.uploadArea}>
              <div style={styles.uploadIcon}><Icons.Upload /></div>
              <div style={styles.uploadText}>Drag and drop images here</div>
              <div style={styles.uploadSubtext}>or click to browse files</div>
              <input 
                type="file" 
                accept="image/*" 
                multiple 
                style={styles.fileInput}
                onChange={() => {}}
              />
            </div>
          </section>

          {/* Action Buttons */}
          <div style={styles.actions}>
            <button type="button" style={styles.cancelBtn} onClick={handleCancel}>
              Cancel
            </button>
            <button 
              type="submit" 
              style={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Saving...</span>
              ) : (
                <><Icons.Check /> Add Property</>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

const styles = {
  root: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    background: COLORS.background,
    minHeight: "100vh",
    color: COLORS.text.primary,
  },
  header: {
    background: COLORS.surface,
    borderBottom: `1px solid ${COLORS.border}`,
    padding: "24px 40px",
  },
  headerContent: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  backBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "transparent",
    border: "none",
    color: COLORS.text.secondary,
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    marginBottom: 16,
    padding: 0,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: COLORS.text.primary,
    margin: "0 0 8px 0",
    letterSpacing: "-0.5px",
  },
  pageSubtitle: {
    fontSize: 14,
    color: COLORS.text.secondary,
    margin: 0,
  },
  main: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "32px 40px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    animation: "fadeIn 0.3s ease",
  },
  section: {
    background: COLORS.surface,
    borderRadius: 16,
    padding: 24,
    border: `1px solid ${COLORS.border}`,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.text.primary,
    margin: "0 0 20px 0",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: COLORS.text.primary,
  },
  input: {
    padding: "12px 16px",
    borderRadius: 10,
    border: `1px solid ${COLORS.border}`,
    fontSize: 14,
    color: COLORS.text.primary,
    background: COLORS.background,
    outline: "none",
    transition: "all 0.2s",
  },
  select: {
    padding: "12px 16px",
    borderRadius: 10,
    border: `1px solid ${COLORS.border}`,
    fontSize: 14,
    color: COLORS.text.primary,
    background: COLORS.background,
    outline: "none",
    cursor: "pointer",
  },
  textarea: {
    padding: "12px 16px",
    borderRadius: 10,
    border: `1px solid ${COLORS.border}`,
    fontSize: 14,
    color: COLORS.text.primary,
    background: COLORS.background,
    outline: "none",
    resize: "vertical",
    fontFamily: "inherit",
    minHeight: 120,
  },
  // Amenities Menu Bar Style
  amenitiesMenuBar: {
    display: "flex",
    flexWrap: "wrap",
    gap: 0,
    borderRadius: 12,
    border: `1px solid ${COLORS.border}`,
    overflow: "hidden",
    background: COLORS.background,
  },
  amenityMenuItem: (isActive, index) => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 20px",
    background: isActive ? COLORS.accent : "transparent",
    color: isActive ? "#fff" : COLORS.text.secondary,
    border: "none",
    borderRight: `1px solid ${COLORS.border}`,
    borderLeft: index === 0 ? "none" : undefined,
    fontSize: 14,
    fontWeight: isActive ? 600 : 500,
    cursor: "pointer",
    transition: "all 0.2s",
    whiteSpace: "nowrap",
    flex: "1 1 auto",
    justifyContent: "center",
  }),
  uploadArea: {
    position: "relative",
    border: `2px dashed ${COLORS.border}`,
    borderRadius: 12,
    padding: 48,
    textAlign: "center",
    background: COLORS.background,
    cursor: "pointer",
    transition: "all 0.2s",
  },
  uploadIcon: {
    width: 48,
    height: 48,
    margin: "0 auto 16px",
    color: COLORS.text.muted,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: 600,
    color: COLORS.text.primary,
    marginBottom: 4,
  },
  uploadSubtext: {
    fontSize: 14,
    color: COLORS.text.secondary,
  },
  fileInput: {
    position: "absolute",
    inset: 0,
    opacity: 0,
    cursor: "pointer",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 16,
    paddingTop: 8,
  },
  cancelBtn: {
    padding: "12px 24px",
    background: "transparent",
    color: COLORS.text.secondary,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
  },
  submitBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 28px",
    background: COLORS.accent,
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
  },
};
