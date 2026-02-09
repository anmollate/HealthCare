
import { Activity, Brain, Users, ArrowRight } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        icon: <Users size={32} />,
        title: 'General Consultation',
        description: 'Comprehensive general health checkups and consultations for all age groups.',
        link: 'Learn more'
    },
    {
        icon: <Activity size={32} />,
        title: 'Cardiology',
        description: 'Advanced heart care with state-of-the-art diagnostic and treatment facilities.',
        link: 'Learn more'
    },
    {
        icon: <Brain size={32} />,
        title: 'Neurology',
        description: 'Specialized care for disorders of the nervous system, brain, and spinal cord.',
        link: 'Learn more'
    },
];

export function Services() {
    return (
        <section className={styles.section} id="services">
            <div className="container">
                <div className={styles.heading}>
                    <h2 className={styles.title}>Our Services</h2>
                    <p className={styles.subtitle}>
                        We offer a wide range of medical services to meet your healthcare needs.
                    </p>
                </div>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon_box}>{service.icon}</div>
                            <h3 className={styles.card_title}>{service.title}</h3>
                            <p className={styles.card_text}>{service.description}</p>
                            <a href="#" className={styles.link}>
                                {service.link} <ArrowRight className="ml-2" size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
