import {View} from 'native-base';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {PRIMARY_LIGHT} from '../styles/colors';
import commonStyle from '../styles/commonStyle';

export default function Loading(props) {
  return (
    <View style={commonStyle.loadingBackground}>
      <View flex={'1'} justifyContent={'center'} alignItems={'center'}>
        {!props.disableIcon && <ActivityIndicator color={PRIMARY_LIGHT} />}
      </View>
    </View>
  );
}
