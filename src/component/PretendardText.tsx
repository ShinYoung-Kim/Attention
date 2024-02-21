import {StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';

interface PretendardTextProps {
  children: React.ReactNode;
  fontStyle?: TextStyle;
}

function PretendardText({children, fontStyle}: PretendardTextProps) {
  return <Text style={{...styles.text, ...fontStyle}}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Pretendard-Regular',
  },
});

export default PretendardText;
