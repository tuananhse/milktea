import React from 'react';
import {StyleSheet} from 'react-native';
import {GRAY_LIGHT, WHITE} from '../../styles/colors';
import {scaleSize} from '../../styles/mixins';

const productStyle = StyleSheet.create({
  btnClose: {
    zIndex: 10,
    position: 'absolute',
    right: 0,
    padding: 30,
  },
});

export default productStyle;
