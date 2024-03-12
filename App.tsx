import AlbumScreen from '@screen/AlbumScreen';
import FeedScreen from '@screen/FeedScreen';
import ProfileScreen from '@screen/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screen/HomeScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Album" component={AlbumScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
