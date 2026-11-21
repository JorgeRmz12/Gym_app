import React, { useState } from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';

function obtenerUrlIncrustada(videoUrl) {
  const coincidencia = videoUrl?.match(
    /(?:youtu\.be\/|youtube\.com\/(?:shorts\/|embed\/|watch\?v=))([A-Za-z0-9_-]{11})/
  );
  return coincidencia
    ? `https://www.youtube-nocookie.com/embed/${coincidencia[1]}?playsinline=1&rel=0`
    : null;
}

export default function YouTubeVideo({ videoUrl }) {
  const [error, setError] = useState(false);
  const urlIncrustada = obtenerUrlIncrustada(videoUrl);

  const abrirEnYouTube = async () => {
    try {
      await Linking.openURL(videoUrl);
    } catch {
      Alert.alert('No se pudo abrir el video', 'Intenta de nuevo más tarde.');
    }
  };

  return (
    <View>
      {urlIncrustada && !error ? (
        <WebView
          key={urlIncrustada}
          style={styles.video}
          source={{ uri: urlIncrustada }}
          javaScriptEnabled
          domStorageEnabled
          allowsFullscreenVideo
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction
          originWhitelist={['https://*']}
          onError={() => setError(true)}
        />
      ) : (
        <View style={[styles.video, styles.videoError]}>
          <Text style={styles.videoErrorTexto}>
            {error ? 'No se pudo cargar el video.' : 'No hay un video disponible para este ejercicio.'}
          </Text>
        </View>
      )}

      {videoUrl ? (
        <TouchableOpacity style={styles.botonYouTube} onPress={abrirEnYouTube}>
          <Text style={styles.textoBoton}>Abrir en YouTube</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  video: { width: '100%', height: 230, borderRadius: 12, backgroundColor: '#000000' },
  videoError: { alignItems: 'center', justifyContent: 'center', padding: 16 },
  videoErrorTexto: { color: '#D1D5DB', textAlign: 'center' },
  botonYouTube: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#2A303C',
  },
  textoBoton: { color: '#FFFFFF', fontWeight: 'bold' },
});
