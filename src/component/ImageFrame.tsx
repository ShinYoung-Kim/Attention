import SelectedImageFrame from '@component/template/SelectedImageFrame';
import {FRAME_COLOR, FrameColorType} from '@constant/color';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

type ImageFrameProps = {
  color: FrameColorType;
  images: string[];
};

function ImageFrame({color = 'Orange', images}: ImageFrameProps) {
  return (
    <View style={styles({color}).container}>
      <FlatList
        data={images}
        keyExtractor={item => item}
        numColumns={2}
        renderItem={({item}) => <SelectedImageFrame image={item} />}
        ItemSeparatorComponent={() => (
          <View style={styles({color}).seperator} />
        )}
        columnWrapperStyle={styles({color}).columnWrapper}
      />
    </View>
  );
}

const styles = ({color}: Pick<ImageFrameProps, 'color'>) =>
  StyleSheet.create({
    container: {
      backgroundColor: FRAME_COLOR[color],
      width: '100%',
      padding: 20,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    seperator: {
      height: 8,
    },
    columnWrapper: {
      gap: 8,
    },
  });

export default ImageFrame;
