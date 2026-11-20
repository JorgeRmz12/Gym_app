import EjercicioConPeso from '../../models/EjercicioConPeso';

const antebrazo = [
  new EjercicioConPeso({
    id: 'ant-01', 
    nombre: 'Curl de muñeca', 
    zona: 'Antebrazo', 
    equipo: 'Mancuerna', 
    peso: 8, 
    repeticiones: 15,
    videoUrl: 'https://www.pexels.com/es-es/download/video/4259075/',
  }),

  new EjercicioConPeso({ 
    id: 'ant-02', 
    nombre: 'Curl invertido', 
    zona: 'Antebrazo', 
    equipo: 'Barra', 
    peso: 15,
    videoUrl: '',
  }),
];

export default antebrazo;