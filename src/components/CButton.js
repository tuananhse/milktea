import {Button, Text} from 'native-base';
import React, {memo} from 'react';

const CButton = props => {
  const {onPress, children} = props;
  return (
    <Button
      {...props}
      onPress={onPress}
      bg={'primary.100'}
      color={'text.100'}
      colorScheme="amber">
      <Text color={'text.0'}>{children}</Text>
    </Button>
  );
};

export default memo(CButton);
