import React from 'react';
import { StyleSheet, View } from 'react-native';
import CadastroProduto from './telacadastro'; // Verifique se o caminho está correto

export default function App() {
  return (
    <View style={styles.container}>
      <CadastroProduto />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});
