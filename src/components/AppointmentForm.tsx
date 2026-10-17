 "use client";

import { FormEvent, useMemo, useState } from "react";
import { CalendarDays, CheckCircle2, ClipboardCheck, PawPrint } from "lucide-react";
import { services } from "@/data/services";

type FormValues = {
  ownerName: string;
  email: string;
  petName: string;
  petType: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  ownerName: "",
  email: "",
  petName: "",
  petType: "",
  service: "",
  date: "",
  time: "",
  notes: ""
};

function getTodayLocal() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - offset * 60_000).toISOString().slice(0, 10);
}

export default function AppointmentForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const minDate = useMemo(() => getTodayLocal(), []);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSubmitted(false);
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!values.ownerName.trim()) next.ownerName = "Escribe el nombre del propietario.";
    if (!values.email.trim()) {
      next.email = "Escribe un correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Introduce un correo electrónico válido.";
    }
    if (!values.petName.trim()) next.petName = "Escribe el nombre de tu mascota.";
    if (!values.petType) next.petType = "Selecciona el tipo de mascota.";
    if (!values.service) next.service = "Selecciona un servicio.";
    if (!values.date) {
      next.date = "Selecciona una fecha preferida.";
    } else if (values.date < minDate) {
      next.date = "La fecha no puede ser anterior a hoy.";
    }
    if (!values.time) next.time = "Selecciona una hora preferida.";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = document.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
    }
  }

  const inputClass = "field-control";
  const selectedService = services.find((service) => service.name === values.service);

  return (
    <section id="citas" className="section-space bg-mint/60">
      <div className="container-page grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="pt-2">
          <span className="eyebrow"><CalendarDays size={15} /> Un primer paso</span>
          <h2 className="section-title">Hablemos de su bienestar.</h2>
          <p className="section-copy">
            Cuéntanos un poco sobre tu compañero y el servicio que necesitas. Puedes probar el formulario: esta versión es una demostración y no envía ni guarda datos.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-3 rounded-2xl border border-emerald-950/10 bg-white/80 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-forest"><PawPrint size={20} /></span>
              <div>
                <p className="font-bold text-ink">Cada mascota es única</p>
                <p className="mt-1 text-sm leading-6 text-muted">La información nos ayuda a entender mejor tu solicitud.</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl border border-emerald-950/10 bg-white/80 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800"><ClipboardCheck size={20} /></span>
              <div>
                <p className="font-bold text-ink">Sin reservas reales</p>
                <p className="mt-1 text-sm leading-6 text-muted">No se consulta disponibilidad ni se crea una cita verdadera.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-emerald-950/[0.08] bg-white p-5 shadow-soft sm:p-8">
          {submitted ? (
            <div role="status" aria-live="polite" className="py-8 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-forest">
                <CheckCircle2 size={34} />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold text-ink">¡Solicitud de demostración lista!</h3>
              <p className="mx-auto mt-3 max-w-md leading-7 text-muted">
                Gracias, {values.ownerName}. La solicitud para {values.petName} aparece como válida en esta simulación. No se ha reservado una cita real ni se han enviado tus datos.
              </p>
              <div className="mx-auto mt-6 max-w-sm rounded-2xl bg-cream p-4 text-left text-sm">
                <p><span className="font-bold">Servicio:</span> {values.service}</p>
                <p className="mt-2"><span className="font-bold">Preferencia:</span> {values.date} a las {values.time}</p>
                {selectedService && <p className="mt-2"><span className="font-bold">Precio ilustrativo:</span> {selectedService.price}</p>}
              </div>
              <button type="button" onClick={() => { setValues(initialValues); setErrors({}); setSubmitted(false); }} className="mt-7 rounded-full bg-forest px-6 py-3 font-bold text-white transition hover:bg-forest-dark">
                Hacer otra solicitud de prueba
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-forest">Solicitud de cita</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">Cuéntanos sobre tu mascota</h3>
                <p className="mt-2 text-sm text-muted">Los campos marcados son obligatorios.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="ownerName" className="field-label">Tu nombre *</label>
                    <input id="ownerName" name="ownerName" autoComplete="name" className={inputClass} value={values.ownerName} onChange={(e) => update("ownerName", e.target.value)} aria-invalid={Boolean(errors.ownerName)} aria-describedby={errors.ownerName ? "ownerName-error" : undefined} />
                    {errors.ownerName && <p id="ownerName-error" className="mt-1.5 text-sm text-red-700">{errors.ownerName}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="field-label">Correo electrónico *</label>
                    <input id="email" name="email" type="email" autoComplete="email" className={inputClass} value={values.email} onChange={(e) => update("email", e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
                    {errors.email && <p id="email-error" className="mt-1.5 text-sm text-red-700">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="petName" className="field-label">Nombre de la mascota *</label>
                    <input id="petName" name="petName" className={inputClass} value={values.petName} onChange={(e) => update("petName", e.target.value)} aria-invalid={Boolean(errors.petName)} aria-describedby={errors.petName ? "petName-error" : undefined} />
                    {errors.petName && <p id="petName-error" className="mt-1.5 text-sm text-red-700">{errors.petName}</p>}
                  </div>
                  <div>
                    <label htmlFor="petType" className="field-label">Tipo de mascota *</label>
                    <select id="petType" name="petType" className={inputClass} value={values.petType} onChange={(e) => update("petType", e.target.value)} aria-invalid={Boolean(errors.petType)} aria-describedby={errors.petType ? "petType-error" : undefined}>
                      <option value="">Selecciona una opción</option>
                      <option value="Perro">Perro</option>
                      <option value="Gato">Gato</option>
                      <option value="Ave">Ave</option>
                      <option value="Conejo">Conejo</option>
                      <option value="Otra">Otra</option>
                    </select>
                    {errors.petType && <p id="petType-error" className="mt-1.5 text-sm text-red-700">{errors.petType}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="field-label">Servicio que necesitas *</label>
                    <select id="service" name="service" className={inputClass} value={values.service} onChange={(e) => update("service", e.target.value)} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined}>
                      <option value="">Selecciona un servicio</option>
                      {services.map((service) => <option key={service.name} value={service.name}>{service.name} — {service.price}</option>)}
                    </select>
                    {errors.service && <p id="service-error" className="mt-1.5 text-sm text-red-700">{errors.service}</p>}
                  </div>
                  <div>
                    <label htmlFor="date" className="field-label">Fecha preferida *</label>
                    <input id="date" name="date" type="date" min={minDate} className={inputClass} value={values.date} onChange={(e) => update("date", e.target.value)} aria-invalid={Boolean(errors.date)} aria-describedby={errors.date ? "date-error" : undefined} />
                    {errors.date && <p id="date-error" className="mt-1.5 text-sm text-red-700">{errors.date}</p>}
                  </div>
                  <div>
                    <label htmlFor="time" className="field-label">Hora preferida *</label>
                    <select id="time" name="time" className={inputClass} value={values.time} onChange={(e) => update("time", e.target.value)} aria-invalid={Boolean(errors.time)} aria-describedby={errors.time ? "time-error" : undefined}>
                      <option value="">Selecciona una hora</option>
                      {["08:00", "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00"].map((time) => <option key={time} value={time}>{time}</option>)}
                    </select>
                    {errors.time && <p id="time-error" className="mt-1.5 text-sm text-red-700">{errors.time}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="notes" className="field-label">¿Algo más que debamos saber? <span className="font-normal text-muted">(opcional)</span></label>
                    <textarea id="notes" name="notes" rows={3} maxLength={400} className={`${inputClass} resize-y`} placeholder="Cuéntanos brevemente el motivo de tu consulta..." value={values.notes} onChange={(e) => update("notes", e.target.value)} />
                  </div>
                </div>
                <button type="submit" className="mt-6 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-forest px-6 py-4 font-bold text-white transition hover:bg-forest-dark">
                  Validar solicitud <CalendarDays className="ml-2" size={18} />
                </button>
                <p className="mt-3 text-center text-xs leading-5 text-muted">Demostración académica: no introduzcas información personal real.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
