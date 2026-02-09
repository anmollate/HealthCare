
import styles from './Doctors.module.css';

const doctors = [
    {
        name: 'Dr. Sarah Wilson',
        specialty: 'Cardiologist',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Dr. James Carter',
        specialty: 'Neurologist',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Dr. Emily Chen',
        specialty: 'Pediatrician',
        image: 'https://images.unsplash.com/photo-1651008325513-37651c6c0393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
];

export function Doctors() {
    return (
        <section className={styles.section} id="doctors">
            <div className="container">
                <div className={styles.heading}>
                    <h2 className={styles.title}>Meet Our Doctors</h2>
                    <p className={styles.subtitle}>
                        Our team of highly qualified doctors is dedicated to providing you with
                        the best medical care.
                    </p>
                </div>
                <div className={styles.grid}>
                    {doctors.map((doctor, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.image_wrapper}>
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className={styles.doctor_image}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.name}>{doctor.name}</h3>
                                <p className={styles.specialty}>{doctor.specialty}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
