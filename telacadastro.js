import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { supabase } from './conexao'; // Verifique se o caminho está correto
import { Ionicons } from '@expo/vector-icons';

export default function CadastroProduto() {
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');

  // Nome fictício para exibição
  const nomeUsuario = 'Fulano de Tal';

  const handleSubmit = async () => {
    if (produto && valor && quantidade) {
      const { data, error } = await supabase
        .from('tb_lista_compras')
        .insert([{ coluna_produto: produto, coluna_valor: valor, coluna_quantidade: quantidade }]);

      if (error) {
        Alert.alert('Erro', 'Não foi possível adicionar o produto');
      } else {
        Alert.alert('Sucesso', 'Produto adicionado com sucesso');
        setProduto('');
        setValor('');
        setQuantidade('');
      }
    } else {
      Alert.alert('Aviso', 'Por favor, preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem vindo, </Text>
        <Text style={[styles.headerText, { fontWeight: 'bold' }]}>{nomeUsuario}</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="person" size={30} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.instrucoesContainer}>
        <Text style={styles.instrucoesText}>
          Para cadastrar o seu produto, digite os seguintes requisitos listados abaixo:
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Produto:</Text>
        <TextInput
          style={styles.input}
          value={produto}
          onChangeText={setProduto}
        />
        <Text style={styles.label}>Valor:</Text>
        <TextInput
          style={styles.input}
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Quantidade:</Text>
        <TextInput
          style={styles.input}
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Adicionar Produto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 18,
  },
  iconContainer: {
    marginLeft: 'auto',
    padding: 16,
  },
  icon: {
    marginRight: 16,
  },
  instrucoesContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 70,
  },
  instrucoesText: {
    fontSize: 16,
  },
  formContainer: {
    alignItems: 'flex-start', 
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 8, 
  },
  input: {
    height: 30,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 22,
  },
  button: {
    width: '50%',
    height: 40,
    borderRadius: 22,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
