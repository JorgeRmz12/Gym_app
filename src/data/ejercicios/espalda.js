import EjercicioConPeso from '../../models/EjercicioConPeso';
import EjercicioPesoCorporal from '../../models/EjercicioPesoCorporal';

const espalda = [
new EjercicioConPeso({
  id: 'esp-01',
  nombre: 'Jalón al pecho',
  zona: 'Espalda',
  equipo: 'Polea',
  nivel: 'Principiante',
  peso: 15,
  sets: 4,
  repeticiones: 12,
  videoUrl: 'https://youtube.com/shorts/hQW3zbBCrgU',
  descripcion: 'Ejercicio de tracción vertical en polea alta. Siéntate con los muslos fijados bajo el soporte y agarra la barra en agarre prono (palmas hacia afuera) un poco más ancho que los hombros. Tira de la barra hacia la parte superior del pecho llevando los codos hacia abajo y atrás, junta las escápulas y vuelve de forma controlada sin perder tensión. Trabaja dorsales, romboides, trapecio inferior y bíceps. Evita tirar con los brazos o balancear el torso; es una excelente progresión hacia las dominadas.'
}),

new EjercicioConPeso({
  id: 'esp-02',
  nombre: 'Remo con mancuerna a una mano',
  zona: 'Espalda',
  equipo: 'Mancuerna',
  peso: 20,
  nivel: 'Intermedio',
  videoUrl: 'https://youtube.com/shorts/-RngKKzbEnI',
  descripcion: 'Ejercicio de tracción horizontal unilateral. Apoya una rodilla y una mano en un banco, con la espalda recta y paralela al suelo. Con la mancuerna en la mano libre, tira del codo hacia atrás y arriba llevando la mancuerna hacia la cadera, junta la escápula y baja de forma controlada. Trabaja dorsal, romboides, trapecio y bíceps, además de corregir desequilibrios entre lados. Evita rotar el torso o usar impulso.'
}),

new EjercicioConPeso({
  id: 'esp-03',
  nombre: 'Remo con barra',
  zona: 'Espalda',
  equipo: 'Barra',
  peso: 40,
  nivel: 'Intermedio',
  videoUrl: 'https://youtube.com/shorts/sr_U0jBE89A',
  descripcion: 'Ejercicio compuesto de tracción horizontal con barra. Con los pies a la anchura de los hombros, rodillas ligeramente flexionadas y torso inclinado hacia adelante (unos 45°), mantén la espalda neutra. Tira de la barra hacia el abdomen bajo llevando los codos hacia atrás, junta las escápulas y baja controladamente. Trabaja dorsales, romboides, trapecio medio y bíceps. Es clave mantener la espalda recta para proteger la zona lumbar; evita redondearla o usar impulso.'
}),

new EjercicioPesoCorporal({
  id: 'esp-04',
  nombre: 'Dominadas',
  zona: 'Espalda',
  nivel: 'Avanzado',
  sets: 4,
  repeticiones: 8,
  descanso: 90,
  videoUrl: 'https://youtube.com/shorts/6E3tt4ajzSs',
  descripcion: 'Ejercicio de tracción vertical con peso corporal, considerado el rey para la espalda. Cuelga de la barra con agarre prono a la anchura de los hombros o algo más. Activa los hombros, tira de los codos hacia abajo llevando el pecho hacia la barra hasta superarla con la barbilla, y baja de forma controlada hasta extender los brazos. Trabaja dorsales, romboides, trapecio, bíceps, antebrazo y core. Evita balancearte o usar impulso; si cuesta, usa banda elástica o dominadas asistidas como progresión.'
})
];

export default espalda;