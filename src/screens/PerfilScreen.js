import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function PerfilScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <Text style={styles.userName}>Usuario Gym</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoText}>⚖️ Peso: <Text style={styles.infoValue}>75 kg</Text></Text>
        <Text style={styles.infoText}>📏 Estatura: <Text style={styles.infoValue}>175 cm</Text></Text>
        <Text style={styles.infoText}>🚻 Sexo: <Text style={styles.infoValue}>Masculino</Text></Text>
        <Text style={styles.infoText}>🔥 Calorías quemadas: <Text style={styles.infoValue}>450 kcal</Text></Text>
        <Text style={styles.infoText}>👟 Pasos (Pedometer): <Text style={styles.infoValue}>6,420</Text></Text>
      </View>

      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => Alert.alert('Cerrar Sesión', 'Has salido de tu cuenta.')}
      >
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 16 },
  profileHeader: { alignItems: 'center', marginVertical: 20 },
  avatarCircle: { 
    width: 90, 
    height: 90, 
    borderRadius: 45, 
    backgroundColor: '#1E222B', 
    borderWidth: 2, 
    borderColor: '#FF5722', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 12 
  },
  avatarText: { fontSize: 40 },
  userName: { fontSize: 22, fontWeight: 'bold', color: '#FFFFFF' },
  infoCard: { backgroundColor: '#1E222B', padding: 16, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#2A303C' },
  infoText: { fontSize: 16, marginBottom: 12, color: '#9CA3AF' },
  infoValue: { color: '#FFFFFF', fontWeight: 'bold' },
  logoutButton: { backgroundColor: '#EF4444', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  logoutButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});