# Documentación del Proyecto gymApp - Integración y Desarrollo con IA

## 1. Metodología de Trabajo: Modo Ask / Plan
Para el desarrollo de la aplicación **gymApp** (construida con React Native y Expo SDK 58), se utilizó una metodología interactiva basada en el patrón **Ask / Plan (Recomendado)**:

* **Fase Plan (Planificación):** Antes de generar código definitivo, se definió una arquitectura sólida que desglosó la aplicación en 4 navegaciones principales, definió las dependencias nativas a instalar (`expo-calendar`, `expo-sensors`, React Navigation) y estableció el flujo de datos.
* **Fase Ask / Refinamiento (Desarrollo Guiado):** Se realizaron consultas iterativas para tomar decisiones clave como:
  * La separación modular de componentes (un archivo por pantalla en `src/screens/` en lugar de una arquitectura monolítica en `App.js`).
  * La definición del sistema de diseño (adopción del modo oscuro *"Fitness Pro"* con acentos en naranja neón `#FF5722`).
  * La resolución proactiva de advertencias y errores de compatibilidad con el SDK 58 (migración a `expo-calendar/legacy`).

---

## 2. Plan de Trabajo Documentado

El proyecto se dividió en las siguientes 5 fases ejecutadas de forma progresiva:

### Fase 1: Inicialización y Arquitectura Base
- **Comando base:** `npx create-expo-app gymApp --template blank`
- **Configuración de React Navigation:** Implementación del contenedor principal y un `Tab.Navigator` inferior de 4 pestañas:
  1. `EJERCICIOS` (Vista de acordeones por grupos musculares y lista de ejercicios).
  2. `TAREAS` (Lista de ejercicios guardados para ejecución).
  3. `AGENDA` (Programación de sesiones de entrenamiento con notificaciones nativas).
  4. `PERFIL` (Métricas de usuario, conteo de calorías y podómetro).

### Fase 2: Modularización del Código
- Creación de la estructura de carpetas profesional:
  ```text
  gymApp/
  ├── App.js
  ├── IA.md
  └── src/
      └── screens/
          ├── EjerciciosScreen.js
          ├── TareasScreen.js
          ├── AgendaScreen.js
          └── PerfilScreen.js
  ```
- Separación de la lógica visual y de estado en cada módulo correspondiente para garantizar alta mantenibilidad y escalabilidad.

### Fase 3: Integración de APIs Nativas de Expo (SDK 58)
- **`expo-calendar`:** 
  - Gestión de permisos en el dispositivo.
  - Creación automática de un calendario propio para la app (`gymApp Entrenamientos`).
  - Programación de eventos con alarma previa (60 minutos antes).
  - *Corrección de Compatibilidad:* Ajuste de importación a `expo-calendar/legacy` para evitar deprecaciones del SDK 58.
- **`expo-sensors` (Pedometer):** Preparación de la UI en la pantalla de Perfil para la lectura en tiempo real de pasos y calorías.

### Fase 4: Sistema de Diseño e Identidad Visual (Dark Mode "Fitness Pro")
- Selección de paleta de colores para transmitir energía, modernidad y dinamismo:
  - **Fondo:** `#121212` / `#181A20`
  - **Tarjetas / Acordeones:** `#1E222B`
  - **Color de Acento:** `#FF5722` (Naranja Neón)
  - **Textos:** `#FFFFFF` y `#9CA3AF`
- Configuración de estilos en `Tab.Navigator` para unificar la barra superior e inferior con el tema oscuro.

### Fase 5: Identidad de Marca (Icono y Splash Screen)
- **Icono (`assets/icon.png`):** Logotipo con mancuerna cruzada y flecha de progreso en neón naranja (1024x1024 px).
- **Pantalla de Inicio (`assets/splash.png`):** Pantalla de carga integrada en modo oscuro con isotipo y tipografía de la app (2048x2048 px).
- Configuración correspondiente en `app.json`.

---

## 3. Registro de Prompts (Prompt History)

A continuación se detalla la secuencia de prompts utilizados para interactuar con la IA y guiar el proyecto:

