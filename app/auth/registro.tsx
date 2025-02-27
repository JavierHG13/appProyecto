import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import React from 'react';

const Registro = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro</Text>
      
      <Text style={styles.subtitulo}>Nombre</Text>
      <TextInput placeholder='Nombre' style={styles.cajas} />
      
      <Text style={styles.subtitulo}>Correo</Text>
      <TextInput placeholder='Correo' keyboardType='email-address' style={styles.cajas} />
      
      <Text style={styles.subtitulo}>Usuario</Text>
      <TextInput placeholder='Usuario' style={styles.cajas} />
      
      <Text style={styles.subtitulo}>Contraseña</Text>
      <TextInput placeholder='Contraseña' secureTextEntry={true} style={styles.cajas} />
      
      <Button 
        title='Registrarse' 
        onPress={() => console.log('Registrarse')} 
        color={'#3F704D'}
      />
    </ScrollView>
  );
};

export default Registro;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20
  },
  titulo: {
    fontSize: 28,
    color: "black",
    textAlign: 'center',
    marginBottom: 24
  },
  subtitulo: {
    fontSize: 18,
    color: "black",
    margin: 8
  },
  cajas: {
    margin: 8,
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "grey"
  }
});
