import Icon from '@component/Icon';
import {COLOR} from '@constant/color';
import {Tab} from '@constant/tab';
import AlbumScreen from '@screen/AlbumScreen';
import FeedScreen from '@screen/FeedScreen';
import HomeScreen from '@screen/HomeScreen';
import ProfileScreen from '@screen/ProfileScreen';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function TabNavigation() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLOR.WF900,
          height: 64 + insets.bottom,
        },
        tabBarActiveTintColor: COLOR.WFWHITE,
        tabBarInactiveTintColor: COLOR.WF500,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            Icon({name: 'Home', fill: focused ? 'WFWHITE' : 'WF500', size: 24}),
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({focused}) =>
            Icon({
              name: 'Grid',
              fill: focused ? 'WFWHITE' : 'WF500',
              size: 24,
            }),
          tabBarLabel: '피드',
        }}
      />
      <Tab.Screen
        name="Album"
        component={AlbumScreen}
        options={{
          tabBarIcon: ({focused}) =>
            Icon({
              name: 'Folder',
              fill: focused ? 'WFWHITE' : 'WF500',
              size: 24,
            }),
          tabBarLabel: '앨범',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            Icon({
              name: 'User',
              fill: focused ? 'WFWHITE' : 'WF500',
              size: 24,
            }),
          tabBarLabel: '프로필',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
