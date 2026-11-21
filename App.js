import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EjerciciosScreen from './src/screens/EjerciciosScreen';
import TareasScreen from './src/screens/TareasScreen';
import AgendaScreen from './src/screens/AgendaScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import IniciarScreen from './src/screens/Iniciar';
import RegistroScreen from './src/screens/RegistroScreen';
import { cargarUsuario, guardarUsuario } from './src/services/UsuarioStorage';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [errorCarga, setErrorCarga] = useState('');

  const cargarSesion = useCallback(async () => {
    setCargando(true);
    setErrorCarga('');
    try {
      setUsuario(await cargarUsuario());
    } catch {
      setErrorCarga('No se pudieron cargar los datos guardados. Intenta de nuevo.');
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    let activa = true;
    cargarUsuario()
      .then((usuarioGuardado) => {
        if (activa) setUsuario(usuarioGuardado);
      })
      .catch(() => {
        if (activa) {
          setErrorCarga('No se pudieron cargar los datos guardados. Intenta de nuevo.');
        }
      })
      .finally(() => {
        if (activa) setCargando(false);
      });

    return () => {
      activa = false;
    };
  }, []);

  const registrarUsuario = async (nuevoUsuario) => {
    await guardarUsuario(nuevoUsuario);
    setUsuario(nuevoUsuario);
  };

  if (cargando) {
    return (
      <View style={styles.estadoInicial}>
        <ActivityIndicator size="large" color="#FF5722" />
      </View>
    );
  }

  if (errorCarga) {
    return (
      <View style={styles.estadoInicial}>
        <Text style={styles.errorCarga}>{errorCarga}</Text>
        <TouchableOpacity style={styles.botonReintentar} onPress={cargarSesion}>
          <Text style={styles.textoReintentar}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!usuario) {
    return <RegistroScreen onRegistrar={registrarUsuario} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            // Asignamos el icono según el nombre exacto de la pestaña
            if (route.name === 'EJERCICIOS') {
              iconName = 'weight-lifter'; // Icono de levantador de pesas
            } else if (route.name === 'TAREAS') {
              iconName = 'format-list-checks';
            } else if (route.name === 'AGENDA') {
              iconName = 'calendar-month';
            } else if (route.name === 'PERFIL') {
              iconName = 'account';
            } else if (route.name === 'INICIAR') {
              iconName = 'play-circle-outline';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF5722', // Naranja neón cuando está activo
          tabBarInactiveTintColor: '#6B7280', // Gris para inactivos
          tabBarStyle: {
            backgroundColor: '#181A20', // Fondo oscuro para la barra inferior
            borderTopColor: '#2A303C',   // Línea divisoria sutil
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          headerStyle: { backgroundColor: '#181A20' }, // Fondo oscuro para la cabecera
          headerTintColor: '#FFFFFF',                  // Texto blanco en la cabecera
          headerTitleStyle: { fontWeight: 'bold' }
        })}
      >
        <Tab.Screen name="EJERCICIOS" component={EjerciciosScreen} />
        <Tab.Screen name="TAREAS" component={TareasScreen} />
        <Tab.Screen name="AGENDA" component={AgendaScreen} />
        <Tab.Screen name="PERFIL">
          {(props) => (
            <PerfilScreen
              {...props}
              usuario={usuario}
              onUsuarioActualizado={setUsuario}
              onCerrarSesion={() => setUsuario(null)}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="INICIAR" component={IniciarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  estadoInicial: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  errorCarga: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  botonReintentar: {
    backgroundColor: '#FF5722',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  textoReintentar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});