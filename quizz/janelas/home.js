import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import  styles from '../css/estilo';

const Home = ({ navigation }) => {
  return (

    <View>
      <ImageBackground style={styles.imagem} source={require('../img/fundoqui.jpg')}>
        <View>
        
          <TouchableOpacity onPress={() => navigation.navigate('Pergunta1')} style={styles.botao}>
            <Text style={styles.textoBotao}> Iniciar </Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
};
export default Home;