import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import  styles from '../css/estilo';

const SplashScreen = ({ navigation }) => {
  return (

    <View>
      <ImageBackground style={styles.imagem1} source={require('../img/quiz.jpg')}>

        <View>
        
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.botao}>
            <Text style={styles.textoBotao}> Login </Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
};
export default SplashScreen;