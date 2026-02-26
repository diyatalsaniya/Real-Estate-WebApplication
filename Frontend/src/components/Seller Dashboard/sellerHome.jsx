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

const mockProperties = [
  { id: 1, title: "Modern Villa in Bandra", price: 8500000, type: "Villa", location: "Bandra, Mumbai", status: "active", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80", inquiries: 12, amenities: ["Pool", "Parking", "Garden"], description: "Stunning modern villa with panoramic city views." },
  { id: 2, title: "Studio Apartment, Koramangala", price: 4500000, type: "Apartment", location: "Koramangala, Bengaluru", status: "pending", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80", inquiries: 5, amenities: ["Gym", "Security"], description: "Cozy studio perfect for young professionals." },
  { id: 3, title: "3BHK Sea-Facing Flat", price: 12000000, type: "Apartment", location: "Marine Drive, Mumbai", status: "sold", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80", inquiries: 24, amenities: ["Balcony", "Sea View", "Parking"], description: "Luxurious sea-facing flat on Marine Drive." },
  { id: 4, title: "Commercial Office Space", price: 6000000, type: "Commercial", location: "Connaught Place, Delhi", status: "active", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80", inquiries: 8, amenities: ["Lift", "Parking", "24x7 Security"], description: "Prime office space in the heart of Delhi." },
];

const mockInquiries = [
  { id: 1, propertyId: 1, buyerName: "Rahul Sharma", email: "rahul@email.com", phone: "+91 98765 43210", message: "Interested in viewing this weekend. Is Saturday morning possible?", status: "pending", visitDate: null, date: "2024-01-20" },
  { id: 2, propertyId: 1, buyerName: "Priya Mehta", email: "priya@email.com", phone: "+91 87654 32109", message: "I have a home loan pre-approval. Can we discuss the price?", status: "accepted", visitDate: "2024-01-25", date: "2024-01-19" },
  { id: 3, propertyId: 2, buyerName: "Amit Patel", email: "amit@email.com", phone: "+91 76543 21098", message: "Is the apartment furnished? Looking for immediate possession.", status: "rejected", visitDate: null, date: "2024-01-18" },
  { id: 4, propertyId: 4, buyerName: "Sneha Gupta", email: "sneha@email.com", phone: "+91 65432 10987", message: "Looking for office space for 15 employees. Ready to sign 3-year lease.", status: "pending", visitDate: null, date: "2024-01-21" },
];

const PROPERTY_TYPES = ["Apartment", "Villa", "Plot", "Commercial", "Penthouse", "Studio"];
const AMENITIES_LIST = ["Pool", "Gym", "Parking", "Garden", "Balcony", "Sea View", "Lift", "Security", "24x7 Security", "Power Backup", "Clubhouse"];

const formatPrice = (p) => p >= 10000000 ? `₹${(p/10000000).toFixed(2)} Cr` : `₹${(p/100000).toFixed(2)} L`;

const statusColors = {
  active: { bg: "#dcfce7", text: "#166534", label: "Active", border: "#86efac" },
  pending: { bg: "#fef3c7", text: "#92400e", label: "Pending", border: "#fcd34d" },
  sold: { bg: "#f1f5f9", text: "#475569", label: "Sold", border: "#cbd5e1" },
};

const inquiryStatusColors = {
  pending: { bg: "#fef3c7", text: "#92400e", label: "Pending" },
  accepted: { bg: "#d1fae5", text: "#065f46", label: "Accepted" },
  rejected: { bg: "#fee2e2", text: "#991b1b", label: "Rejected" },
};

// Icons
const Icons = {
  Dashboard: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  Home: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Message: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  Plus: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  Edit: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  ),
  Trash: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  X: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Building: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-5a2 2 0 0 1 4 0v5"/>
    </svg>
  ),
  TrendingUp: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  Users: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Award: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  ),
  Clock: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  Bell: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  Filter: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
  ),
};

