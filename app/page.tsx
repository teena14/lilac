import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FulfillingLife from "./components/FulfillingLife";
import Specialties from "./components/Specialties";
import NotAlone from "./components/NotAlone";
import ImLilac from "./components/ImLilac";
import FAQ from './components/FAQ';
import ProfessionalBackground from './components/ProfessionalBackground';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import OfficeSection from './components/OfficeSection';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FulfillingLife />
      <Specialties />
      <NotAlone />
      <ImLilac />
      <OfficeSection />
      <FAQ />
      <ProfessionalBackground />
      <GetStarted />
      <Footer />
    </main>
  );
}
