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
} from 'native-base';
import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {keyExtractor} from '../../utils';
import {IMG} from '../styles/images';
const fakeData = [
  {
    id: 1,
    name: 'Thứ 3 quà tặng to đây bạn ơi',
    description: 'Thứ 3 quà tặng to đây bạn ơi',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
    createdAt: '01/10',
  },
  {
    id: 2,
    name: 'Mua một tặng 1',
    description: 'Mua một tặng 1',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
    createdAt: '01/10',
  },
  {
    id: 2,
    name: 'Thứ 3 quà tặng to đây bạn ơi',
    description: 'Thứ 3 quà tặng to đây bạn ơi',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
    createdAt: '01/10',
  },
];
const NewsList = () => {
  const onPressSelect = val => {};
  const renderItem = ({item, index}) => {
    return (
      <Box key={index} maxW="50%">
        <TouchableOpacity onPress={() => onPressSelect()}>
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
            <Stack space={2} pt={2}>
              <Stack space={2}>
                <Heading size="xs" numberOfLines={2} color={'text.100'}>
                  {item?.name}
                </Heading>
              </Stack>

              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between">
                <HStack alignItems="center">
                  <Text numberOfLines={1} color={'text.600'} fontWeight="400">
                    {item?.createdAt}
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };

  return (
    <VStack space={2}>
      <Text fontWeight={'semibold'} color={'text.100'} fontSize="xl">
        Ưu đãi mới
      </Text>
      <VStack>
        <Box flex={1}>
          <FlatList
            renderItem={renderItem}
            key="brand-product"
            data={fakeData}
            keyExtractor={keyExtractor}
            numColumns={2}
            horizontal={false}
          />
        </Box>
      </VStack>
    </VStack>
  );
};

export default NewsList;
