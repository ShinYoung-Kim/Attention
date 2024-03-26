import {Image, StyleSheet, View} from 'react-native';

type SelectedImageFrameProps = {
  image: string;
};

function SelectedImageFrame({image}: SelectedImageFrameProps) {
  return (
    <View style={style.container}>
      <Image source={{uri: image}} style={style.image} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 0.6,
    objectFit: 'cover',
  },
});

export default SelectedImageFrame;
