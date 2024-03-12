import {COLOR} from '@constant/color';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({children}: PageLayoutProps) {
  return <SafeAreaView style={styles.background}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLOR.WF800,
    height: '100%',
  },
});

export default PageLayout;
