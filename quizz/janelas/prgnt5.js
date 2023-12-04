import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../css/estilo';

const Pergunta5 = ({ navigation, route }) => {
  const [pontuacao, setPontuacao] = useState(route.params?.pontuacao || 0);

  const verificarResposta = (resposta) => {
    if (resposta === 'Resposta correta 5') {
      setPontuacao(pontuacao + 1);
    }
    navigation.navigate('Fim', { pontuacao });
  };

  return (
    <View style={styles.container}>
      <Text>Pergunta 5: O que pode ser feito com os alimentos não consumidos em boas condições?</Text>
      <TouchableOpacity onPress={() => verificarResposta('Resposta correta 5')}>
        <Text style={styles.textoBotaop}>a) Doação para organizações de caridade</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 5')}>
        <Text style={styles.textoBotaop}>b) Descarte no lixo comum</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pergunta5;