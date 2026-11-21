// src/services/usuarioStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import Usuario from '../models/Usuario';

const CLAVE = '@gymapp/usuario';

/** Guarda el usuario en el telefono. */
export async function guardarUsuario(usuario) {
  await AsyncStorage.setItem(CLAVE, JSON.stringify(usuario));
}

/** Devuelve un Usuario, o null si aun no hay datos guardados. */
export async function cargarUsuario() {
  const texto = await AsyncStorage.getItem(CLAVE);
  if (!texto) return null;
  try {
    return Usuario.fromJSON(JSON.parse(texto));
  } catch {
    return null; // datos corruptos o incompletos
  }
}

/** Borra los datos (por ejemplo, al cerrar sesion). */
export async function borrarUsuario() {
  await AsyncStorage.removeItem(CLAVE);
}