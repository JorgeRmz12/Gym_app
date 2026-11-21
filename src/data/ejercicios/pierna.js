import EjercicioConPeso from '../../models/EjercicioConPeso';
import EjercicioPesoCorporal from '../../models/EjercicioPesoCorporal';

const pierna = [
new EjercicioConPeso({
  id: 'pie-01',
  nombre: 'Sentadillas',
  zona: 'Pierna',
  equipo: 'Barra',
  peso: 60,
  sets: 5,
  repeticiones: 5,
  descanso: 120,
  nivel: 'Intermedio',
  videoUrl: 'https://youtube.com/shorts/UbIClfnHOuw',
  descripcion: 'Ejercicio compuesto rey del tren inferior. Con la barra apoyada sobre los trapecios (sentadilla trasera) y los pies a la anchura de los hombros, desciende flexionando caderas y rodillas hasta que los muslos queden paralelos al suelo o algo por debajo, manteniendo el torso erguido, el core firme y las rodillas alineadas con los pies. Empuja con los talones para subir. Trabaja cuádriceps, glúteos, isquiotibiales, aductores y core. No dejes que las rodillas se metan hacia dentro ni que la espalda se redondee; con 5x5 prioriza técnica y control.'
}),

new EjercicioConPeso({
  id: 'pie-02',
  nombre: 'Prensa',
  zona: 'Pierna',
  equipo: 'Máquina',
  peso: 30,
  nivel: 'Principiante',
  videoUrl: 'https://youtube.com/shorts/OYa7XRAHQ1w',
  descripcion: 'Ejercicio guiado en máquina de prensa de piernas. Siéntate con la espalda y la cadera bien apoyadas, pies a la anchura de los hombros sobre la plataforma. Empuja la plataforma extendiendo las piernas sin bloquear del todo las rodillas y baja de forma controlada hasta unos 90° de flexión. Trabaja cuádriceps, glúteos e isquiotibiales con menor demanda de estabilización que la sentadilla, ideal para principiantes. Evita despegar la lumbar del respaldo o bloquear las rodillas al extender.'
}),

new EjercicioConPeso({
  id: 'pie-03',
  nombre: 'Extensión de cuadríceps',
  zona: 'Pierna',
  equipo: 'Máquina',
  peso: 30,
  repeticiones: 12,
  nivel: 'Principiante',
  videoUrl: 'https://youtube.com/shorts/N-euKPQgO84',
  descripcion: 'Ejercicio de aislamiento en máquina de extensión de piernas. Sentado con la espalda apoyada y el rodillo sobre la parte baja de la espinilla, extiende las rodillas hasta casi la extensión completa y baja de forma controlada sin dejar caer el peso. Trabaja principalmente el cuádriceps (recto femoral, vastos). Mantén el movimiento lento y sin impulso; útil como complemento a sentadillas y prensa.'
}),

new EjercicioPesoCorporal({
  id: 'pie-04',
  nombre: 'Zancadas',
  zona: 'Pierna',
  repeticiones: 12,
  videoUrl: 'https://youtube.com/shorts/NCW219EeckM',
  descripcion: 'Ejercicio unilateral de pierna con peso corporal. De pie, da un paso al frente y desciende flexionando ambas rodillas hasta que la rodilla trasera casi toque el suelo, manteniendo el torso erguido y la rodilla delantera alineada con el pie. Empuja con el talón delantero para volver a la posición inicial y alterna piernas. Trabaja cuádriceps, glúteos, isquiotibiales y equilibrio. Evita que la rodilla delantera se vaya hacia dentro o que el torso se incline demasiado.'
}),

new EjercicioPesoCorporal({
  id: 'pie-05',
  nombre: 'Sentadilla Búlgara',
  zona: 'Gluteo',
  repeticiones: 12,
  videoUrl: 'https://youtube.com/shorts/5gRn1lr8vYk',
  descripcion: 'Ejercicio unilateral avanzado de pierna. Coloca el empeine del pie trasero sobre un banco y el pie delantero adelantado lo suficiente para que al bajar la rodilla trasera casi toque el suelo y la delantera quede a 90°. Desciende controlando la bajada y sube empujando con el talón delantero. Enfatiza glúteo y cuádriceps de la pierna delantera, además de equilibrio y estabilidad de cadera. Evita inclinar demasiado el torso o que la rodilla delantera se desplace mucho más allá del pie.'
}),

new EjercicioPesoCorporal({
  id: 'pie-06', 
  nombre: 'Pantorrillas',
  zona: 'Chamorro',
  repeticiones: 12,
  videoUrl: 'https://youtube.com/shorts/OsQkieeI-5I',
  descripcion: 'Ejercicio para gemelos y sóleo. De pie (o con la punta de los pies sobre un escalón), eleva los talones lo máximo posible contrayendo las pantorrillas, mantén un instante arriba y baja lentamente hasta sentir el estiramiento. Mantén las rodillas ligeramente flexionadas si quieres enfatizar el sóleo, o rectas para el gastrocnemio. Evita rebotar; la clave es el rango completo y el control en la bajada.'
})

];

export default pierna;