import PageLayout from '@layout/PageLayout';
import PretendardText from '@component/PretendardText';
import React from 'react';
import {View} from 'react-native';

function AlbumScreen() {
  return (
    <PageLayout>
      <View>
        <PretendardText>album</PretendardText>
      </View>
    </PageLayout>
  );
}

export default AlbumScreen;
