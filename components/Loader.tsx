import { Text, View, ActivityIndicator  } from 'react-native'
import React from 'react'

export const Loader = () => {
    return (
        <View>
            <Text>Cargando Datos...</Text>
            <ActivityIndicator />
        </View>
    )
}