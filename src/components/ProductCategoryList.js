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
  ScrollView,
} from 'native-base';
import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {keyExtractor} from '../../utils';

const data = [
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
const ProductCategoryList = () => {
  const navigation = useNavigation();
  const onPressSelect = val => {
    navigation.navigate('ProductDetail');
  };
  const renderItem = ({item, index}) => {
    return (
      <Box key={index} flex={1}>
        <TouchableOpacity onPress={() => onPressSelect()}>
          <Box m={2}>
            <HStack space={4}>
              <Box maxW={'40'} rounded="lg" overflow="hidden">
                <AspectRatio w="100%" ratio={16 / 12}>
                  <Image
                    resizeMode="contain"
                    source={{uri: item?.img}}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <VStack space={2} justifyContent={'space-between'}>
                <Stack space={2}>
                  <Heading size="xs" numberOfLines={2} color={'text.100'}>
                    {item?.name}
                  </Heading>
                  <Text
                    fontSize={'md'}
                    numberOfLines={1}
                    color={'text.600'}
                    fontWeight="400">
                    {item?.price}
                  </Text>
                </Stack>

                <VStack mt={2}>
                  <Button bg={'primary.100'}>
                    <Text fontWeight={'bold'} color={'text.0'}>
                      Chọn
                    </Text>
                  </Button>
                </VStack>
              </VStack>
            </HStack>
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };
  return (
    <VStack m={2}>
      <FlatList
        renderItem={renderItem}
        key="brand-product"
        data={data}
        keyExtractor={keyExtractor}
        horizontal={false}
        numColumns={1}
      />
    </VStack>
  );
};

export default ProductCategoryList;
