import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform } from 'react-native';
// Importamos la API desde la ruta legacy recomendada por Expo
import * as Calendar from 'expo-calendar/legacy';

export default function AgendaScreen() {
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'Se necesita acceso al calendario para agendar sesiones.');
      }
    })();
  }, []);

  async function createCustomCalendar() {
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await Calendar.getDefaultCalendarAsync()
        : { isLocalAccount: true, name: 'gymApp Calendar' };

    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'gymApp Entrenamientos',
      color: '#FF5722',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'gymAppInternal',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    return newCalendarID;
  }

  const agendarEntrenamiento = async () => {
    try {
      const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
      let targetCalendar = calendars.find(cal => cal.title === 'gymApp Entrenamientos');
      
      let calendarId;
      if (!targetCalendar) {
        calendarId = await createCustomCalendar();
      } else {
        calendarId = targetCalendar.id;
      }

      const startDate = new Date();
      startDate.setDate(startDate.getDate() + 1);
      startDate.setHours(10, 0, 0, 0);

      const endDate = new Date(startDate);
      endDate.setHours(11, 0, 0, 0);

      await Calendar.createEventAsync(calendarId, {
        title: '🏋️ Entrenamiento GymApp',
        startDate,
        endDate,
        timeZone: 'GMT',
        notes: 'Sesión programada desde gymApp.',
        alarms: [{ relativeOffset: -60 }]
      });

      Alert.alert(
        '¡Entrenamiento Agendado!',
        'Se ha guardado en tu calendario nativo para mañana a las 10:00 AM con recordatorio 1 hora antes.'
      );
    } catch (error) {
      Alert.alert('Error al agendar', error.message);
    }
  };

  return (
    <View style={[styles.container, styles.centerContent]}>
      <Text style={styles.headerTitle}>Agenda tu Entrenamiento</Text>
      <Text style={styles.descriptionText}>
        Programa tu próxima sesión. La app enviará una notificación a tu dispositivo 1 hora antes de la cita.
      </Text>

      <TouchableOpacity style={styles.primaryButton} onPress={agendarEntrenamiento}>
        <Text style={styles.primaryButtonText}>Agendar Sesión de Prueba (Mañana 10:00 AM)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 16 },
  centerContent: { justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#FFFFFF', textAlign: 'center' },
  descriptionText: { textAlign: 'center', color: '#9CA3AF', marginBottom: 24, paddingHorizontal: 10, fontSize: 15 },
  primaryButton: { 
    backgroundColor: '#FF5722', 
    padding: 16, 
    borderRadius: 12, 
    width: '100%', 
    alignItems: 'center',
    shadowColor: '#FF5722',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  },
  primaryButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});