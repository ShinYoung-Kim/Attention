import {COLOR} from '@constant/color';
import HomeScreen from '@screen/HomeScreen';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {RecoilRoot} from 'recoil';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <RecoilRoot>
        <HomeScreen />
      </RecoilRoot>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLOR.WF800,
  },
});

export default App;
