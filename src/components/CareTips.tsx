import { ArrowUpRight } from "lucide-react";
import { careTips } from "@/data/careTips";

export default function CareTips() {
  return (
    <section id="consejos" className="section-space bg-cream">
      <div className="container-page">
        <div className="text-center">
          <span className="eyebrow">Pequeños hábitos, grandes cambios</span>
          <h2 className="section-title">Ideas para cuidarles cada día.</h2>
          <p className="section-copy mx-auto">
            Consejos generales para acompañar su bienestar. Para recomendaciones específicas, consulta con un profesional veterinario.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {careTips.map((tip) => {
            const Icon = tip.icon;
            return (
              <article key={tip.title} className="rounded-3xl border border-emerald-950/[0.08] bg-white p-6 transition hover:shadow-soft">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tip.tone}`}><Icon size={23} /></div>
                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.12em] text-forest">{tip.category}</p>
                <h3 className="mt-2 text-xl font-extrabold text-ink">{tip.title}</h3>
                <p className="mt-3 leading-7 text-muted">{tip.description}</p>
                <a href="#contacto" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-forest-dark">
                  Más información <ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs text-muted">Contenido educativo general; no sustituye una valoración veterinaria.</p>
      </div>
    </section>
  );
}
