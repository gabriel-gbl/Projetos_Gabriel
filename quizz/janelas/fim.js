import React from 'react';
import { View, Text } from 'react-native';

const TelaFinal = ({ route }) => {
  const pontuacao = route.params?.pontuacao || 0;
  let mensagem;

  if (pontuacao === 5) {
    mensagem = 'Você é um gênio';
  } else if (pontuacao >= 2 && pontuacao <= 4) {
    mensagem = 'Pode melhorar';
  } else {
    mensagem = 'Estude Mais!!';
  }
      
  return (
    <View>
      <Text>Pontuação final: {pontuacao}</Text>
      <Text>Resultado: {mensagem}</Text>
    </View>
  );
};

export default TelaFinal;