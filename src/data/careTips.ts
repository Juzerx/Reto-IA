import type { LucideIcon } from "lucide-react";
import { Utensils, Footprints, ShieldCheck } from "lucide-react";

export const careTips: {
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: string;
}[] = [
  {
    category: "Alimentación",
    title: "Rutinas que hacen bien",
    description: "Ofrece alimento adecuado para su especie y etapa de vida, con agua limpia siempre disponible.",
    icon: Utensils,
    tone: "bg-amber-100 text-amber-800"
  },
  {
    category: "Actividad",
    title: "Movimiento todos los días",
    description: "Adapta el juego y la actividad a su edad, condición y energía. Cada mascota tiene su propio ritmo.",
    icon: Footprints,
    tone: "bg-emerald-100 text-emerald-800"
  },
  {
    category: "Prevención",
    title: "Los controles importan",
    description: "Consulta con un profesional sobre vacunas, antiparasitarios y revisiones apropiadas para tu mascota.",
    icon: ShieldCheck,
    tone: "bg-sky-100 text-sky-800"
  }
];
