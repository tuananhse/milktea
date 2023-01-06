import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import commonStyle from '../styles/commonStyle';
import {KeyboardAvoidingView} from 'native-base';
import {
  Dimensions,
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  Platform,
} from 'react-native';
import {WHITE} from '../styles/colors';
import {h_scale} from '../styles/mixins';
const Container = ({
  children,
  touchableWithoutFeedback = false,
  bg,
  edges = 'top',
  barStyle = 'dark-content',
  padding = false,
}) => {
  if (touchableWithoutFeedback) {
    return (
      <SafeAreaView
        edges={[edges]}
        style={[commonStyle.containerSafeAreaView, {backgroundColor: WHITE}]}>
        <StatusBar barStyle={'dark-content'} backgroundColor={WHITE} />
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={commonStyle.flex}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : null}
              style={commonStyle.container}
              keyboardVerticalOffset={
                Platform.OS === 'ios' ? h_scale(4) : h_scale(50)
              }>
              {children}
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView
      barStyle={barStyle}
      edges={[edges]}
      style={[
        commonStyle.containerSafeAreaView,
        padding && commonStyle.padding,
      ]}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
