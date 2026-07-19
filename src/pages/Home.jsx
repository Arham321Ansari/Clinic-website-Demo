import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Statistics from "../components/Statistics/Statistics";
import Doctors from "../components/Doctors/Doctors";
import AppointmentCTA from "../components/AppointmentCTA/AppointmentCTA";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Statistics/>
      <Doctors/>
      <AppointmentCTA/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;