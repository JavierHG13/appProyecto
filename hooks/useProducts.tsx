import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const API_URL = "https://servidoriot.vercel.app/api"; //Api desarrollada para la web, alojada en vercel

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

// Hook para mostrar los productos
export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${API_URL}/productos`);

                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor');
                }

                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.log('Error al cargar los productos:', err);
                setError('Error al cargar los productos');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const getProductById = async (id: string): Promise<Product | null> => {
        
        try {
            const response = await fetch(`${API_URL}/productos/${id}`);

            if (!response.ok) {
                throw new Error('Producto no encontrado');
            }

            return await response.json();
        } catch (err) {
            console.log("Error al cargar el producto:", err);
            setError('Producto no encontrado');
            return null;
        }
    };

    return { products, loading, error, getProductById };
}