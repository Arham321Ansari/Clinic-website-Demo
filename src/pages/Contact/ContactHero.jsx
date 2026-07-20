import Button from "../../components/Common/Button";

function ContactHero() {
  return (
    <section
      className="relative h-[450px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-5 text-center text-white">

        <h1 className="text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>

        <p className="mt-6 text-lg text-gray-200 leading-8">
          Whether you have questions, need medical assistance,
          or want to book an appointment,
          our team is always ready to help.
        </p>

        <Button className="mt-8">
          Book Appointment
        </Button>

      </div>

    </section>
  );
}

export default ContactHero;