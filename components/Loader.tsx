import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

export const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>Cargando Datos...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
    },
});
