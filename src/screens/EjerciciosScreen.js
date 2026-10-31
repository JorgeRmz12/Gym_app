import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function EjerciciosScreen() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [favorites, setFavorites] = useState({});

  const categorias = [
    { id: '1', nombre: 'Espalda', ejercicios: ['Jalón al pecho', 'Remo con mancuerna a una mano', 'Dominadas'] },
    { id: '2', nombre: 'Bíceps', ejercicios: ['Curl de bíceps con barra', 'Curl martillo', 'Curl en banco Scott'] },
    { id: '3', nombre: 'Pierna', ejercicios: ['Sentadillas', 'Prensa', 'Extensión de cuadríceps'] },
    { id: '4', nombre: 'Antebrazo', ejercicios: ['Curl de muñeca', 'Curl invertido'] },
    { id: '5', nombre: 'Tríceps', ejercicios: ['Extensión en polea', 'Press francés'] },
  ];

  const toggleAccordion = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Categorías de Ejercicio</Text>
      {categorias.map((cat) => (
        <View key={cat.id} style={styles.accordionContainer}>
          <TouchableOpacity 
            style={styles.accordionHeader} 
            onPress={() => toggleAccordion(cat.id)}
          >
            <Text style={styles.accordionTitle}>{cat.nombre}</Text>
            <TouchableOpacity 
              onPress={() => toggleFavorite(cat.id)}
              style={styles.favButton}
            >
              <Text style={styles.favText}>{favorites[cat.id] ? '★ Favorito' : '☆ Favorito'}</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          {expandedCategory === cat.id && (
            <View style={styles.accordionBody}>
              {cat.ejercicios.map((ej, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.ejercicioItem}
                  onPress={() => Alert.alert('Detalle', `Abrir pantalla de detalles para: ${ej}`)}
                >
                  <Text style={styles.ejercicioText}>• {ej}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 16 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#FFFFFF' },
  accordionContainer: { marginBottom: 12, borderRadius: 12, backgroundColor: '#1E222B', borderWidth: 1, borderColor: '#2A303C', overflow: 'hidden' },
  accordionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  accordionTitle: { fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' },
  accordionBody: { padding: 16, backgroundColor: '#181A20', borderTopWidth: 1, borderTopColor: '#2A303C' },
  favButton: { padding: 4 },
  favText: { color: '#FF5722', fontWeight: 'bold' },
  ejercicioItem: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#2A303C' },
  ejercicioText: { fontSize: 15, color: '#D1D5DB' },
});