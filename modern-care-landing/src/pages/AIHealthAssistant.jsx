
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import styles from './AIHealthAssistant.module.css';

const symptomsList = [
    'Headache',
    'Fever',
    'Respiratory Problems',
    'Cough',
    'Cold / Flu',
    'Nausea / Vomiting',
    'Stomach Pain',
    'Joint Pain',
    'Fatigue / Weakness',
    'Skin Rash / Allergy',
    'Eye Irritation',
    'General / Other'
];

export function AIHealthAssistant() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Symptoms submitted for analysis! In a real app, this would process your data.");
    };

    return (
        <>
            <Navbar />
            <div className={styles.page_container}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>AI Health Assistant</h1>
                    <p className={styles.subheading}>
                        Select your symptoms from the list below or describe them in detail.
                        Our AI will analyze your inputs and provide preliminary guidance.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>

                        <div className={styles.section_title}>Common Symptoms</div>
                        <div className={styles.symptoms_grid}>
                            {symptomsList.map((symptom) => (
                                <label key={symptom} className={styles.checkbox_label}>
                                    <input type="checkbox" className={styles.checkbox_input} name="symptoms" value={symptom} />
                                    <span>{symptom}</span>
                                </label>
                            ))}
                        </div>

                        <div className={styles.textarea_group}>
                            <label htmlFor="description" className={styles.textarea_label}>
                                Detailed Description / Other Symptoms
                            </label>
                            <textarea
                                id="description"
                                className={styles.textarea}
                                placeholder="Describe your symptoms in detail here... e.g., 'I have had a mild headache since yesterday morning and feel slightly dizzy when standing up.'"
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submit_btn}>
                            Analyze Symptoms
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
