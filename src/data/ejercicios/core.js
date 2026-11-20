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
    videoUrl: '', 
  }),

  new EjercicioPorTiempo({ 
    id: 'cor-02', 
    nombre: 'Plancha lateral', 
    zona: 'Core', 
    segundos: 30, 
    sets: 3, 
    descanso: 30, 
    nivel: 'Intermedio',
    videoUrl: '', 
  }),

  new EjercicioPesoCorporal({ 
    id: 'cor-03', 
    nombre: 'Abdominales crunch', 
    zona: 'Core', 
    repeticiones: 20,
    videoUrl: '',
  }),
];

export default core;