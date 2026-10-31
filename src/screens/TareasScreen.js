import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function TareasScreen() {
  const tareasGuardadas = ['Jalón al pecho', 'Sentadillas', 'Curl martillo'];

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Tus Ejercicios Guardados</Text>
      {tareasGuardadas.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.cardButton}
          onPress={() => Alert.alert('Rutina Activa', `Iniciando contador para: ${item}`)}
        >
          <Text style={styles.cardText}>{item}</Text>
          <Text style={styles.cardSubtext}>Tap para iniciar rutina ⏱️</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 16 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#FFFFFF' },
  cardButton: { backgroundColor: '#1E222B', padding: 16, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#2A303C' },
  cardText: { fontSize: 17, fontWeight: 'bold', color: '#FF5722' },
  cardSubtext: { fontSize: 13, color: '#9CA3AF', marginTop: 4 },
});