import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import NotesSection from "../components/NotesSection";
import ProjectsSection from "../components/ProjectsSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <NotesSection />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}

export default Home;
