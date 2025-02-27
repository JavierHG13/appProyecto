import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
interface PropsCard {
  _id: string,
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  disponible: boolean;
}

export const CardProductos = (props: PropsCard) => {
  const router = useRouter();

  const navegarADetalles = (id:string) => {
    router.push(`/detalles/${id}`);
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: props.imagen || 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <View style={styles.cardContent}>

        <Text style={styles.productName}>{props.nombre}</Text>


        <Text style={styles.productPrice}>Precio: {props.precio}</Text>

        <Text style={[styles.productStatus, props.disponible ? styles.inStock : styles.outOfStock]}>
          {props.disponible ? 'Disponible' : 'No disponible'}
        </Text>
      </View>

      <Button title="Button" onPress={() => navegarADetalles(props._id)} />

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#6200EE',
  },
  productStatus: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  inStock: {
    color: 'green',
  },
  outOfStock: {
    color: 'red',
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
