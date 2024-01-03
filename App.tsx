/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screen/HomeScreen';
import { COLOR } from './src/constant/color';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLOR.WF800,
  }
})

export default App;
