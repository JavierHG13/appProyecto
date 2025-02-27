import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={styles.contenido}>

      <Text style={styles.titulo}>Pantalla Principal</Text>
      
      <Link href="/productos" style={styles.link}>
        <Text style={styles.linkText}>Ver productos</Text>
      </Link>
 
    </View>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  link: {
    padding: 10,
    backgroundColor: '#6200EE',
    borderRadius: 8,
    marginBottom: 15,
  },
  linkText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Index;
