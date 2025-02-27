// src/screens/detalles/[id].tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useProducts } from '../../hooks/useProducts';
import { Loader } from '../../components/Loader';

type Product = {
    _id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    categoria: string;
    imagen: string[];
    disponible: boolean;
}

const Detalles: React.FC = () => {
    const { id } = useLocalSearchParams();
    const { getProductById, loading, error } = useProducts();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (id) {
                const response = await getProductById(id as string);
                setProduct(response);
            }
        };
        fetchProduct();
    }, [id]);


    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{error}</Text>
            </View>
        );
    }

    if (!product) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>Producto no encontrado</Text>
            </View>
        );
    }

    const cargarDetalles = () => {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: product.imagen[0] || 'https://via.placeholder.com/150' }}
                    style={styles.image}
                />
                <Text style={styles.title}>{product.nombre}</Text>
                <Text style={styles.description}>{product.descripcion}</Text>
                <Text style={styles.price}>Precio: €{product.precio}</Text>
                <Text style={styles.stock}>Stock: {product.stock}</Text>
                <Text style={[styles.status, product.disponible ? styles.inStock : styles.outOfStock]}>
                    {product.disponible ? 'Disponible' : 'No disponible'}
                </Text>
            </View>
        )
    }


    return (
        <View style={styles.container}>
  
            {loading ? <Loader /> : cargarDetalles()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginVertical: 10,
    },
    price: {
        fontSize: 18,
        color: '#6200EE',
    },
    stock: {
        fontSize: 16,
        color: '#888',
    },
    status: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    inStock: {
        color: 'green',
    },
    outOfStock: {
        color: 'red',
    },
    error: {
        color: 'red',
        fontSize: 18,
    }
});

export default Detalles;
