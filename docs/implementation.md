# Registro de implementación y uso de IA — VetCare

Este documento debe actualizarse durante el trabajo. No se debe afirmar que una prueba se ejecutó si no se ha ejecutado.

## 1. Herramientas
- ChatGPT: apoyo en especificación, arquitectura, generación y revisión de código.
- Next.js, React, TypeScript y Tailwind CSS.
- Node.js y npm para ejecutar el proyecto localmente.

## 2. Resumen de implementación
La aplicación se organizó en componentes reutilizables. Los servicios y consejos se encuentran en archivos de datos. El formulario valida los campos localmente y muestra una confirmación de demostración.

## 3. Registro de prompts
| Fecha | Fase | Prompt o instrucción | Resultado | Decisión |
|---|---|---|---|---|
| Completar | Especificación | Revisar requisitos, ambigüedades y criterios de aceptación | Completar después de ejecutar el prompt | Completar |
| Completar | Diseño | Proponer arquitectura de componentes y estructura Next.js | Completar después de ejecutar el prompt | Completar |
| Completar | Implementación | Generar la aplicación según `spec.md` y `design.md` | Proyecto inicial generado con asistencia de IA | Revisar y probar localmente |
| Completar | Corrección | Analizar errores reales de terminal/navegador y proponer un parche mínimo | Completar al encontrar errores | Completar |

## 4. Decisiones y cambios
| ID | Decisión/cambio | Motivo | Fecha |
|---|---|---|---|
| DA-01 | Mantener el proyecto sin backend | Alcance académico de landing page interactiva | Completar |
| DA-02 | Usar componentes separados | Reutilización y mantenibilidad | Completar |

## 5. Incidencias
| Incidencia | Evidencia | Solución | Estado |
|---|---|---|---|
| Pendiente de pruebas | Añadir mensaje de error, captura o salida de terminal si ocurre | Registrar la corrección | Pendiente |

## 6. Evidencias
Añadir capturas de:
- Página principal en escritorio.
- Página en vista móvil.
- Errores de validación del formulario.
- Confirmación de solicitud simulada.
- Resultado de `npm run build`.
- Cualquier corrección realizada con asistencia de IA.
