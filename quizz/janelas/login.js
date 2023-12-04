import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import styles from '../css/estilo';

const Login = ({ navigation }) => {
  const [usuario, setUser] = useState('');
  const [senha, setPassword] = useState('');

  const gravar = () => {
    if (usuario === '' && senha === '') {
      alert('Login correto');
      navigation.navigate('Home'); // Redirecionar para a tela Home
    } else {
      alert('Verifique usuário e senha!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text>Digite seu usuário:</Text>
      <TextInput
        value={usuario}
        onChangeText={setUser}
        placeholder="Usuário"
        keyboardType="numeric" style={styles.input}
      />

      <Text>Digite sua senha:</Text>
      <TextInput
        value={senha}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry={true} style={styles.input}
      />

      <TouchableOpacity onPress={gravar} style={styles.ctrbtn}>
        <Text style={styles.button}>Acessar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;