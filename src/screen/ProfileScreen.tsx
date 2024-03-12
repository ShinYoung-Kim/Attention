import PageLayout from '@layout/PageLayout';
import PretendardText from '@component/PretendardText';
import React from 'react';
import {View} from 'react-native';

function ProfileScreen() {
  return (
    <PageLayout>
      <View>
        <PretendardText>profile</PretendardText>
      </View>
    </PageLayout>
  );
}

export default ProfileScreen;
