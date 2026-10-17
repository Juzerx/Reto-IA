import { Clock3, Mail, MapPin, PhoneCall } from "lucide-react";

const contactItems = [
  { icon: MapPin, label: "Ubicación de ejemplo", value: "Medellín, Antioquia (dato ilustrativo)" },
  { icon: PhoneCall, label: "Teléfono de ejemplo", value: "+57 300 000 0000" },
  { icon: Mail, label: "Correo de ejemplo", value: "hola@vetcare.example" },
  { icon: Clock3, label: "Horario ilustrativo", value: "Lun–Vie: 8:00 a. m. – 5:00 p. m." }
];

export default function Contact() {
  return (
    <section id="contacto" className="bg-white py-16">
      <div className="container-page grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <span className="eyebrow">Estamos para acompañarte</span>
          <h2 className="section-title">Cuidarles es un trabajo en equipo.</h2>
          <p className="section-copy">¿Tienes dudas sobre los servicios? En una clínica real, este espacio contendría los canales de contacto verificados.</p>
          <a href="#citas" className="mt-6 inline-flex rounded-full bg-forest px-6 py-3 font-bold text-white transition hover:bg-forest-dark">Ir al formulario</a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {contactItems.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-2xl border border-emerald-950/10 bg-cream p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-forest"><Icon size={20} /></span>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-muted">{label}</p>
              <p className="mt-2 font-bold leading-6 text-ink">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
