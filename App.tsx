/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={Colors.darker}>
      <View>
        <Text>Attention</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
