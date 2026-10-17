# Diseño y arquitectura — VetCare

**Versión:** 1.0

## 1. Experiencia visual
Landing page de una sola página, con navegación por anclas, fondo crema y blanco, verde como color principal, tarjetas redondeadas, tipografía de alto contraste y llamadas a la acción visibles.

## 2. Secciones
1. Header y navegación.
2. Hero.
3. Servicios.
4. Formulario de solicitud de cita.
5. Consejos de cuidado.
6. Contacto.
7. Footer.

## 3. Arquitectura
- Next.js App Router y TypeScript.
- Tailwind CSS para estilos.
- `src/app/page.tsx` compone las secciones.
- `src/components/` contiene los componentes de UI.
- `src/data/` mantiene los datos de servicios y consejos separados de su presentación.
- El formulario es un componente de cliente porque usa estado y eventos.
- Los demás componentes permanecen como componentes de servidor cuando es posible.

## 4. Decisiones
- **DA-01:** No se implementa backend; el alcance es un prototipo frontend.
- **DA-02:** Los componentes se separan por responsabilidad para facilitar mantenimiento.
- **DA-03:** Los datos estáticos se almacenan en archivos locales.
- **DA-04:** El formulario valida localmente y muestra una confirmación simulada.
- **DA-05:** El menú móvil tiene estado de apertura/cierre y los enlaces navegan por anclas.
- **DA-06:** Se incluyen etiquetas, mensajes de validación y estados de foco para mejorar accesibilidad.

## 5. Limitaciones
Los datos de contacto, precios y horarios son ilustrativos. Las imágenes usan URLs externas y requieren conexión a internet. La solicitud no se guarda ni se envía.
