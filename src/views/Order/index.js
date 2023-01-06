import {
  HStack,
  View,
  Text,
  VStack,
  Box,
  Heading,
  ScrollView,
  AspectRatio,
  Input,
  Button,
} from 'native-base';
import React, {useState} from 'react';
import Container from '../../components/Container';
import {Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyle from '../../styles/commonStyle';
import {GRAY_LIGHT} from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';

const Order = () => {
  const navigation = useNavigation();
  const [menthodPayment, setMenthodPayment] = useState();
  const onPressOrder = () => {
    navigation.navigate('OrderConfirm');
  };

  console.log('OrderOrder', navigation.get);

  const goToCoupon = () => {
    navigation.navigate('AddPromoCode');
  };

  const onPressSelectPayment = () => {
    navigation.navigate('MethodPayment', {
      onReturn: item => {
        setMenthodPayment(item);
      },
    });
  };

  return (
    <Container>
      <HStack alignItems={'center'} justifyContent={'space-between'} p={4}>
        <VStack justifyContent={'center'}>
          <Box alignItems="flex-start">
            <Text color={'text.100'} fontSize={'md'}>
              Xoá
            </Text>
          </Box>
        </VStack>
        <VStack justifyContent={'center'}>
          <Box alignItems="flex-start">
            <Heading color={'text.100'}>Xác nhận đơn hàng</Heading>
          </Box>
        </VStack>

        <HStack space={2} alignItems={'flex-start'}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="close-outline" size={24} />
          </TouchableOpacity>
        </HStack>
      </HStack>
      <VStack flex={1}>
        <VStack flex={9}>
          <ScrollView>
            <VStack bg={GRAY_LIGHT} flex={1}>
              <VStack flex={1}>
                <TouchableOpacity>
                  <HStack
                    p={4}
                    alignItems={'center'}
                    bg={'text.0'}
                    justifyContent={'space-between'}>
                    <VStack>
                      <Text color="text.100" fontWeight={'semibold'}>
                        Địa chỉ
                      </Text>
                      <Text color="text.100">
                        32/15 đường DX 12, Phường 4, Quận gò vấp, TP.Hồ Chí Minh
                      </Text>
                    </VStack>
                    <Icon name="chevron-forward-outline" size={18} />
                  </HStack>
                </TouchableOpacity>

                <VStack p={4} bg={'text.0'} mt={2}>
                  <Text color="text.100" fontWeight={'semibold'} mb={4}>
                    Sản phẩm đã chọn
                  </Text>
                  <HStack space={2}>
                    <AspectRatio>
                      <Image
                        alt="image"
                        resizeMode="contain"
                        source={{
                          uri: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
                        }}
                      />
                    </AspectRatio>
                    <VStack alignItems={'flex-start'}>
                      <Text color={'text.100'} fontWeight={'semibold'}>
                        x1 Trà sữa chân châu đường đen
                      </Text>
                      <Text color={'text.500'}>Vừa</Text>
                    </VStack>
                    <VStack alignItems={'flex-start'}>
                      <Text color={'text.100'}>35.000đ</Text>
                    </VStack>
                  </HStack>
                </VStack>
                <VStack p={4} bg={'text.0'} mt={2}>
                  <Text color="text.100" fontWeight={'semibold'} mb={4}>
                    Tổng cộng
                  </Text>
                  <HStack space={2} justifyContent={'space-between'} mb={4}>
                    <VStack>
                      <Text color={'text.100'} fontWeight={'semibold'}>
                        Thành tiền
                      </Text>
                    </VStack>
                    <VStack alignItems={'flex-start'}>
                      <Text color={'text.100'}>35.000đ</Text>
                    </VStack>
                  </HStack>
                  <VStack bg={'text.0'} mb={4}>
                    <TouchableOpacity onPress={() => goToCoupon()}>
                      <HStack justifyContent={'space-between'}>
                        <VStack>
                          <Text color={'primary.100'} fontWeight={'semibold'}>
                            Mã khuyến mãi
                          </Text>
                        </VStack>
                        <VStack>
                          <Icon name="chevron-forward-outline" size={18} />
                        </VStack>
                      </HStack>
                    </TouchableOpacity>
                  </VStack>
                  <HStack space={2} justifyContent={'space-between'}>
                    <VStack>
                      <Text color={'text.100'} fontWeight={'semibold'}>
                        Số tiền thanh toán
                      </Text>
                    </VStack>
                    <VStack alignItems={'flex-start'}>
                      <Text color={'text.100'}>35.000đ</Text>
                    </VStack>
                  </HStack>
                </VStack>
                <VStack p={4} bg={'text.0'} mt={2}>
                  <Text color="text.100" fontWeight={'semibold'} mb={4}>
                    Phương thức thanh toán
                  </Text>
                  <TouchableOpacity onPress={() => onPressSelectPayment()}>
                    <HStack justifyContent={'space-between'}>
                      {menthodPayment ? (
                        <Text color={'primary.100'} fontWeight={'semibold'}>
                          {menthodPayment}
                        </Text>
                      ) : (
                        <Text color={'primary.100'} fontWeight={'semibold'}>
                          Chọn phương thức thanh toán
                        </Text>
                      )}

                      <Icon name="chevron-forward-outline" size={18} />
                    </HStack>
                  </TouchableOpacity>
                </VStack>
              </VStack>
            </VStack>
          </ScrollView>
        </VStack>
        <VStack
          flex={1}
          bg={'primary.50'}
          justifyContent={'center'}
          pl={4}
          pr={4}>
          <HStack justifyContent={'space-between'}>
            <VStack>
              <Text color={'text.100'} fontWeight={'semibold'}>
                1 sản phẩm
              </Text>
              <Text color={'text.100'} fontWeight={'semibold'}>
                35.000 đ
              </Text>
            </VStack>
            <VStack>
              <Button bg={'primary.100'} onPress={() => onPressOrder()}>
                <Text color={'text.0'} fontWeight={'semibold'}>
                  Đặt hàng
                </Text>
              </Button>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Order;
