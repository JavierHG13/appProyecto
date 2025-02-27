import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';


const Login = () => {
  const router = useRouter()

  const navegarRegistro = () => {
    router.push('/auth/registro');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      
      <Text style={styles.subtitulo}>Usuario</Text>
      <TextInput placeholder='Usuario' style={styles.cajas} />
      
      <Text style={styles.subtitulo}>Contraseña</Text>
      <TextInput placeholder='Contraseña' secureTextEntry={true} style={styles.cajas} />
      
      <Button 
        title='Iniciar sesión' 
        onPress={() => console.log('Iniciar sesión')} 
        color={'#3F704D'}
      />


      <TouchableOpacity onPress={() => navegarRegistro()}>
        
        <Text style={styles.link}>¿No tienes cuenta? Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    color: "black",
    textAlign: 'center',
    marginBottom: 16
  },
  subtitulo: {
    fontSize: 18,
    color: "black",
    margin: 16
  },
  cajas: {
    margin: 16,
    padding: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "grey"
  },
  link: {
    marginTop: 20,
    color: '#3F704D',
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
});
