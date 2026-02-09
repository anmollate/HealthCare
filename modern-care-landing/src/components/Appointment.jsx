
import styles from './Appointment.module.css';

export function Appointment() {
    return (
        <section className={styles.section} id="appointment">
            <div className="container">
                <div className={styles.heading}>
                    <h2 className={styles.title}>Book an Appointment</h2>
                    <p className={styles.subtitle}>
                        Schedule a consultation with our experienced doctors. Fill out the form
                        below and we will get back to you.
                    </p>
                </div>
                <div className={styles.form_container}>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.input_group}>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className={styles.input}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.input_group}>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className={styles.input}
                                required
                            />
                            <select className={styles.input} defaultValue="" required>
                                <option value="" disabled>
                                    Select Department
                                </option>
                                <option value="general">General Consultation</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="neurology">Neurology</option>
                                <option value="pediatrics">Pediatrics</option>
                            </select>
                        </div>
                        <textarea
                            placeholder="Message (Optional)"
                            rows={4}
                            className={styles.input}
                        ></textarea>
                        <button type="submit" className={styles.submit_btn}>
                            Schedule Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
