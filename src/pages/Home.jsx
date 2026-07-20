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
import FadeIn from "../components/Common/Fadein";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FadeIn>
        <Services />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <WhyChoose />
      </FadeIn>
      <FadeIn>
        <Statistics/>
      </FadeIn>
      <FadeIn>
        <Doctors/>
      </FadeIn>
      <FadeIn>
        <AppointmentCTA/>
      </FadeIn> 
      <FadeIn>
        <FAQ/>
      </FadeIn>
      <FadeIn>
        <Contact/>
      </FadeIn>
      <FadeIn>
        <Footer/>
      </FadeIn>
    </>
  );
}

export default Home;