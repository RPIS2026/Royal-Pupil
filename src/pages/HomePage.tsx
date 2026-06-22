import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Vision from '../components/Vision';
import Faculty from '../components/Faculty';
import Facilities from '../components/Facilities';
import Policies from '../components/Policies';
import Parents from '../components/Parents';
import AchievementsEvents from '../components/AchievementsEvents';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div className="bg-rp-cream">
      <Hero />
      <About />
      <Vision />
      <Faculty />
      <Facilities />
      <AchievementsEvents />
      <Policies />
      <Parents />
      <AdmissionsCTA />
      <Contact />
    </div>
  );
}
