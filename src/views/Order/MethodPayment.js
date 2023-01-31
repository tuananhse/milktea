import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import commonStyle from '../../styles/commonStyle';
import {
  ScrollView,
  VStack,
  Text,
  HStack,
  View,
  Badge,
  Heading,
  Input,
  Box,
  AspectRatio,
  Image,
  Stack,
  FlatList,
  Divider,
  Progress,
  Center,
  Radio,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MethodPayment = ({route}) => {
  const navigation = useNavigation();
  const [value, setValue] = useState('one');

  const onChangeMenthod = nextValue => {
    setValue(nextValue);
    route.params.onReturn(nextValue);
    navigation.goBack();
  };

  return (
    <Container>
      <VStack flex={1} style={commonStyle.flex}>
        <HStack p={4} alignItems={'center'} justifyContent={'space-between'}>
          <Heading color={'text.100'}>Phương thức thanh toán</Heading>
          <HStack space={2} alignItems={'flex-start'}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={24} />
            </TouchableOpacity>
          </HStack>
        </HStack>
        <VStack space={4}>
          <VStack bg={'gray.100'} p={4}>
            <Text>
              Vui lòng chọn phương thức thanh toán phù hơp cho đơn hàng của bạn
            </Text>
          </VStack>
          <VStack p={4} space={2}>
            <Text fontWeight={'bold'} fontSize={18}>
              Cách thanh toán
            </Text>
            <Radio.Group
              name="myRadioGroup"
              value={value}
              onChange={nextValue => {
                onChangeMenthod(nextValue);
              }}>
              <VStack space={4}>
                <Radio value="Tiền mặt" my="1">
                  <HStack space={2} alignItems={'center'}>
                    <Image
                      alt="img"
                      source={{
                        uri: 'https://png.pngtree.com/png-clipart/20191122/original/pngtree-cash-icon-flat-style-png-image_5179190.jpg',
                      }}
                      style={commonStyle.iconSmall}
                    />
                    <Text fontSize={16}>Tiền mặt (Cash)</Text>
                  </HStack>
                </Radio>
                <Radio value="Paypal" my="1">
                  <HStack space={2} alignItems={'center'}>
                    <Image
                      alt="img"
                      source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png',
                      }}
                      style={commonStyle.iconSmall}
                      resizeMode="contain"
                    />
                    <Text fontSize={16}>Paypal</Text>
                  </HStack>
                </Radio>
                <Radio value="Mastercard,VISA" my="1">
                  <HStack space={2} alignItems={'center'}>
                    <Image
                      alt="img"
                      source={{
                        uri: 'https://www.citypng.com/public/uploads/preview/mastercard-visa-cards-logos-icons-216354155388k7evd7aso.png',
                      }}
                      resizeMode="contain"
                      style={commonStyle.iconSmall}
                    />
                    <Text fontSize={16}>Mastercard, VISA</Text>
                  </HStack>
                </Radio>
                <Radio value="Ngân hàng" my="1">
                  <HStack space={2} alignItems={'center'}>
                    <Image
                      alt="img"
                      source={{
                        uri: 'https://png.pngtree.com/png-clipart/20190705/original/pngtree-banking-card-vector-icon-png-image_4279420.jpg',
                      }}
                      style={commonStyle.iconSmall}
                    />
                    <Text fontSize={16}>Thẻ ngân hàng (Credit Card)</Text>
                  </HStack>
                </Radio>
              </VStack>
            </Radio.Group>
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default MethodPayment;
