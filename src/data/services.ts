import type { LucideIcon } from "lucide-react";
import { Stethoscope, Syringe, HeartPulse, Scissors } from "lucide-react";

export type Service = {
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: LucideIcon;
  tone: string;
};

export const services: Service[] = [
  {
    name: "Consulta general",
    description: "Una revisión cercana para entender cómo se siente tu compañero y resolver tus dudas.",
    price: "$65.000",
    duration: "30–40 min",
    icon: Stethoscope,
    tone: "bg-emerald-100 text-emerald-800"
  },
  {
    name: "Vacunación",
    description: "Orientación para mantener al día el esquema de vacunación de tu mascota.",
    price: "Desde $45.000",
    duration: "20 min",
    icon: Syringe,
    tone: "bg-amber-100 text-amber-800"
  },
  {
    name: "Control preventivo",
    description: "Seguimiento de hábitos, peso y señales importantes para cuidar su bienestar.",
    price: "$55.000",
    duration: "30 min",
    icon: HeartPulse,
    tone: "bg-rose-100 text-rose-800"
  },
  {
    name: "Higiene y cuidado",
    description: "Recomendaciones de higiene y cuidado básico adaptadas a cada mascota.",
    price: "Desde $40.000",
    duration: "Según servicio",
    icon: Scissors,
    tone: "bg-sky-100 text-sky-800"
  }
];
