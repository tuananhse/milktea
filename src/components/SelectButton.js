import {View, Box, Text, HStack, Divider} from 'native-base';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
const SelectButton = props => {
  const {children, rightContent, leftContent, onPress, divider} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Box {...props} bg={'text.0'} h={['10']} justifyContent={'center'} px={4}>
        <HStack justifyContent={'space-between'}>
          {rightContent ? (
            <View justifyContent={'center'}>{rightContent}</View>
          ) : (
            <View />
          )}
          <View>
            <Text fontSize={'md'}>{children}</Text>
          </View>
          {leftContent ? (
            <View justifyContent={'center'}>{leftContent}</View>
          ) : (
            <View />
          )}
        </HStack>
      </Box>
      {divider && <Divider bg={'gray.100'} />}
    </TouchableOpacity>
  );
};

export default memo(SelectButton);
