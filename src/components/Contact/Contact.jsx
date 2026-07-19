import SectionTitle from "../Common/SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5">

        <SectionTitle
          center
          subtitle="Contact Us"
          title="Get In Touch"
          description="Have questions or need assistance? Our team is here to help you."
        />

        <div className="grid lg:grid-cols-2 gap-10 mt-14">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>

    </section>
  );
}

export default Contact;