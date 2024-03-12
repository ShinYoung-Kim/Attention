import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import ProviderContainer from '@providers/ProviderContainer';
import TabNavigation from '@navigation/TabNavigation';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ProviderContainer>
      <TabNavigation />
    </ProviderContainer>
  );
}

export default App;
