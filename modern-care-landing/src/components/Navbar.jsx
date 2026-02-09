
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>
            <Heart size={28} className="text-primary" strokeWidth={2.5} />
            <span>ModernCare</span>
          </Link>
          <ul className={styles.menu}>
            <li><Link to="/" className={styles.link}>Home</Link></li>
            <li><a href="/#services" className={styles.link}>Services</a></li>
            <li><a href="/#doctors" className={styles.link}>Doctors</a></li>
            <li><Link to="/ai-assistant" className={styles.link}>AI Health Assistance</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
