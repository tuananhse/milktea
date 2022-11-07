import {useNavigation} from '@react-navigation/native';
import {
  View,
  VStack,
  Text,
  Stack,
  Box,
  AspectRatio,
  HStack,
  Heading,
  Center,
  FlatList,
  Button,
} from 'native-base';
import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {keyExtractor} from '../../utils';
import commonStyle from '../styles/commonStyle';

const data = [
  {
    id: 1,
    createAt: '29/10/2022, 11:55',
    address: '224 Võ văn tần',
    name: 'Trà sữa chân trâu',
    price: '65.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    createAt: '27/10/2022, 02:55',
    address: '224 Võ văn tần',

    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    createAt: '25/10/2022, 02:55',
    address: '224 Võ văn tần',

    name: 'Trà vải',
    price: '39.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 1,
    createAt: '25/10/2022, 02:55',
    address: '224 Võ văn tần',

    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    createAt: '25/10/2022, 09:55',
    address: '224 Võ văn tần',

    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    createAt: '25/8/2022, 12:55',
    address: '224 Võ văn tần',
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
];
const ProductListHistory = () => {
  const navigation = useNavigation();
  const onPressSelect = () => {
    navigation.navigate('ProductDetail');
  };

  const renderItem = ({item, index}) => {
    return (
      <HStack space={4} flex m={2} justifyContent={'space-between'}>
        <HStack space={4}>
          <Image
            style={commonStyle.iconCircle}
            resizeMode="contain"
            source={{uri: item?.img}}
            alt="image"
          />
          <VStack>
            <Text>{item.createAt}</Text>
            <Text>{item.address}</Text>
            <Text fontSize={'xs'}>{item.name}</Text>

            <Text fontWeight={'semibold'}>{item.price}</Text>
          </VStack>
        </HStack>
        <VStack>
          <Button bg={'primary.100'} onPress={() => onPressSelect()}>
            <Text fontWeight={'bold'} color={'text.0'}>
              Đặt lại
            </Text>
          </Button>
        </VStack>
      </HStack>
    );
  };
  return (
    <VStack space={2}>
      <Text fontWeight={'semibold'} color={'text.100'} fontSize="xl">
        Bạn có muốn đặt lại đơn
      </Text>
      <FlatList
        renderItem={renderItem}
        key="brand-product"
        data={data}
        keyExtractor={keyExtractor}
      />
    </VStack>
  );
};

export default ProductListHistory;
