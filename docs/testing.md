# Plan de pruebas y trazabilidad — VetCare

**Estado inicial:** casos definidos; ejecutar las pruebas y registrar el resultado antes de entregar.

## 1. Casos de prueba

| ID | Requisito / criterio | Pasos | Resultado esperado | Estado |
|---|---|---|---|---|
| P-01 | RF-01 / CA-01 | Abrir la página principal | Se muestra el hero y el botón de solicitud | Pendiente |
| P-02 | RF-02 / CA-07 | Pulsar enlaces de navegación | La página desplaza a la sección correspondiente | Pendiente |
| P-03 | RF-03 / CA-02 | Revisar la sección de servicios | Aparecen cuatro tarjetas con descripción y precio ilustrativo | Pendiente |
| P-04 | RF-04 / CA-03 | Completar los campos del formulario | Los controles permiten introducir y seleccionar valores | Pendiente |
| P-05 | RF-05 / CA-04 | Enviar formulario vacío | Aparecen mensajes de validación y no se muestra confirmación | Pendiente |
| P-06 | RF-05 / CA-04 | Introducir un correo inválido y enviar | Se muestra error de correo | Pendiente |
| P-07 | RF-05 | Seleccionar una fecha anterior a hoy, si el navegador permite introducirla | Se muestra error y no se acepta la solicitud | Pendiente |
| P-08 | RF-06 / CA-05 | Completar todos los campos correctamente y enviar | Aparece confirmación que aclara que es una simulación | Pendiente |
| P-09 | RF-06 | En la confirmación, seleccionar nueva solicitud | El formulario vuelve a aparecer vacío | Pendiente |
| P-10 | RF-07 / CA-06 | Revisar los consejos | Aparecen tres tarjetas de consejos | Pendiente |
| P-11 | RF-08 | Revisar contacto y footer | Los datos de ejemplo se identifican como ilustrativos | Pendiente |
| P-12 | RF-09 / CA-08 | Probar anchos de 375 px, 768 px y escritorio | No hay desbordamiento horizontal y el contenido es legible | Pendiente |
| P-13 | RNF-03 / CA-07 | Navegar con Tab y activar enlaces/botones | El foco es visible y los controles son operables | Pendiente |
| P-14 | CA-09 | Ejecutar `npm run build` | La compilación termina correctamente | Pendiente |

## 2. Criterio de aprobación
La entrega se considera verificada cuando todos los casos se han ejecutado, cada resultado se ha registrado y los defectos críticos están corregidos. No marcar una prueba como aprobada sin comprobarla.

## 3. Registro de ejecución
Para cada prueba, completar:
- Fecha y entorno (navegador, sistema operativo y tamaño de pantalla).
- Resultado real.
- Estado: Aprobada / Fallida / Bloqueada.
- Evidencia (captura, mensaje de consola o salida de terminal).
- Incidencia y corrección, si aplica.
