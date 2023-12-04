import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import styles from '../css/estilo';

const Pergunta4 = ({ navigation, route }) => {
  const [pontuacao, setPontuacao] = useState(route.params?.pontuacao || 0);

  const verificarResposta = (resposta) => {
    if (resposta === 'Resposta correta 4') {
      setPontuacao(pontuacao + 1);
    }
    navigation.navigate('Pergunta5', { pontuacao });
  };

  return (
    <View style={styles.container}>
      <Text>Pergunta 4: Por que o desperdício de alimentos é uma preocupação relevante?</Text>
      <TouchableOpacity onPress={() => verificarResposta('Resposta correta 4')}>
        <Text style={styles.textoBotaop}>a) Esgota os recursos naturais</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 4')}>
        <Text style={styles.textoBotaop}>b) Estimula a economia local</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pergunta4;