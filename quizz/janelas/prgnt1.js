import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

import styles from '../css/estilo';
const Pergunta1 = ({ navigation }) => {
  const [pontuacao, setPontuacao] = useState(0);

  const verificarResposta = (resposta) => {
    if (resposta === 'Resposta correta 1') {
      setPontuacao(pontuacao + 1);
    }
    navigation.navigate('Pergunta2', { pontuacao });
  };

  return (
    <View>
      <ImageBackground style={styles.imagem} source={require('../img/funper.jpg')}>
        <View style={styles.container}>
          <Text>Pergunta 1: Qual é uma das principais causas do desperdício de alimentos?</Text>
          <TouchableOpacity onPress={() => verificarResposta('Resposta correta 1')}>
            <Text style={styles.textoBotaop}> a) Armazenamento inadequado </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 1')}>
            <Text style={styles.textoBotaop}> b) Consumo consciente </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Pergunta1;