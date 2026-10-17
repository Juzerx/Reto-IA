import { ArrowDown, ArrowRight, Heart, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream">
      <div className="container-page grid min-h-[610px] items-center gap-12 py-16 lg:grid-cols-[1.03fr_0.97fr] lg:py-20">
        <div className="relative z-10">
          <span className="eyebrow"><Sparkles size={15} /> Cuidado cercano, siempre</span>
          <h1 className="mt-6 max-w-2xl text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[4.4rem]">
            Su mundo es pequeño. <span className="text-forest">Tu cuidado lo hace enorme.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Acompañamos cada etapa de la vida de tu mascota con atención veterinaria, prevención y mucho cariño.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#citas" className="inline-flex min-h-14 items-center justify-center rounded-full bg-forest px-7 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-forest-dark">
              Solicitar una cita <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#servicios" className="inline-flex min-h-14 items-center justify-center rounded-full border border-emerald-950/15 bg-white px-7 font-bold text-ink transition hover:bg-mint">
              Conocer servicios <ArrowDown className="ml-2" size={17} />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-muted">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={18} className="text-forest" /> Cuidado responsable</span>
            <span className="inline-flex items-center gap-2"><Heart size={18} className="text-forest" /> Trato con cariño</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -right-4 top-5 h-32 w-32 rounded-full bg-amber-100 blur-2xl" />
          <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-full bg-emerald-100 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#E6EEE4] p-3 shadow-soft">
            <div className="relative min-h-[390px] overflow-hidden rounded-[1.55rem] bg-gradient-to-br from-[#dfece0] via-[#f5ead9] to-[#d8e8dc] sm:min-h-[470px]">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85"
                alt="Perro golden retriever disfrutando de un momento al aire libre"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/45 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-ink">Bienestar en cada etapa</p>
                    <p className="mt-1 text-xs text-muted">Pequeños cuidados, grandes momentos.</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-forest"><Heart size={21} /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-5 top-10 hidden rounded-2xl bg-white p-4 shadow-soft sm:block">
            <p className="text-xs font-semibold text-muted">Nuestro propósito</p>
            <p className="mt-1 text-sm font-extrabold text-forest">Más salud, más juegos 🐾</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full border-[30px] border-emerald-900/[0.03]" />
    </section>
  );
}
