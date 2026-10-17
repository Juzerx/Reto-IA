import { PawPrint } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#123D2D] py-8 text-white">
      <div className="container-page flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><PawPrint size={21} /></span>
          <span>
            <span className="block font-extrabold">VetCare</span>
            <span className="block text-xs text-white/65">Cuidamos juntos.</span>
          </span>
        </a>
        <p className="max-w-xl text-xs leading-5 text-white/65">
          Proyecto académico de demostración SDD. Datos, precios, horarios y contacto ilustrativos. No se gestionan citas reales.
        </p>
        <a href="#inicio" className="text-sm font-bold text-white hover:text-emerald-200">Volver arriba ↑</a>
      </div>
      <div className="container-page mt-6 border-t border-white/15 pt-5 text-xs text-white/55">
        © {new Date().getFullYear()} VetCare — Prototipo académico.
      </div>
    </footer>
  );
}
