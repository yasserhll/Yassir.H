import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="line-accent" />
      <Expertise />
      <div className="line-accent" />
      <Experience />
      <div className="line-accent" />
      <Projects />
      <div className="line-accent" />
      <Education />
      <div className="line-accent" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
