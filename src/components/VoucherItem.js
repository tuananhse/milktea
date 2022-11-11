import {View, Text, Box, Image, HStack, AspectRatio, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import commonStyle from '../styles/commonStyle';

const VoucherItem = props => {
  const {item, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Box rounded={'lg'} borderWidth={0.5} borderColor={'text.200'}>
        <HStack>
          <View>
            <Image
              style={{
                width: 120,
                height: 120,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
              source={{uri: item.image}}
              resizeMode="contain"
            />
          </View>

          <VStack flex={1.5} p={2} justifyContent={'space-between'}>
            <View>
              <Text color={'text.100'}>{item.name}</Text>
            </View>
            <VStack>
              <Text color={'text.500'}>{item.count} voucher</Text>
              <Text color={item?.expire ? 'red.100' : 'text.100'}>
                Ngày hết hạn: {item.expireDate}
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default VoucherItem;
