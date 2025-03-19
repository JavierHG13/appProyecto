import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';


function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { user, hasRole, isAuthenticated } = useAuth()


  const toggleMenu = () =>{
    setMenuVisible(!false)
  }

  const handleSearch = (text: string) => {
    setSearchQuery(text);

  };

  return (
    <View style={styles.header}>

      <TouchableOpacity onPress={ toggleMenu}>
        <FontAwesome name="bars" size={28} color="white" />
      </TouchableOpacity>

      <View style={styles.icons}>
        {/* Campo de búsqueda con icono */}
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="#ccc" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={handleSearch}
            placeholder="Buscar productos..."
            placeholderTextColor="#ccc"
          />
        </View>

        {/* Icono de usuario o login */}
        <TouchableOpacity>
          {isAuthenticated ? (
            <Link href="/client/perfil">
              <FontAwesome name="user" size={28} color="white" />
            </Link>
          ) : (
            <Link href="/auth/login">
              <FontAwesome name="sign-in" size={28} color="white" />
            </Link>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'relative',
    backgroundColor: '#1890ff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: '#1890ff',
    paddingVertical: 10,
    zIndex: 999,
  },
  navLink: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 10,
    height: 40,
    marginVertical: 10,
    marginRight: 15,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
});