### Prompt 1: Requerimientos y Definición del Plan Inicial
> *"Crea solamente un plan para hacer una app con expo go y react utilizando el SDK58. La app va a tratar de hacer ejercicio el cual la llamaremos gymApp, en el cual va a contener 4 navegaciones principales: 1. EJERCICIOS... 2. TAREAS... 3. AGENDA (api expo-calendar)... 4. PERFIL (api expo-sensors/Pedometer)... Ya cree una app base con el comando: npx create-expo-app gymApp --template blank"*
- **Resultado:** La IA desglosó el plan de trabajo estructurado en 4 fases de implementación y validación.

### Prompt 2: Primer Avance y Petición de Funcionalidad Inicial
> *"Ahora que tenemos un plan vamos a empezar haciendo un pequeño avance a este proyecto, haciendo las 4 navegaciones y que tenga una vista sobre lo que te dije que debe tener cada navegacion. Y tambien vamos a hacerle una funcionalidad para agregarle valor al proyecto a una navegacion, podria hacer integrar la parte de AGENDA con el calendario"*
- **Resultado:** Se instalaron las dependencias y se generó el código base con las 4 pestañas operativas y la integración nativa de `expo-calendar`.

### Prompt 3: Consulta sobre Arquitectura
> *"una pregunta, es mejor tener todas las pestañas en el mismo app.js o crear un archivo para cada una?"*
- **Resultado:** Evaluación del enfoque monolítico vs modular. Se recomendó e implementó la separación en archivos dentro de `src/screens/`.

### Prompt 4: Modularización Estructurada
> *"si"*
- **Resultado:** Generación de los archivos `EjerciciosScreen.js`, `TareasScreen.js`, `AgendaScreen.js`, `PerfilScreen.js` y el `App.js` principal actualizado.

### Prompt 5: Rediseño de Interfaz / UX
> *"Me recomiendas cambiar el color de fondo y de la navegacion, botones ,etc. Para que se vea una app mas de un gym"*
- **Resultado:** Definición de opciones de color y selección del **Modo Oscuro "Fitness Pro"** con acento Naranja Neón.

### Prompt 6: Confirmación del Tema
> *"me gusta la opcion 1"*
- **Resultado:** Refactorización completa de los estilos en todos los componentes y en la barra de navegación para aplicar la nueva paleta.

### Prompt 7: Identidad de Marca (Icono y Splash)
> *"Ahora vamos a cambiar el icono y el splash screen de la app. Genera una imagen ideal sobre la app para cambiar el icono y el splash screen"*
- **Resultado:** Propuesta conceptual y configuración técnica del archivo `app.json`.

### Prompts 8 y 9: Generación de Assets de Imagen
> *"Dame la imagen del icono de tamaño 1024x1024 px"*
> *"ahora dame la siguiente imagen para el splash screen de tamaño 2048x2048 px"*
- **Resultado:** Generación de `icon.png` (1024x1024 px) y `splash.png` (2048x2048 px) respetando la línea gráfica.

### Prompt 10: Depuración y Resolución de Errores (Expo SDK 58)
> *"Cuando abrí la app en Expo Go me mandó este error: [Captura de pantalla mostrando deprecación de requestCalendarPermissionsAsync en expo-calendar]"*
- **Resultado:** Diagnóstico de deprecación en la API de calendario en SDK 58 y actualización de `AgendaScreen.js` importando desde `expo-calendar/legacy`.

---

## 4. Registro de Solución de Errores (Troubleshooting Log)

| Problema / Error | Causa Raíz | Solución Aplicada |
| :--- | :--- | :--- |
| `Uncaught (in promise): "Error: Method requestCalendarPermissionsAsync imported from 'expo-calendar' is deprecated."` | Cambio en el SDK 58 de Expo donde los métodos antiguos fueron delegados al módulo de compatibilidad. | Cambiar la sentencia de importación en `AgendaScreen.js` a `import * as Calendar from 'expo-calendar/legacy';`. |

---

## 5. Próximos Pasos (Backlog)
1. **Pantalla de Detalle de Ejercicio:** Agregar modal/stack screen con video instructivo y botón para añadir a **TAREAS**.
2. **Cronómetro en TAREAS:** Desarrollar el contador de tiempo interactivo para registrar el fin de la rutina y cálculo de calorías quemadas.
3. **Podómetro en PERFIL:** Vincular `Pedometer` de `expo-sensors` con la interfaz para actualizar los pasos en vivo.