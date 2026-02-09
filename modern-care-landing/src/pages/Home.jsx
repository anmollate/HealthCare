
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Doctors } from '../components/Doctors';
import { Appointment } from '../components/Appointment';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Doctors />
            <Appointment />
            <Footer />
        </>
    );
}
