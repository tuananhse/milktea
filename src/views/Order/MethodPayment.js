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
                    <Text fontSize={16}>Tiền mặt</Text>
                  </HStack>
                </Radio>
                <Radio value="Momo" my="1">
                  <HStack space={2} alignItems={'center'}>
                    <Image
                      alt="img"
                      source={{
                        uri: 'https://file.hstatic.net/1000273026/article/momo_logo_ee7f0396e57f4820a504f7ab63e9eade_1024x1024.png',
                      }}
                      style={commonStyle.iconSmall}
                    />
                    <Text fontSize={16}>Momo</Text>
                  </HStack>
                </Radio>
                <Radio value="ZaloPay" my="1">
                  <HStack space={2} alignItems={'center'}>
                    <Image
                      alt="img"
                      source={{
                        uri: 'https://play-lh.googleusercontent.com/gC9aHkRpVbz3QRSU-oTp8TFffwWucm7edvUCANReHEvK88MByol_5W33NGr0-t9BZhk=w480-h960-rw',
                      }}
                      style={commonStyle.iconSmall}
                    />
                    <Text fontSize={16}>ZaloPay</Text>
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
                    <Text fontSize={16}>Thẻ ngân hàng</Text>
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