export default function SellerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [properties, setProperties] = useState(mockProperties);
  const [inquiries, setInquiries] = useState(mockInquiries);
  const [editProperty, setEditProperty] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [visitDateInput, setVisitDateInput] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [toast, setToast] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const totalInquiries = inquiries.length;
  const activeListings = properties.filter(p => p.status === "active").length;
  const pendingApproval = properties.filter(p => p.status === "pending").length;
  const soldProperties = properties.filter(p => p.status === "sold").length;

  const handleEditSave = () => {
    setProperties(p => p.map(prop => prop.id === editProperty.id ? { ...editProperty, price: Number(editProperty.price) } : prop));
    setEditProperty(null);
    showToast("Property updated!");
  };

  const handleDelete = (id) => {
    setProperties(p => p.filter(x => x.id !== id));
    setDeleteConfirm(null);
    showToast("Property removed.");
  };

  const handleInquiryAction = (id, action) => {
    setInquiries(q => q.map(i => i.id === id ? { ...i, status: action } : i));
    showToast(action === "accepted" ? "Visit request accepted!" : "Request rejected.");
  };

  const handleScheduleVisit = (id) => {
    if (!visitDateInput) { showToast("Please select a date", "error"); return; }
    setInquiries(q => q.map(i => i.id === id ? { ...i, visitDate: visitDateInput, status: "accepted" } : i));
    setSelectedInquiry(null);
    setVisitDateInput("");
    showToast("Visit scheduled!");
  };

  const handleMarkSold = (propId) => {
    setProperties(p => p.map(prop => prop.id === propId ? { ...prop, status: "sold" } : prop));
    showToast("Property marked as Sold!");
  };

  const filteredProps = filterStatus === "all" 
    ? properties.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase()))
    : properties.filter(p => p.status === filterStatus && (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase())));
  
  const propInquiries = (propId) => inquiries.filter(i => i.propertyId === propId);

  const navItems = [
    { id: "overview", icon: Icons.Dashboard, label: "Overview" },
    { id: "properties", icon: Icons.Home, label: "My Properties" },
    { id: "inquiries", icon: Icons.Message, label: "Inquiries" },
  ];

  const statsCards = [
    { label: "Total Properties", value: properties.length, icon: Icons.Home, color: COLORS.info },
    { label: "Active Listings", value: activeListings, icon: Icons.TrendingUp, color: COLORS.success },
    { label: "Pending Review", value: pendingApproval, icon: Icons.Clock, color: COLORS.warning },
    { label: "Sold Properties", value: soldProperties, icon: Icons.Award, color: COLORS.accent },
    { label: "Total Inquiries", value: totalInquiries, icon: Icons.Users, color: COLORS.primary },
  ];

  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        * { scrollbar-width: thin; scrollbar-color: ${COLORS.border} transparent; }
        *::-webkit-scrollbar { width: 6px; height: 6px; }
        *::-webkit-scrollbar-track { background: transparent; }
        *::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 3px; }
      `}</style>

      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <div style={styles.logoContainer}>
            <div style={styles.logoIcon}>E</div>
            <div>
              <div style={styles.logoText}>EstatePro</div>
              <div style={styles.logoSub}>Seller Portal</div>
            </div>
          </div>
        </div>
        
        <nav style={styles.nav}>
          <div style={styles.navLabel}>Main Menu</div>
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button 
                key={item.id} 
                style={styles.navItem(isActive)} 
                onClick={() => setActiveTab(item.id)}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = "#1e293b"; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
              >
                <span style={{ color: isActive ? COLORS.accent : "#94a3b8" }}><Icon /></span>
                <span>{item.label}</span>
                {isActive && <div style={styles.navIndicator} />}
              </button>
            );
          })}
        </nav>

        <div style={styles.sidebarFooter}>
          <div style={styles.userCard}>
            <div style={styles.userAvatar}>VS</div>
            <div style={styles.userInfo}>
              <div style={styles.userName}>Vikram Singh</div>
              <div style={styles.userRole}>Premium Seller</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Top Header */}
        <header style={styles.header}>
          <div>
            <h1 style={styles.pageTitle}>
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "properties" && "My Properties"}
              {activeTab === "inquiries" && "Inquiry Management"}
            </h1>
            <p style={styles.pageSubtitle}>
              {activeTab === "overview" && "Welcome back! Here's what's happening with your listings."}
              {activeTab === "properties" && "Manage and track all your property listings."}
              {activeTab === "inquiries" && "Review and respond to buyer inquiries."}
            </p>
          </div>
          <div style={styles.headerActions}>
            <button style={styles.iconBtn}><Icons.Bell /></button>
            <div style={styles.divider} />
            <button style={styles.primaryBtn} onClick={() => navigate('/seller/add-property')}>
              <Icons.Plus /> Add Property
            </button>
          </div>
        </header>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div style={styles.tabContent}>
            {/* Stats Grid */}
            <div style={styles.statsGrid}>
              {statsCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div key={idx} style={styles.statCard}>
                    <div style={styles.statIconWrapper(card.color)}>
                      <Icon />
                    </div>
                    <div style={styles.statContent}>
                      <div style={styles.statValue}>{card.value}</div>
                      <div style={styles.statLabel}>{card.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recent Activity Section */}
            <div style={styles.contentGrid}>
              {/* Recent Properties */}
              <div style={styles.section}>
                <div style={styles.sectionHeader}>
                  <h3 style={styles.sectionTitle}>Recent Listings</h3>
                  <button style={styles.textBtn} onClick={() => setActiveTab("properties")}>
                    View All <Icons.ChevronRight />
                  </button>
                </div>
                <div style={styles.propertyList}>
                  {properties.slice(0, 3).map(p => (
                    <div key={p.id} style={styles.propertyListItem}>
                      <img src={p.image} alt={p.title} style={styles.propertyThumb} />
                      <div style={styles.propertyListInfo}>
                        <div style={styles.propertyListTitle}>{p.title}</div>
                        <div style={styles.propertyListMeta}>
                          <Icons.MapPin /> {p.location}
                        </div>
                        <div style={styles.propertyListPrice}>{formatPrice(p.price)}</div>
                      </div>
                      <span style={styles.statusBadge(p.status)}>{statusColors[p.status].label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Inquiries */}
              <div style={styles.section}>
                <div style={styles.sectionHeader}>
                  <h3 style={styles.sectionTitle}>Recent Inquiries</h3>
                  <button style={styles.textBtn} onClick={() => setActiveTab("inquiries")}>
                    View All <Icons.ChevronRight />
                  </button>
                </div>
                <div style={styles.inquiryList}>
                  {inquiries.slice(0, 4).map(inq => {
                    const prop = properties.find(p => p.id === inq.propertyId);
                    return (
                      <div key={inq.id} style={styles.inquiryListItem}>
                        <div style={styles.inquiryAvatar}>{inq.buyerName.charAt(0)}</div>
                        <div style={styles.inquiryInfo}>
                          <div style={styles.inquiryName}>{inq.buyerName}</div>
                          <div style={styles.inquiryProperty}>{prop?.title}</div>
                          <div style={styles.inquiryMessage}>{inq.message.substring(0, 50)}...</div>
                        </div>
                        <span style={styles.inquiryStatusBadge(inq.status)}>
                          {inquiryStatusColors[inq.status].label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROPERTIES TAB */}
        {activeTab === "properties" && (
          <div style={styles.tabContent}>
            {/* Filters & Search */}
            <div style={styles.toolbar}>
              <div style={styles.searchBox}>
                <Icons.Search />
                <input 
                  type="text" 
                  placeholder="Search properties..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={styles.searchInput}
                />
              </div>
              <div style={styles.filterGroup}>
                {["all", "active", "pending", "sold"].map(s => (
                  <button 
                    key={s} 
                    style={styles.filterBtn(filterStatus === s)} 
                    onClick={() => setFilterStatus(s)}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Properties Grid */}
            <div style={styles.propertyGrid}>
              {filteredProps.map(p => (
                <PropertyCard 
                  key={p.id} 
                  p={p} 
                  onEdit={() => setEditProperty({ ...p, price: String(p.price) })} 
                  onDelete={() => setDeleteConfirm(p.id)} 
                  onMarkSold={() => handleMarkSold(p.id)} 
                  inquiryCount={propInquiries(p.id).length} 
                />
              ))}
            </div>
            {filteredProps.length === 0 && (
              <div style={styles.emptyState}>
                <div style={styles.emptyIcon}><Icons.Home /></div>
                <div style={styles.emptyTitle}>No properties found</div>
                <div style={styles.emptyText}>Try adjusting your search or filters</div>
              </div>
            )}
          </div>
        )}

        {/* INQUIRIES TAB */}
        {activeTab === "inquiries" && (
          <div style={styles.tabContent}>
            <div style={styles.inquiryTableContainer}>
              <table style={styles.inquiryTable}>
                <thead>
                  <tr style={styles.tableHeader}>
                    <th style={styles.tableHeaderCell}>Buyer</th>
                    <th style={styles.tableHeaderCell}>Property</th>
                    <th style={styles.tableHeaderCell}>Message</th>
                    <th style={styles.tableHeaderCell}>Date</th>
                    <th style={styles.tableHeaderCell}>Status</th>
                    <th style={styles.tableHeaderCell}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map(inq => {
                    const prop = properties.find(p => p.id === inq.propertyId);
                    return (
                      <tr key={inq.id} style={styles.tableRow}>
                        <td style={styles.tableCell}>
                          <div style={styles.buyerInfo}>
                            <div style={styles.buyerAvatar}>{inq.buyerName.charAt(0)}</div>
                            <div>
                              <div style={styles.buyerName}>{inq.buyerName}</div>
                              <div style={styles.buyerContact}>{inq.email}</div>
                            </div>
                          </div>
                        </td>
                        <td style={styles.tableCell}>
                          <div style={styles.propertyCell}>
                            <div style={styles.propertyCellTitle}>{prop?.title || "—"}</div>
                            <div style={styles.propertyCellLocation}><Icons.MapPin /> {prop?.location}</div>
                            {inq.visitDate && (
                              <div style={styles.visitDate}><Icons.Calendar /> {inq.visitDate}</div>
                            )}
                          </div>
                        </td>
                        <td style={{...styles.tableCell, maxWidth: 250}}>
                          <div style={styles.messageCell}>{inq.message}</div>
                        </td>
                        <td style={styles.tableCell}>
                          <div style={styles.dateCell}>{inq.date}</div>
                        </td>
                        <td style={styles.tableCell}>
                          <span style={styles.inquiryStatusBadge(inq.status)}>
                            {inquiryStatusColors[inq.status]?.label}
                          </span>
                        </td>
                        <td style={styles.tableCell}>
                          <div style={styles.actionButtons}>
                            {inq.status === "pending" && (
                              <>
                                <button style={styles.actionBtnAccept} onClick={() => handleInquiryAction(inq.id, "accepted")}>
                                  <Icons.Check />
                                </button>
                                <button style={styles.actionBtnReject} onClick={() => handleInquiryAction(inq.id, "rejected")}>
                                  <Icons.X />
                                </button>
                              </>
                            )}
                            {inq.status === "accepted" && !inq.visitDate && (
                              <button style={styles.scheduleBtn} onClick={() => setSelectedInquiry(inq)}>
                                <Icons.Calendar /> Schedule
                              </button>
                            )}
                            {prop && prop.status !== "sold" && (
                              <button style={styles.soldBtn} onClick={() => handleMarkSold(prop.id)}>
                                Mark Sold
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

            {/* EDIT MODAL */}
      {editProperty && (
        <div style={styles.modalOverlay} onClick={(e) => e.target === e.currentTarget && setEditProperty(null)}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Edit Property</h2>
              <button style={styles.modalClose} onClick={() => setEditProperty(null)}><Icons.X /></button>
            </div>
            <div style={styles.modalBody}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Title</label>
                <input style={styles.formInput} value={editProperty.title} onChange={e => setEditProperty(p => ({ ...p, title: e.target.value }))} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Description</label>
                <textarea style={styles.formTextarea} value={editProperty.description} onChange={e => setEditProperty(p => ({ ...p, description: e.target.value }))} />
              </div>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Price (₹)</label>
                  <input style={styles.formInput} type="number" value={editProperty.price} onChange={e => setEditProperty(p => ({ ...p, price: e.target.value }))} />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Type</label>
                  <select style={styles.formSelect} value={editProperty.type} onChange={e => setEditProperty(p => ({ ...p, type: e.target.value }))}>
                    {PROPERTY_TYPES.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Location</label>
                <input style={styles.formInput} value={editProperty.location} onChange={e => setEditProperty(p => ({ ...p, location: e.target.value }))} />
              </div>
            </div>
            <div style={styles.modalFooter}>
              <button style={styles.secondaryBtn} onClick={() => setEditProperty(null)}>Cancel</button>
              <button style={styles.primaryBtn} onClick={handleEditSave}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM */}
      {deleteConfirm && (
        <div style={styles.modalOverlay}>
          <div style={{...styles.modal, maxWidth: 400}}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Delete Property</h2>
              <button style={styles.modalClose} onClick={() => setDeleteConfirm(null)}><Icons.X /></button>
            </div>
            <div style={styles.modalBody}>
              <p style={styles.confirmText}>Are you sure you want to delete this property? This action cannot be undone.</p>
            </div>
            <div style={styles.modalFooter}>
              <button style={styles.secondaryBtn} onClick={() => setDeleteConfirm(null)}>Cancel</button>
              <button style={styles.dangerBtn} onClick={() => handleDelete(deleteConfirm)}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* SCHEDULE VISIT */}
      {selectedInquiry && (
        <div style={styles.modalOverlay} onClick={(e) => e.target === e.currentTarget && setSelectedInquiry(null)}>
          <div style={{...styles.modal, maxWidth: 400}}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Schedule Visit</h2>
              <button style={styles.modalClose} onClick={() => setSelectedInquiry(null)}><Icons.X /></button>
            </div>
            <div style={styles.modalBody}>
              <p style={styles.scheduleText}>Scheduling visit for <strong>{selectedInquiry.buyerName}</strong></p>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Visit Date & Time</label>
                <input style={styles.formInput} type="datetime-local" value={visitDateInput} onChange={e => setVisitDateInput(e.target.value)} />
              </div>
            </div>
            <div style={styles.modalFooter}>
              <button style={styles.secondaryBtn} onClick={() => setSelectedInquiry(null)}>Cancel</button>
              <button style={styles.primaryBtn} onClick={() => handleScheduleVisit(selectedInquiry.id)}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div style={styles.toast(toast.type)}>
          {toast.type === "success" ? <Icons.Check /> : <Icons.X />}
          <span>{toast.msg}</span>
        </div>
      )}
    </div>
  );
}

function PropertyCard({ p, onEdit, onDelete, onMarkSold, inquiryCount }) {
  return (
    <div style={propertyStyles.card}>
      <div style={propertyStyles.imageContainer}>
        <img src={p.image} alt={p.title} style={propertyStyles.image} />
        <span style={propertyStyles.statusBadge(p.status)}>{statusColors[p.status].label}</span>
      </div>
      <div style={propertyStyles.content}>
        <h3 style={propertyStyles.title}>{p.title}</h3>
        <div style={propertyStyles.location}>
          <Icons.MapPin /> {p.location}
        </div>
        <div style={propertyStyles.type}>
          <Icons.Building /> {p.type}
        </div>
        <div style={propertyStyles.price}>{formatPrice(p.price)}</div>
        <div style={propertyStyles.amenities}>
          {p.amenities?.slice(0, 3).map(a => (
            <span key={a} style={propertyStyles.amenity}>{a}</span>
          ))}
        </div>
        <div style={propertyStyles.inquiries}>
          <Icons.Message /> {inquiryCount} inquiry{inquiryCount !== 1 ? 'ies' : 'y'}
        </div>
      </div>
      <div style={propertyStyles.actions}>
        <button style={propertyStyles.editBtn} onClick={onEdit}><Icons.Edit /></button>
        {p.status !== "sold" && (
          <button style={propertyStyles.soldBtn} onClick={onMarkSold}><Icons.Check /></button>
        )}
        <button style={propertyStyles.deleteBtn} onClick={onDelete}><Icons.Trash /></button>
      </div>
    </div>
  );
}

// Styles
const styles = {
  root: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    background: COLORS.background,
    minHeight: "100vh",
    color: COLORS.text.primary,
    display: "flex",
  },
  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: 260,
    background: COLORS.sidebar,
    display: "flex",
    flexDirection: "column",
    zIndex: 100,
  },
  sidebarHeader: {
    padding: "24px",
    borderBottom: "1px solid #1e293b",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  logoIcon: {
    width: 40,
    height: 40,
    background: COLORS.accent,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
    letterSpacing: "-0.5px",
  },
  logoSub: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },
  nav: {
    flex: 1,
    padding: "16px 12px",
  },
  navLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: 1,
    padding: "0 12px",
    marginBottom: 8,
  },
  navItem: (active) => ({
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 16px",
    borderRadius: 8,
    cursor: "pointer",
    marginBottom: 4,
    transition: "all 0.2s ease",
    background: active ? "#1e293b" : "transparent",
    color: active ? "#fff" : "#94a3b8",
    fontWeight: active ? 600 : 500,
    fontSize: 14,
    border: "none",
    width: "100%",
    textAlign: "left",
    position: "relative",
  }),
  navIndicator: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: 3,
    height: 20,
    background: COLORS.accent,
    borderRadius: "0 4px 4px 0",
  },
  sidebarFooter: {
    padding: "16px",
    borderTop: "1px solid #1e293b",
  },
  userCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px",
    background: "#1e293b",
    borderRadius: 10,
  },
  userAvatar: {
    width: 36,
    height: 36,
    background: COLORS.accent,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 14,
    fontWeight: 600,
    color: "#fff",
  },
  userRole: {
    fontSize: 12,
    color: "#64748b",
  },
  main: {
    marginLeft: 260,
    flex: 1,
    padding: "32px 40px",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 32,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: COLORS.text.primary,
    letterSpacing: "-0.5px",
    margin: 0,
  },
  pageSubtitle: {
    fontSize: 14,
    color: COLORS.text.secondary,
    marginTop: 4,
  },
  headerActions: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    border: `1px solid ${COLORS.border}`,
    background: COLORS.surface,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: COLORS.text.secondary,
    transition: "all 0.2s",
  },
  divider: {
    width: 1,
    height: 24,
    background: COLORS.border,
  },
  primaryBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 20px",
    background: COLORS.accent,
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
  },
  secondaryBtn: {
    padding: "10px 20px",
    background: "transparent",
    color: COLORS.text.secondary,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
  },
  dangerBtn: {
    padding: "10px 20px",
    background: COLORS.danger,
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
  },
  tabContent: {
    animation: "fadeIn 0.3s ease",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
    marginBottom: 32,
  },
  statCard: {
    background: COLORS.surface,
    borderRadius: 16,
    padding: 20,
    display: "flex",
    alignItems: "center",
    gap: 16,
    border: `1px solid ${COLORS.border}`,
    transition: "all 0.2s",
  },
  statIconWrapper: (color) => ({
    width: 48,
    height: 48,
    borderRadius: 12,
    background: `${color}15`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: color,
  }),
  statContent: {
    flex: 1,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 700,
    color: COLORS.text.primary,
    letterSpacing: "-0.5px",
  },
  statLabel: {
    fontSize: 13,
    color: COLORS.text.secondary,
    fontWeight: 500,
    marginTop: 2,
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
  },
  section: {
    background: COLORS.surface,
    borderRadius: 16,
    padding: 24,
    border: `1px solid ${COLORS.border}`,
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.text.primary,
    margin: 0,
  },
  textBtn: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    background: "transparent",
    border: "none",
    color: COLORS.accent,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  propertyList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  propertyListItem: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: 12,
    background: COLORS.background,
    borderRadius: 12,
    transition: "all 0.2s",
  },
  propertyThumb: {
    width: 60,
    height: 60,
    borderRadius: 10,
    objectFit: "cover",
  },
  propertyListInfo: {
    flex: 1,
  },
  propertyListTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: COLORS.text.primary,
    marginBottom: 4,
  },
  propertyListMeta: {
    fontSize: 12,
    color: COLORS.text.secondary,
    display: "flex",
    alignItems: "center",
    gap: 4,
    marginBottom: 4,
  },
  propertyListPrice: {
    fontSize: 14,
    fontWeight: 700,
    color: COLORS.accent,
  },
  statusBadge: (status) => ({
    padding: "4px 10px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
    background: statusColors[status].bg,
    color: statusColors[status].text,
    border: `1px solid ${statusColors[status].border}`,
  }),
  inquiryList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  inquiryListItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 12,
    background: COLORS.background,
    borderRadius: 12,
  },
  inquiryAvatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: COLORS.accent,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
  },
  inquiryInfo: {
    flex: 1,
  },
  inquiryName: {
    fontSize: 14,
    fontWeight: 600,
    color: COLORS.text.primary,
  },
  inquiryProperty: {
    fontSize: 12,
    color: COLORS.text.secondary,
    marginTop: 2,
  },
  inquiryMessage: {
    fontSize: 12,
    color: COLORS.text.muted,
    marginTop: 2,
  },
  inquiryStatusBadge: (status) => ({
    padding: "4px 10px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
    background: inquiryStatusColors[status].bg,
    color: inquiryStatusColors[status].text,
  }),
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    gap: 16,
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 16px",
    background: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 10,
    flex: 1,
    maxWidth: 320,
    color: COLORS.text.muted,
  },
  searchInput: {
    border: "none",
    background: "transparent",
    fontSize: 14,
    color: COLORS.text.primary,
    outline: "none",
    flex: 1,
  },
  filterGroup: {
    display: "flex",
    gap: 8,
  },
  filterBtn: (active) => ({
    padding: "8px 16px",
    borderRadius: 8,
    border: `1px solid ${active ? COLORS.accent : COLORS.border}`,
    background: active ? `${COLORS.accent}15` : COLORS.surface,
    color: active ? COLORS.accent : COLORS.text.secondary,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
  }),
  propertyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: 24,
  },
  emptyState: {
    textAlign: "center",
    padding: 60,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    margin: "0 auto 16px",
    color: COLORS.text.muted,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.text.primary,
    marginBottom: 4,
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.text.secondary,
  },
  inquiryTableContainer: {
    background: COLORS.surface,
    borderRadius: 16,
    border: `1px solid ${COLORS.border}`,
    overflow: "hidden",
  },
  inquiryTable: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    background: COLORS.background,
    borderBottom: `1px solid ${COLORS.border}`,
  },
  tableHeaderCell: {
    padding: "16px",
    textAlign: "left",
    fontSize: 12,
    fontWeight: 600,
    color: COLORS.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  tableRow: {
    borderBottom: `1px solid ${COLORS.border}`,
    transition: "background 0.2s",
  },
  tableCell: {
    padding: "16px",
    verticalAlign: "top",
  },
  buyerInfo: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  buyerAvatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: COLORS.accent,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
  },
  buyerName: {
    fontSize: 14,
    fontWeight: 600,
    color: COLORS.text.primary,
  },
  buyerContact: {
    fontSize: 12,
    color: COLORS.text.secondary,
  },
  propertyCell: {},
  propertyCellTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: COLORS.text.primary,
    marginBottom: 4,
  },
  propertyCellLocation: {
    fontSize: 12,
    color: COLORS.text.secondary,
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  visitDate: {
    fontSize: 12,
    color: COLORS.success,
    display: "flex",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  messageCell: {
    fontSize: 13,
    color: COLORS.text.secondary,
    lineHeight: 1.5,
  },
  dateCell: {
    fontSize: 13,
    color: COLORS.text.secondary,
  },
  actionButtons: {
    display: "flex",
    gap: 8,
  },
  actionBtnAccept: {
    width: 32,
    height: 32,
    borderRadius: 8,
    border: "none",
    background: COLORS.success,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  actionBtnReject: {
    width: 32,
    height: 32,
    borderRadius: 8,
    border: "none",
    background: COLORS.danger,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  scheduleBtn: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 12px",
    background: COLORS.accent,
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
  },
  soldBtn: {
    padding: "6px 12px",
    background: COLORS.background,
    color: COLORS.text.secondary,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    animation: "fadeIn 0.2s ease",
  },
  modal: {
    background: COLORS.surface,
    borderRadius: 16,
    width: "100%",
    maxWidth: 560,
    maxHeight: "90vh",
    overflow: "hidden",
    animation: "scaleIn 0.2s ease",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 24px",
    borderBottom: `1px solid ${COLORS.border}`,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: COLORS.text.primary,
    margin: 0,
  },
  modalClose: {
    width: 32,
    height: 32,
    borderRadius: 8,
    border: "none",
    background: COLORS.background,
    color: COLORS.text.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  modalBody: {
    padding: "24px",
    overflowY: "auto",
    maxHeight: "calc(90vh - 140px)",
  },
  modalFooter: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 12,
    padding: "16px 24px",
    borderTop: `1px solid ${COLORS.border}`,
  },
  formGroup: {
    marginBottom: 20,
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },
  formLabel: {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: COLORS.text.primary,
    marginBottom: 8,
  },
  formInput: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: 10,
    border: `1px solid ${COLORS.border}`,
    fontSize: 14,
    color: COLORS.text.primary,
    background: COLORS.background,
    outline: "none",
    boxSizing: "border-box",
  },
  formSelect: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: 10,
    border: `1px solid ${COLORS.border}`,
    fontSize: 14,
    color: COLORS.text.primary,
    background: COLORS.background,
    outline: "none",
    cursor: "pointer",
  },
  formTextarea: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: 10,
    border: `1px solid ${COLORS.border}`,
    fontSize: 14,
    color: COLORS.text.primary,
    background: COLORS.background,
    outline: "none",
    minHeight: 100,
    resize: "vertical",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  amenityGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  amenityChip: (active) => ({
    padding: "6px 12px",
    borderRadius: 20,
    border: `1px solid ${active ? COLORS.accent : COLORS.border}`,
    background: active ? `${COLORS.accent}15` : COLORS.background,
    color: active ? COLORS.accent : COLORS.text.secondary,
    fontSize: 13,
    fontWeight: active ? 600 : 500,
    cursor: "pointer",
    transition: "all 0.2s",
  }),
  confirmText: {
    fontSize: 14,
    color: COLORS.text.secondary,
    lineHeight: 1.6,
    margin: 0,
  },
  scheduleText: {
    fontSize: 14,
    color: COLORS.text.secondary,
    marginBottom: 20,
  },
  toast: (type) => ({
    position: "fixed",
    bottom: 24,
    right: 24,
    padding: "14px 20px",
    borderRadius: 12,
    background: type === "error" ? COLORS.danger : COLORS.success,
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: 10,
    zIndex: 9999,
    animation: "slideUp 0.3s ease",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
  }),
};

// Property Card Styles
const propertyStyles = {
  card: {
    background: COLORS.surface,
    borderRadius: 16,
    overflow: "hidden",
    border: `1px solid ${COLORS.border}`,
    transition: "all 0.2s ease",
  },
  imageContainer: {
    position: "relative",
    height: 200,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  statusBadge: (status) => ({
    position: "absolute",
    top: 12,
    right: 12,
    padding: "6px 12px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
    background: statusColors[status].bg,
    color: statusColors[status].text,
    border: `1px solid ${statusColors[status].border}`,
  }),
  content: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color: COLORS.text.primary,
    margin: "0 0 8px 0",
    lineHeight: 1.4,
  },
  location: {
    fontSize: 13,
    color: COLORS.text.secondary,
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },
  type: {
    fontSize: 13,
    color: COLORS.text.secondary,
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.accent,
    marginBottom: 12,
  },
  amenities: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 12,
  },
  amenity: {
    padding: "4px 10px",
    background: COLORS.background,
    borderRadius: 6,
    fontSize: 11,
    color: COLORS.text.secondary,
    fontWeight: 500,
  },
  inquiries: {
    fontSize: 13,
    color: COLORS.text.secondary,
    display: "flex",
    alignItems: "center",
    gap: 6,
    paddingTop: 12,
    borderTop: `1px solid ${COLORS.border}`,
  },
  actions: {
    display: "flex",
    gap: 8,
    padding: "12px 20px",
    borderTop: `1px solid ${COLORS.border}`,
    background: COLORS.background,
  },
  editBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    border: `1px solid ${COLORS.border}`,
    background: COLORS.surface,
    color: COLORS.text.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  soldBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    border: `1px solid ${COLORS.success}`,
    background: `${COLORS.success}15`,
    color: COLORS.success,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  deleteBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    border: `1px solid ${COLORS.danger}`,
    background: `${COLORS.danger}15`,
    color: COLORS.danger,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    marginLeft: "auto",
  },
};