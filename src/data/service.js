import {
  HeartPulse,
  Stethoscope,
  Brain,
  Baby,
  Smile,
  Microscope,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "General Checkup",
    description:
      "Routine health checkups to keep you healthy and detect diseases early.",
    icon: Stethoscope,
  },
  {
    id: 2,
    title: "Cardiology",
    description:
      "Expert diagnosis and treatment for heart-related diseases and conditions.",
    icon: HeartPulse,
  },
  {
    id: 3,
    title: "Neurology",
    description:
      "Advanced care for brain, spinal cord, and nervous system disorders.",
    icon: Brain,
  },
  {
    id: 4,
    title: "Pediatrics",
    description:
      "Special healthcare services designed for infants, children, and teenagers.",
    icon: Baby,
  },
  {
    id: 5,
    title: "Dental Care",
    description:
      "Comprehensive dental treatments for a brighter and healthier smile.",
    icon: Smile,
  },
  {
    id: 6,
    title: "Laboratory",
    description:
      "Accurate diagnostic testing with modern laboratory equipment.",
    icon: Microscope,
  },
];

export default services;