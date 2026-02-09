
import { ArrowRight, Calendar } from 'lucide-react';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h1 className={styles.heading}>
                            <span className={styles.highlight}>Advanced Care</span> <br />
                            For Your Family
                        </h1>
                        <p className={styles.subheading}>
                            We provide world-class medical services with a team of experienced
                            specialists. Your health is our top priority.
                        </p>
                        <div className={styles.cta_group}>
                            <a href="#appointment" className={styles.cta}>
                                Book Appointment <ArrowRight className="inline-block ml-2" size={20} />
                            </a>
                            <a href="#services" className={styles.secondary_cta}>
                                See Services
                            </a>
                        </div>
                    </div>
                    <div className={styles.image_container}>
                        <img
                            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=2091&q=80"
                            alt="Team of doctors"
                            className={styles.hero_image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
