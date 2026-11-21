import EjercicioConPeso from '../../models/EjercicioConPeso';
import EjercicioPesoCorporal from '../../models/EjercicioPesoCorporal';

const antebrazo = [
  new EjercicioConPeso({
    id: 'ant-01', 
    nombre: 'Curl de muñeca', 
    zona: 'Antebrazo', 
    equipo: 'Mancuerna', 
    peso: 8, 
    repeticiones: 15,
    videoUrl: 'https://youtube.com/shorts/JrCRzibnz4Y',
    descripcion: 'Ejercicio de aislamiento para antebrazo. Con la mancuerna en agarre supino, flexiona y extiende la muñeca de forma controlada, manteniendo el antebrazo apoyado o estable y evitando mover el codo. Trabaja principalmente los flexores de la muñeca y mejora la fuerza de agarre.',
  }),

  new EjercicioConPeso({ 
    id: 'ant-02', 
    nombre: 'Curl invertido', 
    zona: 'Antebrazo', 
    equipo: 'Barra', 
    peso: 15,
    videoUrl: 'https://youtu.be/RwtJdkz15BY',
    descripcion: 'Curl de bíceps con agarre prono, es decir, palmas hacia abajo. Se realiza con barra y enfatiza los extensores de la muñeca, el braquial y el antebrazo. Mantén los codos cerca del torso y evita balancear el cuerpo para levantar el peso.',
  }),

  new EjercicioPesoCorporal({
    id: 'ant-03', 
    nombre: 'Cambios de Agarre', 
    zona: 'Antebrazo', 
    equipo: 'Barra Alta', 
    peso: 15,
    nivel: 'Intermedio',
    videoUrl: 'https://youtu.be/qwbDU7BsmTI',
    descripcion: 'Ejercicio de fuerza y resistencia de agarre en barra alta. Consiste en alternar el tipo de agarre o cambiar de posición las manos mientras se cuelga de la barra, manteniendo el cuerpo estable. Mejora la resistencia del antebrazo y la capacidad de sostener objetos durante más tiempo.',
  }),

  new EjercicioPesoCorporal({
    id: 'ant-04', 
    nombre: 'Colgarse de Barra', 
    zona: 'Antebrazo', 
    equipo: 'Barra Alta', 
    peso: 15,
    nivel: 'Intermedio',
    videoUrl: 'https://youtu.be/qwbDU7BsmTI',
    descripcion: 'Consiste en suspender el cuerpo desde una barra alta manteniendo un agarre firme. Se puede realizar de forma pasiva o con hombros activos. Trabaja la resistencia de agarre, los flexores de los dedos y el antebrazo. Evita balancearte y controla la respiración durante el tiempo de suspensión.'
  }),

];

export default antebrazo;