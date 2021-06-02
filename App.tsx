import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';

import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;

// StatusBar es otro componente de reactNative, permite
// modificar la barra de estados del movil, tanto ios como android

// Con ctrl+espacio se abren propiedades del componente, ej barStyle
