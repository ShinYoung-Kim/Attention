import PageLayout from '@layout/PageLayout';
import PretendardText from '@component/PretendardText';
import React from 'react';
import {View} from 'react-native';

function FeedScreen() {
  return (
    <PageLayout>
      <View>
        <PretendardText>feed</PretendardText>
      </View>
    </PageLayout>
  );
}

export default FeedScreen;
