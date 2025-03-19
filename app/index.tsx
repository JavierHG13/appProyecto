import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image 
        source={{ uri: 'https://img.freepik.com/vector-premium/banner-peces-colores-estilo-oriental-texturas-acuarela-decoracion-web-textil_391155-234.jpg?w=1380' }} 
        style={styles.headerImage} 
      />

      <Text style={styles.title}>Bienvenido a mi aplicación móvil</Text>

      <Text style={styles.description}>
        Encuentra todo lo que necesitas para tu acuario, desde peces exóticos hasta peceras inteligentes que controlan el ambiente automáticamente.
      </Text>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.button}>
          <Link href="/productos" style={styles.link}>
            <Text style={styles.buttonText}>Ver Productos</Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Link href="/peceras-automáticas" style={styles.link}>
            <Text style={styles.buttonText}>Peceras Automáticas</Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Link href="/accesorios" style={styles.link}>
            <Text style={styles.buttonText}>Accesorios</Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Link href="/contacto" style={styles.link}>
            <Text style={styles.buttonText}>Contacto</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00796b',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#004d40',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  menu: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#40a9ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    width: '100%',
    textAlign: 'center',
  },
});

export default Index;
