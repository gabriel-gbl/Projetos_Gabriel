import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../css/estilo';

const Pergunta3 = ({ navigation, route }) => {
  const [pontuacao, setPontuacao] = useState(route.params?.pontuacao || 0);

  const verificarResposta = (resposta) => {
    if (resposta === 'Resposta correta 3') {
      setPontuacao(pontuacao + 1);
    }
    navigation.navigate('Pergunta4', { pontuacao });
  };

  return (
    <View style={styles.container}>
      <Text>Pergunta 3: Qual é uma estratégia para reduzir o desperdício de alimentos?</Text>
      <TouchableOpacity onPress={() => verificarResposta('Resposta correta 3')}>
        <Text style={styles.textoBotaop}>a) Planejamento cuidadoso das refeições</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 3')}>
        <Text style={styles.textoBotaop}>b) Produção em excesso</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pergunta3;