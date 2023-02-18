import {Button, Text} from 'native-base';
import React from 'react';

const CButton = ({children}, props) => {
  const {onPress} = props;
  return (
    <Button
      {...props}
      onPress={onPress}
      bg={'primary.100'}
      color={'text.100'}
      colorScheme="default">
      <Text color={'text.0'}>{children}</Text>
    </Button>
  );
};

export default CButton;
