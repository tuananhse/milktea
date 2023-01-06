import React from 'react';
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
  Divider,
} from 'native-base';
import {TouchableOpacity, Image} from 'react-native';

import {keyExtractor} from '../../../utils';
import commonStyle from '../../styles/commonStyle';
const data = [
  {
    id: 1,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    createdAt: '08:05 - 26/10/2022',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    createdAt: '08:05 - 26/10/2022',

    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    createdAt: '08:05 - 26/10/2022',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 1,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    createdAt: '08:05 - 26/10/2022',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    createdAt: '08:05 - 26/10/2022',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    createdAt: '08:05 - 26/10/2022',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
];
const renderItem = ({item, index}) => {
  const onPressSelect = () => {};

  return (
    <Box key={index} flex={1}>
      <TouchableOpacity onPress={() => onPressSelect()}>
        <Box m={2} p={2}>
          <HStack space={2}>
            <Box rounded="lg" overflow="hidden">
              <Image
                style={commonStyle.circleWhite}
                resizeMode="contain"
                source={{uri: item?.img}}
                alt="image"
              />
            </Box>
            <HStack justifyContent={'space-between'} flex={1}>
              <Stack space={2}>
                <Heading size="xs" numberOfLines={2} color={'text.100'}>
                  {item?.name}
                </Heading>
                <Text
                  fontSize={'md'}
                  numberOfLines={1}
                  color={'text.600'}
                  fontWeight="400">
                  {item?.createdAt}
                </Text>
              </Stack>
              <VStack justifyContent={'center'}>
                <Text
                  fontSize={'md'}
                  numberOfLines={1}
                  color={'text.600'}
                  fontWeight="400">
                  {item?.price}
                </Text>
              </VStack>
            </HStack>
          </HStack>
        </Box>
      </TouchableOpacity>
      <Divider bg={'primary.100'} h={0.6} />
    </Box>
  );
};
const HistoryList = () => {
  return (
    <VStack mt={4}>
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

export default HistoryList;
