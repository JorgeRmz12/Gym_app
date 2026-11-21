import EjercicioConPeso from '../../models/EjercicioConPeso';

const biceps = [
  new EjercicioConPeso({ 
    id: 'bic-01', 
    nombre: 'Curl de bíceps con barra', 
    zona: 'Bíceps', 
    equipo: 'Barra', 
    peso: 20,
    videoUrl: 'https://youtu.be/a9hli15uWiA',
  }),

  new EjercicioConPeso({ 
    id: 'bic-02', 
    nombre: 'Curl martillo', 
    zona: 'Bíceps', 
    equipo: 'Mancuernas', 
    peso: 10,
    videoUrl: 'https://youtu.be/RHdacbwKbTo',
  }),

  new EjercicioConPeso({ 
    id: 'bic-03', 
    nombre: 'Curl en banco Scott', 
    zona: 'Bíceps', 
    equipo: 'Barra Z', 
    peso: 15, 
    nivel: 'Intermedio',
    videoUrl: 'https://youtu.be/Ks5KNBSmw6A',
  }),
];

export default biceps;