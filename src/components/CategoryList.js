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
import commonStyle from '../styles/commonStyle';

const data = [
  {
    id: 1,
    name: 'Cà phê',
    price: '55.000đ',
    img: 'https://image.similarpng.com/very-thumbnail/2021/09/Coffee-shop-logo-design-template-on-transparent-background-PNG.png',
  },
  {
    id: 2,
    name: 'CloudFree',
    price: '55.000đ',
    img: 'https://image.similarpng.com/very-thumbnail/2022/02/Glass-cup-of-hot-tea-with-saucer-isolated-on-transparent-background-PNG.png',
  },
  {
    id: 2,
    name: 'CloudTea',
    price: '55.000đ',
    img: 'https://image.similarpng.com/very-thumbnail/2022/02/Glass-cup-of-hot-tea-with-saucer-isolated-on-transparent-background-PNG.png',
  },
  {
    id: 1,
    name: 'Hi-tea',
    price: '55.000đ',
    img: 'https://image.similarpng.com/very-thumbnail/2022/02/Glass-cup-of-hot-tea-with-saucer-isolated-on-transparent-background-PNG.png',
  },
  {
    id: 2,
    name: 'Trà trái cây - Trà sữa',
    price: '55.000đ',
    img: 'https://image.similarpng.com/very-thumbnail/2022/02/Glass-cup-of-hot-ginger-tea-with-ginger-rhizome-sliced-isolated-on-transparent-background-PNG.png',
  },
  {
    id: 2,
    name: 'Thưởng thức tại nhà',
    price: '55.000đ',
    img: 'https://image.similarpng.com/very-thumbnail/2021/09/Coffee-shop-logo-design-template-on-transparent-background-PNG.png',
  },
];
const CategoryList = props => {
  const {onPressSelect} = props;

  const renderItem = ({item, index}) => {
    return (
      <Box key={index} flex={1} w={'1/3'} justifyContent={'flex-start'}>
        <TouchableOpacity onPress={onPressSelect}>
          <Box m={2} alignItems={'center'}>
            <HStack>
              <Box rounded="lg" overflow="hidden">
                <View alignItems={'center'}>
                  <Image
                    bg={'text.200'}
                    resizeMode="contain"
                    source={{uri: item?.img}}
                    alt="image"
                    style={commonStyle.circleMediumWhite}
                  />
                </View>
                <VStack mt={2}>
                  <Text
                    textAlign={'center'}
                    fontFamily={'mono'}
                    color={'text.100'}>
                    {item?.name}
                  </Text>
                </VStack>
              </Box>
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
        numColumns={3}
      />
    </VStack>
  );
};

export default CategoryList;
