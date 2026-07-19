import { ArrowRight } from "lucide-react";

function Button({
  children,
  variant = "primary",
  icon = false,
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-teal-600 text-white hover:bg-teal-700 hover:scale-105 shadow-lg",
    secondary:
      "border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white",
    white:
      "bg-white text-teal-700 hover:bg-gray-100 shadow-lg",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      {children}
      {icon && <ArrowRight size={18} />}
    </button>
  );
}

export default Button;