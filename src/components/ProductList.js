import {useNavigation} from '@react-navigation/native';
import {
  AspectRatio,
  Box,
  Button,
  FlatList,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {Image} from 'react-native';
import {keyExtractor} from '../../utils';

const data = [
  {
    id: 1,
    name: 'Trà sữa chân trâu',
    price: '65.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'Trà vải',
    price: '39.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 1,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
];
const ProductList = props => {
  const navigation = useNavigation();
  const onPressSelect = () => {
    navigation.navigate('ProductDetail');
  };

  const renderItem = ({item, index}) => {
    return (
      <Box key={index} maxW="40">
        <Box m={2}>
          <Box rounded="lg" overflow="hidden">
            <AspectRatio w="100%" ratio={16 / 12}>
              <Image
                resizeMode="contain"
                source={{uri: item?.img}}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack space={1} pt={2}>
            <Stack space={2}>
              <Heading size="xs" numberOfLines={2} color={'text.100'}>
                {item?.name}
              </Heading>
            </Stack>

            <HStack alignItems="center" justifyContent="space-between">
              <HStack alignItems="center">
                <Text fontSize={'sm'} numberOfLines={1} color={'text.500'}>
                  {item?.price}
                </Text>
              </HStack>
            </HStack>
            <VStack mt={2}>
              <Button
                size={'xs'}
                padding={'1'}
                bg={'primary.100'}
                onPress={() => onPressSelect()}>
                <Text fontWeight={'semibold'} color={'text.0'}>
                  Chọn
                </Text>
              </Button>
            </VStack>
          </Stack>
        </Box>
      </Box>
    );
  };
  return (
    <VStack space={2}>
      <Text fontWeight={'semibold'} color={'text.100'} fontSize="md">
        Sản phẩm HOT
      </Text>
      <FlatList
        renderItem={renderItem}
        key="brand-product"
        data={data}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </VStack>
  );
};

export default ProductList;
