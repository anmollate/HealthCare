import { Heart } from 'lucide-react';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <a href="#" className={styles.logo}>
            <Heart size={28} className="text-primary" strokeWidth={2.5} />
            <span>ModernCare</span>
          </a>
          <ul className={styles.menu}>
            <li><a href="#home" className={styles.link}>Home</a></li>
            <li><a href="#services" className={styles.link}>Services</a></li>
            <li><a href="#doctors" className={styles.link}>Doctors</a></li>
            <li><a href="#about" className={styles.link}>About</a></li>
          </ul>
          <a href="#appointment" className={styles.cta}>
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}
