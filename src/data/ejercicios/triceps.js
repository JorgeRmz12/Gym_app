import EjercicioConPeso from '../../models/EjercicioConPeso';
import EjercicioPesoCorporal from '../../models/EjercicioPesoCorporal';

const triceps = [
  new EjercicioConPeso({ 
    id: 'tri-01',
    nombre: 'Extensión en polea', 
    zona: 'Tríceps', 
    equipo: 'Polea', 
    peso: 25,
    repeticiones: 10,
    videoUrl: 'https://youtube.com/shorts/uvrH-ceZg_Q',
    descripcion:'',
  }),

  new EjercicioConPeso({ 
    id: 'tri-02', 
    nombre: 'Press francés', 
    zona: 'Tríceps', 
    equipo: 'Barra Z', 
    peso: 20, 
    nivel: 'Intermedio',
    videoUrl: 'https://youtube.com/shorts/L3bEz-vcdGU',
    descripcion:'',
  }),

  new EjercicioPesoCorporal({ 
    id: 'tri-03', 
    nombre: 'Fondos en banco', 
    zona: 'Tríceps', 
    repeticiones: 12,
    videoUrl: 'https://youtube.com/shorts/4ua3MzaU0QU',
    descripcion:'',
  }),

  new EjercicioPesoCorporal({ 
    id: 'tri-04', 
    nombre: 'Fondos en Paralelas', 
    zona: 'Tríceps', 
    repeticiones: 12,
    videoUrl: 'https://youtube.com/shorts/rH4VFGz6C7Q',
    descripcion:'',
  }),

];

export default triceps;