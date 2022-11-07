import React from 'react';
import {StyleSheet} from 'react-native';
import {WHITE} from '../../styles/colors';
import {scaleSize} from '../../styles/mixins';

const loginStyle = StyleSheet.create({
  body: {
    paddingLeft: scaleSize(20),
    paddingRight: scaleSize(20),
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    top: -80,
    flex: 1,
    zIndex: 10,
    backgroundColor: WHITE,
  },
  icClose: {
    zIndex: 10,
    top: 0,
    right: 0,
    position: 'absolute',
    padding: 20,
    paddingTop: 40,
  },
});

export default loginStyle;
