import {useNavigation} from '@react-navigation/native';
import {View, Text, Center, Button, VStack, Heading, HStack} from 'native-base';
import React from 'react';
import {Image} from 'react-native';
import Container from '../../components/Container';
import commonStyle from '../../styles/commonStyle';
import {IMG} from '../../styles/images';
const OrderConfirm = () => {
  const navigation = useNavigation();
  const onPressGoHome = () => {
    navigation.push('Main');
  };

  const onPressHistory = () => {
    navigation.push('History');
  };

  return (
    <Container>
      <VStack flex={1} justifyContent={'center'} alignItems={'center'}>
        <VStack
          flex={1}
          space={4}
          justifyContent={'center'}
          alignItems={'center'}>
          <Image
            style={commonStyle.icOrderSuccess}
            source={IMG.orderSuccess}
            resizeMode="contain"
          />
          <Heading color={'text.100'}>Đặt hàng thành công</Heading>
        </VStack>
        <VStack space={4} flex={1} alignItems={'center'}>
          <Text color={'text.100'} fontSize="lg">
            Cảm ơn bạn đã đặt hàng tại Milk Tea
          </Text>
          <HStack space={4} m={4}>
            <Button flex={1} bg={'primary.100'} onPress={() => onPressGoHome()}>
              <Text color={'text.0'} fontWeight={'semibold'}>
                Quay về trang chủ
              </Text>
            </Button>
            <Button
              variant={'outline'}
              flex={1}
              onPress={() => onPressHistory()}>
              <Text color={'text.100'} fontWeight={'semibold'}>
                Đơn mua
              </Text>
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default OrderConfirm;
