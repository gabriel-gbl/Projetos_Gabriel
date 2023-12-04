import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import styles from '../css/estilo';

const Pergunta2 = ({ navigation, route }) => {
  const [pontuacao, setPontuacao] = useState(route.params?.pontuacao || 0);

  const verificarResposta = (resposta) => {
    if (resposta === 'Resposta correta 2') {
      setPontuacao(pontuacao + 1);
    }
    navigation.navigate('Pergunta3', { pontuacao });
  };

  return (
    <View style={styles.container}>
      <Text>Pergunta 2: O desperdício de alimentos tem impactos negativos em qual aspecto?</Text>
      <TouchableOpacity onPress={() => verificarResposta('Resposta correta 2')}>
        <Text style={styles.textoBotaop}> a) Ambiental </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 2')}>
        <Text style={styles.textoBotaop}>b) Social</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Pergunta2;