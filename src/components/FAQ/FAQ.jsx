import faqs from "../../data/faqs";
import SectionTitle from "../Common/SectionTitle";
import FAQItem from "./FAQItem";

function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">

      <div className="max-w-4xl mx-auto px-5">

        <SectionTitle
          center
          subtitle="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about our clinic and services."
        />

        <div className="space-y-4 mt-12">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>

      </div>

    </section>
  );
}

export default FAQ;