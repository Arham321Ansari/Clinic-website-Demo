import { useState } from "react";
import { ChevronDown } from "lucide-react";

function ContactFAQ() {
  const faqs = [
    {
      question: "Do I need an appointment before visiting?",
      answer:
        "Appointments are recommended to reduce waiting time, but walk-in patients are also welcome.",
    },
    {
      question: "Do you accept health insurance?",
      answer:
        "Yes. We work with several insurance providers. Please contact our reception to confirm your coverage.",
    },
    {
      question: "Can I book appointments online?",
      answer:
        "Yes. Our online appointment booking system allows you to schedule consultations easily.",
    },
    {
      question: "Do you provide emergency medical care?",
      answer:
        "Yes. Emergency medical assistance is available 24 hours a day.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-5">

        <div className="text-center">

          <span className="text-teal-600 uppercase tracking-widest font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Find answers to the questions patients ask us most often.
          </p>

        </div>

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow-sm"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50"
              >

                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    active === index
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {active === index && (

                <div className="px-6 pb-6 text-slate-600 leading-7">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ContactFAQ;