import {Factory, Input} from 'native-base';
import React, {memo} from 'react';
import {getFontSize} from '../../utils';

const CInput = props => {
  const {
    label,
    name,
    onPress,
    data,
    enableOnPress = false,
    onChangeText,
    isDisabled = false,
    value,
  } = props;
  const CCInput = Factory(Input);
  return (
    <CCInput
      isDisabled={isDisabled}
      {...props}
      onFocus={false}
      onChangeText={onChangeText}
      // borderWidth={'1'}
      fontSize={getFontSize(16)}
      placeholderTextColor={'text.500'}
      _focus={{borderColor: 'white'}}
      selectionColor={'text.50'}
      // borderColor={'text.50'}
      color={'text.100'}
      autoCapitalize="none"
      value={value}
      borderRadius={10}
      size={10}
      borderColor={'text.500'}
      borderW
    />
  );
};

export default memo(CInput);
