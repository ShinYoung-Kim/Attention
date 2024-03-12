import {Tab} from '@constant/tab';
import AlbumScreen from '@screen/AlbumScreen';
import FeedScreen from '@screen/FeedScreen';
import HomeScreen from '@screen/HomeScreen';
import ProfileScreen from '@screen/ProfileScreen';
import React from 'react';

function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
