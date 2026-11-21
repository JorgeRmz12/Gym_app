import EjercicioConPeso from '../../models/EjercicioConPeso';
import EjercicioPesoCorporal from '../../models/EjercicioPesoCorporal';


const biceps = [
  new EjercicioConPeso({ 
    id: 'bic-01', 
    nombre: 'Curl de bíceps con barra', 
    zona: 'Bíceps', 
    equipo: 'Barra', 
    peso: 20,
    videoUrl: 'https://youtu.be/a9hli15uWiA',
    descripcion: 'Ejercicio clásico de bíceps con barra recta en agarre supino (palmas hacia arriba). Mantén los codos pegados al torso, sube la barra de forma controlada hasta la altura del pecho y baja lentamente sin bloquear los codos. Trabaja el bíceps braquial y el braquial anterior; evita balancear el cuerpo o usar impulso.',
  }),

  new EjercicioConPeso({ 
    id: 'bic-02', 
    nombre: 'Curl martillo', 
    zona: 'Bíceps', 
    equipo: 'Mancuernas', 
    peso: 10,
    videoUrl: 'https://youtu.be/RHdacbwKbTo',
    descripcion: 'Curl con mancuernas en agarre neutro (palmas enfrentadas), como si sostuvieras un martillo. Se realiza de pie o sentado, con los codos fijos junto al torso. Enfatiza el braquial y el braquiorradial, aportando grosor y fuerza al brazo. Sube y baja de forma controlada sin balancear el tronco.',
  }),

  new EjercicioConPeso({ 
    id: 'bic-03', 
    nombre: 'Curl en banco Scott', 
    zona: 'Bíceps', 
    equipo: 'Barra Z', 
    peso: 15, 
    nivel: 'Intermedio',
    videoUrl: 'https://youtu.be/Ks5KNBSmw6A',
    descripcion: 'Curl realizado con los brazos apoyados sobre el banco Scott (preacher curl), lo que aísla el bíceps y evita el impulso. Con la barra Z en agarre supino, flexiona los codos hasta la altura de los hombros y baja lentamente sin extender completamente el codo bajo carga. Excelente para trabajar la porción corta del bíceps y la parte inferior del movimiento.',
  }),

  new EjercicioPesoCorporal({
    id: 'bic-04', 
    nombre: 'Dominada Australiana Bicep', 
    zona: 'Bíceps', 
    equipo: 'Barra Australiana', 
    nivel: 'Intermedio',
    videoUrl: 'https://youtube.com/shorts/ZiSgF1R5yuI',
    descripcion: 'Variante de remo invertido o dominada horizontal en barra baja, con agarre supino para enfatizar el bíceps. Mantén el cuerpo recto y rígido (como una plancha), tira del pecho hacia la barra y baja de forma controlada. Ejercicio de progresión ideal antes de las dominadas completas; trabaja bíceps, espalda y core.',
  }),

  new EjercicioPesoCorporal({
    id: 'bic-05', 
    nombre: 'Dominada Supina', 
    zona: 'Biceps', 
    equipo: 'Barra Alta', 
    nivel: 'Avanzado',
    videoUrl: 'https://youtube.com/shorts/ZYuK-R-y5iA',
    descripcion: 'Dominada con agarre supino (palmas hacia ti) y manos a la anchura de los hombros. Es el ejercicio de peso corporal más exigente para el bíceps. Cuelga de la barra con los brazos extendidos, tira del cuerpo hasta que la barbilla supere la barra y baja de forma controlada. Trabaja bíceps, dorsales, antebrazo y core; requiere buena fuerza de base.',

  }),

  new EjercicioPesoCorporal({
    id: 'bic-06', 
    nombre: 'Curl Hefesto', 
    zona: 'Biceps', 
    equipo: 'Barra Australiana', 
    nivel: 'Intermedio',
    videoUrl: 'https://youtube.com/shorts/vJE2xpZZa1g',
    descripcion: 'Ejercicio de curl con peso corporal realizado en barra baja o australiana. Consiste en colgarse bajo la barra con el cuerpo en línea recta y flexionar los codos para acercar la cabeza a la barra, manteniendo los hombros activos y el core firme. Excelente para aislar el bíceps con peso corporal y progresar hacia dominadas supinas.',
  }),

];

export default biceps;