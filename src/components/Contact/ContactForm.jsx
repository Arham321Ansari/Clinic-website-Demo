import Button from "../Common/Button";

function ContactForm() {
  return (
    <form className="bg-white rounded-3xl shadow-xl p-8">

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Full Name"
          className="border rounded-xl p-4 outline-none focus:border-teal-600"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border rounded-xl p-4 outline-none focus:border-teal-600"
        />

      </div>

      <input
        type="tel"
        placeholder="Phone Number"
        className="border rounded-xl p-4 mt-5 w-full outline-none focus:border-teal-600"
      />

      <textarea
        rows="6"
        placeholder="Your Message"
        className="border rounded-xl p-4 mt-5 w-full outline-none focus:border-teal-600"
      ></textarea>

      <Button className="mt-6">
        Send Message
      </Button>

    </form>
  );
}

export default ContactForm;