import EjercicioPorTiempo from '../../models/EjercicioPorTiempo';
import EjercicioPesoCorporal from '../../models/EjercicioPesoCorporal';

const core = [
  new EjercicioPorTiempo({ 
    id: 'cor-01', 
    nombre: 'Plancha', 
    zona: 'Core', 
    segundos: 45, 
    sets: 3, 
    descanso: 30,
    videoUrl: 'https://youtube.com/shorts/3AM7L2k7BEw', 
    descripcion: 'Ejercicio isométrico fundamental para el core. Apoya antebrazos y puntas de los pies en el suelo, manteniendo el cuerpo en línea recta desde la cabeza hasta los talones. Contrae abdomen y glúteos, evita que la cadera se hunda o se eleve, y respira de forma constante. Trabaja recto abdominal, transverso, oblicuos y estabilizadores lumbares. Ideal para mejorar la estabilidad y prevenir dolores de espalda.',
  }),

  new EjercicioPorTiempo({ 
    id: 'cor-02', 
    nombre: 'Plancha lateral', 
    zona: 'Core', 
    segundos: 30, 
    sets: 3, 
    descanso: 30, 
    nivel: 'Intermedio',
    videoUrl: 'https://youtube.com/shorts/fNsxKTKfMNI', 
    descripcion:'Variante lateral de la plancha que enfatiza los oblicuos y la estabilidad del tronco. Apóyate sobre un antebrazo y el canto del pie, con el cuerpo alineado y la cadera elevada. Mantén el hombro sobre el codo y evita rotar el torso. Trabaja oblicuos, cuadrado lumbar y glúteo medio. Realiza el mismo tiempo por cada lado. Si resulta difícil, apoya la rodilla de la pierna inferior.',
  }),

  new EjercicioPorTiempo({ 
    id: 'cor-03', 
    nombre: 'L-Sit', 
    zona: 'Core', 
    segundos: 30, 
    sets: 3, 
    descanso: 30, 
    equipo:'Barra Alta',
    nivel: 'Intermedio',
    videoUrl: 'https://youtube.com/shorts/Y_AsV6xSKiA', 
    descripcion:'Ejercicio isométrico avanzado de core. Colgado de la barra alta, eleva las piernas rectas hasta formar una "L" (cadera y rodillas a 90°), manteniendo el torso firme y sin balanceo. Contrae abdomen, flexores de cadera y dorsales para sostener la posición. Trabaja recto abdominal, transverso, flexores de cadera y agarre. Si cuesta, comienza con rodillas flexionadas (tuck L-sit).',
  }),

  new EjercicioPesoCorporal({ 
    id: 'cor-04', 
    nombre: 'Abdominales crunch', 
    zona: 'Core', 
    repeticiones: 15,
    nivel:"Principiante",
    videoUrl: 'https://youtube.com/shorts/BzYrN4o5X5o',
    descripcion:'Ejercicio clásico para el recto abdominal. Túmbate boca arriba con las rodillas flexionadas y los pies apoyados. Coloca las manos suavemente detrás de la cabeza o cruzadas sobre el pecho, sin tirar del cuello. Eleva la parte superior del torso contrayendo el abdomen, exhala al subir y baja de forma controlada sin relajar del todo. Evita usar impulso con brazos o cuello. Enfócate en la calidad de la contracción más que en la velocidad.',
  }),

  new EjercicioPorTiempo({ 
    id: 'cor-05', 
    nombre: 'Superman', 
    zona: 'Core', 
    segundos: 30, 
    sets: 3, 
    descanso: 30, 
    nivel: 'Principiante',
    videoUrl: 'https://youtube.com/shorts/nuKDHrBlpFs', 
    descripcion: 'Ejercicio para fortalecer la cadena posterior y los erectores lumbares. Túmbate boca abajo con brazos y piernas extendidos. Eleva simultáneamente brazos, pecho y piernas del suelo contrayendo glúteos y espalda baja, mantén un instante arriba y baja de forma controlada. Evita hiperextender el cuello (mirada al suelo) y no arquear en exceso la lumbar. Fortalece espalda baja, glúteos y mejora la postura.',
  }),


  new EjercicioPesoCorporal({
    id: 'cor-06', 
    nombre: 'Elevacion de Pierna(desde suelo)', 
    zona: 'Core', 
    repeticiones: 10,
    nivel:"Principiante",
    videoUrl: 'https://youtube.com/shorts/3QbBCxJGULg',
    descripcion: 'Ejercicio para el abdomen inferior. Túmbate boca arriba con las piernas extendidas y las manos a los costados o bajo la cadera. Eleva las piernas rectas hasta unos 90° manteniendo la lumbar pegada al suelo, y bájalas lentamente sin que toquen el piso. Evita arquear la espalda baja; si cuesta, flexiona ligeramente las rodillas. Trabaja recto abdominal inferior y flexores de cadera.',
  }),

  new EjercicioPesoCorporal({
    id: 'cor-07', 
    nombre: 'Rodillas al Pecho', 
    zona: 'Core', 
    equipo:'Barra Alta',
    repeticiones: 10,
    nivel:"Principiante",
    videoUrl: 'https://youtube.com/shorts/3R3lQrbdcyc',
    descripcion: 'Ejercicio de core colgado en barra alta. Con agarre firme y brazos extendidos, flexiona cadera y rodillas para llevar las rodillas hacia el pecho, contrayendo el abdomen, y baja de forma controlada sin balancearte. Trabaja recto abdominal, flexores de cadera y agarre. Evita usar impulso; si cuesta, comienza con elevaciones parciales o en barra baja.',
  }),


];

export default core;