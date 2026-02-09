
import { Heart, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div>
                        <div className={styles.brand}>
                            <Heart size={24} className="text-primary" strokeWidth={2.5} />
                            <span>ModernCare</span>
                        </div>
                        <p className={styles.description}>
                            Providing world-class healthcare with compassion and excellence.
                        </p>
                    </div>
                    <div>
                        <h3 className={styles.heading}>Quick Links</h3>
                        <ul className={styles.links}>
                            <li><a href="#home" className={styles.link}>Home</a></li>
                            <li><a href="#about" className={styles.link}>About Us</a></li>
                            <li><a href="#services" className={styles.link}>Services</a></li>
                            <li><a href="#doctors" className={styles.link}>Doctors</a></li>
                            <li><a href="#contact" className={styles.link}>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.heading}>Services</h3>
                        <ul className={styles.links}>
                            <li><a href="#" className={styles.link}>Cardiology</a></li>
                            <li><a href="#" className={styles.link}>Neurology</a></li>
                            <li><a href="#" className={styles.link}>Pediatrics</a></li>
                            <li><a href="#" className={styles.link}>Orthopedics</a></li>
                            <li><a href="#" className={styles.link}>Diagnostics</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.heading}>Contact Us</h3>
                        <ul className={styles.links}>
                            <li><a href="tel:+1234567890" className={styles.link}>+1 (555) 123-4567</a></li>
                            <li><a href="mailto:info@moderncare.com" className={styles.link}>info@moderncare.com</a></li>
                            <li><a href="#" className={styles.link}>123 Health Ave, Medical City, NY 10001</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom_bar}>
                    <p>&copy; {new Date().getFullYear()} ModernCare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
