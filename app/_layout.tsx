import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  AuthProvider

} from '../context/AuthContext';
const RootLayout = () => {
  return (
    <View style={styles.container}>

      <AuthProvider>

        <Header />

        <View style={styles.content}>
          <Slot />
        </View>

        <Footer />

      </AuthProvider>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
   
  },
});
