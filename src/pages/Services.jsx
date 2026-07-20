import ServicesHero from "./Services/ServicesHero";
import ServicesGrid from "./Services/ServicesGrid";
import Navbar from "../components/Navbar/Navbar";
import ServiceProcess from "./Services/ServiceProcess";
import WhyChooseServices from "./Services/WhyChooseServices";
import ServicesCTA from "./Services/ServicesCTA";
import FadeIn from "../components/Common/Fadein";
function Services() {
  return (
    <>
        <Navbar/>
      <ServicesHero />
      <FadeIn>
      <ServicesGrid />
      </FadeIn>
      <FadeIn>
      <ServiceProcess/>
      </FadeIn>
      <FadeIn>
      <WhyChooseServices/>
      </FadeIn>
      <FadeIn>
      <ServicesCTA/>
      </FadeIn>
    </>
  );
}

export default Services;