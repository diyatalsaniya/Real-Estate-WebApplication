export const statsData = [
  { title: 'Total Properties', value: '1,245', change: '+12%', isPositive: true },
  { title: 'Active Users', value: '4,567', change: '+5%', isPositive: true },
  { title: 'Total Inquiries', value: '890', change: '-2%', isPositive: false },
  { title: 'Monthly Revenue', value: '₹1.2Cr', change: '+18%', isPositive: true },
];

export const recentProperties = [
  { id: 1, title: 'Luxury Villa in Navrangpura', price: '₹4.5 Cr', status: 'Active', date: '2026-03-15' },
  { id: 2, title: 'Modern Apartment in Thaltej', price: '₹1.2 Cr', status: 'Pending', date: '2026-03-14' },
  { id: 3, title: 'Commercial Space in SG Highway', price: '₹8.9 Cr', status: 'Sold', date: '2026-03-12' },
  { id: 4, title: 'Cozy Townhouse in Satellite', price: '₹2.3 Cr', status: 'Active', date: '2026-03-10' },
];

export const usersData = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul.s@example.com', role: 'Buyer', status: 'Active' },
  { id: 2, name: 'Priya Patel', email: 'priya.p@example.com', role: 'Seller', status: 'Active' },
  { id: 3, name: 'Amit Kumar', email: 'amit.k@example.com', role: 'Agent', status: 'Inactive' },
  { id: 4, name: 'Neha Singh', email: 'neha.s@example.com', role: 'Buyer', status: 'Active' },
];

export const inquiriesData = [
  { id: 1, user: 'Karan Desai', property: 'Modern Apartment in Thaltej', message: 'I am interested in this property...', date: '2026-03-18', status: 'Unread' },
  { id: 2, user: 'Sneha Joshi', property: 'Luxury Villa in Navrangpura', message: 'Could we schedule a visit?', date: '2026-03-17', status: 'Read' },
  { id: 3, user: 'Vikram Mehta', property: 'Commercial Space in SG Highway', message: 'What is the exact square footage?', date: '2026-03-16', status: 'Replied' },
];

export const reviewsData = [
  { id: 1, author: 'Suresh Raina', property: 'Cozy Townhouse in Satellite', rating: 5, comment: 'Amazing property, very well maintained!', date: '2026-03-10' },
  { id: 2, author: 'Pooja Hegde', property: 'Modern Apartment in Thaltej', rating: 4, comment: 'Nice location but slightly overpriced.', date: '2026-03-12' },
];

export const notificationsData = [
  { id: 1, title: 'New Property Added', message: 'A new villa in Bopal was just listed.', time: '2 hours ago', read: false },
  { id: 2, title: 'New User Registered', message: 'Pooja Patel just created an account.', time: '5 hours ago', read: false },
  { id: 3, title: 'Inquiry Received', message: 'You have a new inquiry for Commercial Space.', time: '1 day ago', read: true },
];
