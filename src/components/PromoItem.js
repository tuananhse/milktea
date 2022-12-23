import {Box, HStack, Image, Text, View, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const PromoItem = props => {
  const {item, onPress} = props;
  const getColorStatus = status => {
    if (status === 'medium') {
      return 'amber.500';
    }
    if (status === 'end') {
      return 'red.100';
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        mb={2}
        key={item.id}
        rounded={'lg'}
        borderWidth={0.5}
        borderColor={'text.200'}>
        <HStack>
          <View>
            <Image
              style={{
                width: 100,
                height: 100,
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
              <Text color={getColorStatus(item.expireStatus)}>
                {item.expire}
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default PromoItem;
