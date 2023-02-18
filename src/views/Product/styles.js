import React from 'react';
import {StyleSheet} from 'react-native';
import {GRAY_LIGHT, WHITE} from '../../styles/colors';
import {scaleSize} from '../../styles/mixins';

const productStyle = StyleSheet.create({
  btnClose: {
    zIndex: 100,
    position: 'absolute',
    right: 1,
    padding: 30,
    paddingTop: 40,
  },
});

export default productStyle;
