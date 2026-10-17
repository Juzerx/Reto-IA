# VetCare — Taller SDD

Landing page interactiva para una clínica veterinaria ficticia, desarrollada con Next.js, TypeScript y Tailwind CSS como ejercicio de Spec-Driven Development.

> **Importante:** es un prototipo académico. Los precios, horarios y datos de contacto son ilustrativos. El formulario no crea reservas reales, no envía mensajes y no guarda datos. No introduzcas información personal real.

## Requisitos
- Node.js 20.9 o posterior (recomendado).
- npm.
- Conexión a internet para descargar dependencias y mostrar las imágenes externas.

## Ejecutar localmente
1. Descomprime el proyecto.
2. Abre una terminal en la carpeta `vetcare-sdd`.
3. Instala dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre `http://localhost:3000`.

## Comprobaciones
Ejecuta la compilación de producción:

```bash
npm run build
```

El script de lint incluido puede requerir ajuste según la versión de Next.js/ESLint instalada. Si `npm run lint` falla por configuración de herramienta, registra el error y ejecuta `npx eslint src` para comprobar los archivos.

## Estructura
- `src/app/`: página, layout y estilos globales.
- `src/components/`: componentes de la interfaz.
- `src/data/`: datos de servicios y consejos.
- `docs/spec.md`: especificación y criterios de aceptación.
- `docs/design.md`: decisiones de diseño y arquitectura.
- `docs/implementation.md`: prompts, decisiones, incidencias y evidencias.
- `docs/testing.md`: casos de prueba y trazabilidad.

## Flujo SDD sugerido
1. Revisar y congelar la versión inicial de la especificación.
2. Diseñar la arquitectura antes de generar componentes.
3. Implementar siguiendo `spec.md` y `design.md`.
4. Ejecutar los casos de `docs/testing.md`.
5. Corregir fallos y volver a ejecutar las pruebas.
6. Actualizar la documentación y adjuntar capturas reales.

## Limitaciones conocidas
- No hay backend ni persistencia.
- No se verifica la disponibilidad de citas.
- Los datos son ficticios.
- Las imágenes del hero dependen de un servicio externo.
