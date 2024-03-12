import {ChildrenProps} from '@/type/common';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

function NavigationProvider({children}: ChildrenProps) {
  return <NavigationContainer>{children}</NavigationContainer>;
}

export default NavigationProvider;
