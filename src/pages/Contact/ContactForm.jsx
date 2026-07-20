import Button from "../../components/Common/Button";

function ContactForm() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold">
        Send Us a Message
      </h2>

      <p className="text-slate-600 mt-2">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form className="mt-8 space-y-5">

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-teal-500"
          />

        </div>

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-teal-500"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-teal-500"
        />

        <textarea
          rows="6"
          placeholder="Write your message..."
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-teal-500"
        />

        <Button>
          Send Message
        </Button>

      </form>

    </div>
  );
}

export default ContactForm;