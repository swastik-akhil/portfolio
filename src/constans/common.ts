import { FiBookOpen, FiBriefcase, FiClipboard, FiGlobe, FiHome, FiImage, FiMail, FiUser } from 'react-icons/fi'

// Keep the public origin in one place so canonical metadata, robots.txt, and
// sitemap.xml always refer to the same deployed site. A local override remains
// available for development previews.
export const HOST = (process.env.NEXT_PUBLIC_HOST || 'https://akhilag.me').replace(/\/+$/, '')

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/experience', label: 'Experience', Icon: FiBriefcase },
  { path: '/projects', label: 'Projects', Icon: FiClipboard },
  { path: '/art', label: 'Art', Icon: FiImage },
  { path: '/contact', label: 'Contact', Icon: FiMail },
  // { path: '/guestbook', label: 'Guestbook', Icon: FiBookOpen },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/experience': 'Experience',
  '/blog': 'Blog',
  '/projects': 'Projects',
  '/art': 'Art',
  '/contact': 'Contact',
  // '/guestbook': 'G-book',
}

export const SOCIALS = {
  GH: 'https://github.com/swastik-akhil',
  IN: 'https://www.linkedin.com/in/akhil-agrawal-soccer',
}

export const RESUME_URL = 'https://drive.google.com/file/d/1vw6DKlzKer0K4zerZ_Qnwp4ntFvV1Ur4/view?usp=sharing'

export const EMAILJS = {
  // PUBLIC_KEY: '3dacBXVUOyTeCXMoS',
  // SERVICE_ID: 'service_8v4xdbs',
  // TEMPLATE_ID: 'template_5i9rzjf'
  PUBLIC_KEY: 'sq8G4sT-wUfp-u3eH',
  SERVICE_ID: 'service_ccc9rk3',
  TEMPLATE_ID: 'template_9i586pd'
  
}

export const FIREBASE_CONFIG = {
  // apiKey: "AIzaSyBs_LvMMjV0QYkXVsmVBJidKkawX6fGqYg",
  // authDomain: "tushar-portfolio-e813e.firebaseapp.com",
  // projectId: "tushar-portfolio-e813e",
  // storageBucket: "tushar-portfolio-e813e.firebasestorage.app",
  // messagingSenderId: "467988257045",
  // appId: "1:467988257045:web:79607b3961cf85b1f0b11c",
  // measurementId: "G-Y76YYMQNWM"
  apiKey: "AIzaSyACRJ8Cw6qAAho-LMFwk2DJue5iO_p1iRk",
  authDomain: "portfolio-75341.firebaseapp.com",
  projectId: "portfolio-75341",
  storageBucket: "portfolio-75341.firebasestorage.app",
  messagingSenderId: "113059734603",
  appId: "1:113059734603:web:5d0796bb5258e7c92b99ce",
  measurementId: "G-YTX1H8SKKV"
}
