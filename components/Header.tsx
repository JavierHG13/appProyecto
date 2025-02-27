import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.header}>

      <TouchableOpacity onPress={toggleMenu}>
        <FontAwesome name="bars" size={28} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Mi App</Text>

      <View style={styles.icons}>
        
        <TouchableOpacity>
          <Link href="/carrito">
            <FontAwesome name="shopping-cart" size={24} color="white" />
          </Link>
        </TouchableOpacity>

        <TouchableOpacity>
          <Link href="/auth/login">
            <FontAwesome name="user" size={24} color="white" />
          </Link>
        </TouchableOpacity>

      </View>

   
      {menuVisible && (
        <View style={styles.dropdownMenu}>
          <Link href="/" style={styles.navLink}>Inicio</Link>
          <Link href="/productos" style={styles.navLink}>Productos</Link>
          <Link href="/contacto" style={styles.navLink}>Contacto</Link>
        </View>
      )}
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6200EE',
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'relative',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    zIndex: 999,
  },
  navLink: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});
