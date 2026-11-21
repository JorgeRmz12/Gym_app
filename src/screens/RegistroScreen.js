import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Usuario from '../models/Usuario';

const SEXOS = ['Masculino', 'Femenino'];

export default function RegistroScreen({ onRegistrar }) {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [estatura, setEstatura] = useState('');
  const [peso, setPeso] = useState('');
  const [sexo, setSexo] = useState('');
  const [error, setError] = useState('');
  const [guardando, setGuardando] = useState(false);

  const registrar = async () => {
    const nombreLimpio = nombre.trim();
    const edadNumero = Number(edad);
    const estaturaNumero = Number(estatura.replace(',', '.'));
    const pesoNumero = Number(peso.replace(',', '.'));

    if (!nombreLimpio || !edad.trim() || !estatura.trim() || !peso.trim() || !sexo) {
      setError('Completa todos los campos para continuar.');
      return;
    }
    if (!Number.isInteger(edadNumero) || edadNumero <= 0) {
      setError('Ingresa una edad válida en años.');
      return;
    }
    if (!Number.isFinite(estaturaNumero) || estaturaNumero <= 0) {
      setError('Ingresa una estatura válida en centímetros.');
      return;
    }
    if (!Number.isFinite(pesoNumero) || pesoNumero <= 0) {
      setError('Ingresa un peso válido en kilogramos.');
      return;
    }

    setError('');
    setGuardando(true);
    try {
      await onRegistrar(new Usuario({
        nombre: nombreLimpio,
        edad: edadNumero,
        estatura: estaturaNumero,
        peso: pesoNumero,
        sexo,
      }));
    } catch {
      setError('No se pudo guardar tu perfil en el dispositivo. Intenta de nuevo.');
    } finally {
      setGuardando(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.contenedor}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.contenido}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.icono}>🏋️</Text>
        <Text style={styles.titulo}>Bienvenido a GymApp</Text>
        <Text style={styles.subtitulo}>
          Crea tu perfil para empezar. Tus datos se guardarán solo en este dispositivo.
        </Text>

        <View style={styles.formulario}>
          <Text style={styles.etiqueta}>Nombre</Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
            placeholder="Tu nombre"
            placeholderTextColor="#6B7280"
            autoCapitalize="words"
            autoComplete="name"
            returnKeyType="next"
            maxLength={60}
          />

          <Text style={styles.etiqueta}>Edad (años)</Text>
          <TextInput
            style={styles.input}
            value={edad}
            onChangeText={setEdad}
            placeholder="Ej. 25"
            placeholderTextColor="#6B7280"
            keyboardType="number-pad"
            returnKeyType="next"
          />

          <Text style={styles.etiqueta}>Estatura (cm)</Text>
          <TextInput
            style={styles.input}
            value={estatura}
            onChangeText={setEstatura}
            placeholder="Ej. 175"
            placeholderTextColor="#6B7280"
            keyboardType="decimal-pad"
            returnKeyType="next"
          />

          <Text style={styles.etiqueta}>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            value={peso}
            onChangeText={setPeso}
            placeholder="Ej. 70"
            placeholderTextColor="#6B7280"
            keyboardType="decimal-pad"
            returnKeyType="done"
          />

          <Text style={styles.etiqueta}>Sexo</Text>
          <View style={styles.opcionesSexo}>
            {SEXOS.map((opcion) => {
              const seleccionado = sexo === opcion;
              return (
                <TouchableOpacity
                  key={opcion}
                  style={[styles.opcionSexo, seleccionado && styles.opcionSeleccionada]}
                  onPress={() => setSexo(opcion)}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: seleccionado }}
                >
                  <Text style={[styles.textoOpcion, seleccionado && styles.textoOpcionSeleccionada]}>
                    {opcion}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity
            style={[styles.boton, guardando && styles.botonDeshabilitado]}
            onPress={registrar}
            disabled={guardando}
          >
            {guardando ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.textoBoton}>Guardar y continuar</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#121212' },
  contenido: { flexGrow: 1, justifyContent: 'center', padding: 24, paddingVertical: 36 },
  icono: { fontSize: 44, textAlign: 'center', marginBottom: 12 },
  titulo: { color: '#FFFFFF', fontSize: 26, fontWeight: 'bold', textAlign: 'center' },
  subtitulo: {
    color: '#9CA3AF',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  formulario: {
    backgroundColor: '#1E222B',
    borderWidth: 1,
    borderColor: '#2A303C',
    borderRadius: 16,
    padding: 18,
  },
  etiqueta: { color: '#D1D5DB', fontSize: 14, fontWeight: '600', marginBottom: 8, marginTop: 12 },
  input: {
    backgroundColor: '#181A20',
    borderWidth: 1,
    borderColor: '#2A303C',
    borderRadius: 10,
    color: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  opcionesSexo: { flexDirection: 'row', gap: 10 },
  opcionSexo: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A303C',
    borderRadius: 10,
    paddingVertical: 12,
  },
  opcionSeleccionada: { backgroundColor: '#FF5722', borderColor: '#FF5722' },
  textoOpcion: { color: '#D1D5DB', fontWeight: '600' },
  textoOpcionSeleccionada: { color: '#FFFFFF' },
  error: { color: '#F87171', fontSize: 14, marginTop: 14, textAlign: 'center' },
  boton: {
    alignItems: 'center',
    backgroundColor: '#FF5722',
    borderRadius: 10,
    marginTop: 22,
    minHeight: 50,
    justifyContent: 'center',
  },
  botonDeshabilitado: { opacity: 0.7 },
  textoBoton: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});
