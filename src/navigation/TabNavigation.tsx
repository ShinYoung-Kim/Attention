import Icon from '@component/Icon';
import {COLOR} from '@constant/color';
import {Tab} from '@constant/tab';
import AlbumScreen from '@screen/AlbumScreen';
import FeedScreen from '@screen/FeedScreen';
import HomeScreen from '@screen/HomeScreen';
import ProfileScreen from '@screen/ProfileScreen';
import React from 'react';

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLOR.WF900,
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
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
