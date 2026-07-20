import { useState, useEffect } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/",
  },
  
];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-teal-600 text-white p-2 rounded-xl">
            <Stethoscope size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-teal-700">
              CarePlus
            </h2>

            <p className="text-xs text-gray-500">
              Medical Clinic
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-teal-600 font-semibold"
                      : "text-slate-700 hover:text-teal-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
        ))}
        </nav>

        {/* Button */}
        <button className="hidden md:block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full transition">
          Book Appointment
        </button>

        {/* Mobile Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">

          {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-4 border-b transition ${
                      isActive
                        ? "bg-teal-50 text-teal-600 font-semibold"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
        ))}

          <div className="p-5">
            <button className="w-full bg-teal-600 text-white py-3 rounded-full">
              Book Appointment
            </button>
          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;