import Navbar from "../components/Navbar/Navbar";
import ContactHero from "./Contact/ContactHero";
import ContactInfo from "./Contact/ContactInfo";
import ContactForm from "./Contact/ContactForm";
import GoogleMap from "./Contact/GoogleMap";
import WorkingHours from "./Contact/WorkingHours";
import ContactFAQ from "./Contact/ContactFAQ";
import EmergencyCTA from "./Contact/EmergencyCTA";
import FadeIn from "../components/Common/Fadein";
function Contact() {
  return (
    <>
       <Navbar/> 
      <ContactHero />
      <section className="py-16 md:py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-5">

          <div className="grid lg:grid-cols-2 gap-14 items-start">

            <ContactInfo />

            <ContactForm />

          </div>

        </div>

      </section>
      <FadeIn>
      <GoogleMap />
      </FadeIn>
      <FadeIn>
      <WorkingHours/>
      </FadeIn>
      <FadeIn>
      <ContactFAQ/>
      </FadeIn>
      <FadeIn>
      <EmergencyCTA/>
      </FadeIn>
    </>
  );
}

export default Contact;