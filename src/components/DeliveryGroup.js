import {useNavigation} from '@react-navigation/native';
import {View, Text, HStack, Image, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import commonStyle from '../styles/commonStyle';
import {IMG} from '../styles/images';
const DeliveryGroup = () => {
  const navigation = useNavigation();
  const onPressGoToCategory = () => {
    navigation.navigate('Main', {screen: 'Order'});
  };
  return (
    <HStack
      borderWidth={0.5}
      p={2}
      m={2}
      borderColor={'text.200'}
      borderRadius={18}>
      <VStack flex={1}>
        <TouchableOpacity onPress={() => onPressGoToCategory()}>
          <VStack flex={1} justifyItems={'center'} alignItems={'center'}>
            <Image style={commonStyle.iconCircle} source={IMG.trasua} />
            <Text p={2}>Dùng tại chỗ</Text>
          </VStack>
        </TouchableOpacity>
      </VStack>
      <VStack flex={1}>
        <TouchableOpacity onPress={() => onPressGoToCategory()}>
          <VStack flex={1} justifyItems={'center'} alignItems={'center'}>
            <Image style={commonStyle.iconCircle} source={IMG.trasua} />
            <Text p={2}>Mua mang đi</Text>
          </VStack>
        </TouchableOpacity>
      </VStack>
    </HStack>
  );
};

export default DeliveryGroup;
