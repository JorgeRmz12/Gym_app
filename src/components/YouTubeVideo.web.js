import React from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function YouTubeVideo({ videoUrl }) {
  const abrirEnYouTube = async () => {
    try {
      await Linking.openURL(videoUrl);
    } catch {
      Alert.alert('No se pudo abrir el video', 'Intenta de nuevo más tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        {videoUrl ? 'Mira el video completo en YouTube.' : 'No hay un video disponible para este ejercicio.'}
      </Text>
      {videoUrl ? (
        <TouchableOpacity style={styles.boton} onPress={abrirEnYouTube}>
          <Text style={styles.textoBoton}>Abrir en YouTube</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: 12,
    padding: 20,
  },
  texto: { color: '#D1D5DB', textAlign: 'center', marginBottom: 12 },
  boton: { backgroundColor: '#FF5722', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 14 },
  textoBoton: { color: '#FFFFFF', fontWeight: 'bold' },
});
