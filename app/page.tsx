import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FulfillingLife from "./components/FulfillingLife";
import Specialties from "./components/Specialties";
import NotAlone from "./components/NotAlone";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FulfillingLife />
      <Specialties />
      <NotAlone />
    </main>
  );
}
