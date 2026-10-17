# Especificación de requisitos — VetCare

**Versión:** 1.0  
**Estado:** Base de implementación  
**Metodología:** Spec-Driven Development (SDD)

## 1. Descripción general
VetCare es una landing page interactiva para una clínica veterinaria ficticia. Presenta servicios, consejos de cuidado y un formulario que simula una solicitud de cita.

## 2. Problema y objetivo
Los propietarios necesitan encontrar información básica sobre servicios veterinarios y una manera sencilla de expresar su interés en una consulta. VetCare reúne esta información en una interfaz clara y responsiva.

## 3. Público objetivo
Propietarios de perros, gatos y otras mascotas.

## 4. Requisitos funcionales
- **RF-01:** Mostrar una presentación principal y una llamada a la acción.
- **RF-02:** Permitir navegar entre las secciones de la página.
- **RF-03:** Mostrar servicios con descripción, duración y precios ilustrativos.
- **RF-04:** Recoger nombre del propietario, correo, nombre y tipo de mascota, servicio, fecha y hora preferidas; permitir notas opcionales.
- **RF-05:** Validar campos obligatorios, correo electrónico y fecha no anterior al día actual.
- **RF-06:** Mostrar una confirmación cuando la solicitud sea válida, aclarando que es una simulación.
- **RF-07:** Mostrar consejos generales de cuidado animal.
- **RF-08:** Mostrar contacto y horarios claramente identificados como datos ficticios.
- **RF-09:** Adaptar la interfaz a móviles, tabletas y computadores.
- **RF-10:** Hacer funcionales los botones, enlaces y controles de navegación.

## 5. Requisitos no funcionales
- **RNF-01:** Interfaz clara y consistente.
- **RNF-02:** Componentes reutilizables y responsabilidades separadas.
- **RNF-03:** Etiquetas de formulario, foco visible, mensajes de error y navegación por teclado.
- **RNF-04:** Uso eficiente de imágenes y componentes.
- **RNF-05:** Compatibilidad con navegadores modernos.

## 6. Restricciones
- Next.js con App Router.
- TypeScript.
- Tailwind CSS.
- Sin backend ni persistencia de datos.
- No se envían correos ni se comprueba disponibilidad real.
- Los datos de contacto, horarios y precios son ilustrativos.

## 7. Fuera de alcance
Autenticación, base de datos, pagos, notificaciones, reservas reales e historial clínico.

## 8. Criterios de aceptación
- **CA-01:** El usuario encuentra la presentación y puede ir al formulario.
- **CA-02:** Los servicios se muestran como tarjetas.
- **CA-03:** Los campos solicitados pueden completarse y los selectores funcionan.
- **CA-04:** Los campos obligatorios y el formato del correo se validan.
- **CA-05:** Una solicitud válida muestra una confirmación sin afirmar que se reservó una cita real.
- **CA-06:** Los consejos se muestran en tarjetas legibles.
- **CA-07:** Navegación y controles se pueden utilizar con ratón y teclado.
- **CA-08:** La página se adapta a pantallas pequeñas y grandes.
- **CA-09:** El proyecto puede ejecutarse localmente siguiendo el README.
- **CA-10:** Cada requisito está relacionado con una prueba documentada.

## 9. Supuestos
Los servicios y la información de contacto son ejemplos de un prototipo académico. El formulario no debe usarse para enviar datos personales reales.

## 10. Trazabilidad
La relación requisito-prueba se registra en `testing.md`. Los cambios deben anotarse en `implementation.md`.
