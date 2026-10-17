import { ArrowUpRight, Clock3 } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="servicios" className="section-space bg-white">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Lo que hacemos</span>
            <h2 className="section-title max-w-2xl">Todo empieza con cuidarles bien.</h2>
          </div>
          <p className="section-copy mt-0 max-w-md text-base">
            Servicios pensados para acompañar su bienestar. Los precios de esta demostración son ilustrativos.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.name} className="group flex min-h-[300px] flex-col rounded-3xl border border-emerald-950/[0.08] bg-cream p-6 transition duration-200 hover:-translate-y-1 hover:shadow-soft">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.tone}`}>
                  <Icon size={23} aria-hidden="true" />
                </div>
                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.12em] text-muted">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-ink">{service.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{service.description}</p>
                <div className="mt-5 flex items-end justify-between gap-2 border-t border-emerald-950/10 pt-4">
                  <div>
                    <p className="text-xs text-muted">Precio ilustrativo</p>
                    <p className="mt-1 font-extrabold text-forest">{service.price}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted"><Clock3 size={13} /> {service.duration}</p>
                  </div>
                  <a href="#citas" aria-label={`Solicitar cita para ${service.name}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-forest transition group-hover:bg-forest group-hover:text-white">
                    <ArrowUpRight size={19} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
