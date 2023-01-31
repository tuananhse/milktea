import {useNavigation} from '@react-navigation/native';
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
  Button,
} from 'native-base';
import React from 'react';
import {TouchableOpacity, useWindowDimensions} from 'react-native';

import {keyExtractor} from '../../../utils';
import Container from '../../components/Container';
import Header from '../../components/Header';
const data = [
  {
    id: 1,
    name: 'The Milk tea',
    description: 'Miễn phí 1 trà trái cây',
    price: '65.000đ',
    point: '1232',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'The Milk tea',
    description: 'Miễn phí 1 trà trái cây',
    price: '65.000đ',
    point: '1000',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 3,
    name: 'The Milk tea',
    description: 'Miễn phí 1 trà trái cây',
    price: '65.000đ',
    point: '1232',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 4,
    name: 'The Milk tea',
    description: 'Miễn phí 1 trà trái cây',
    price: '65.000đ',
    point: '1111',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 5,
    name: 'The Milk tea',
    description: 'Miễn phí 1 trà trái cây',
    price: '65.000đ',
    point: '1000',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 6,
    name: 'The Milk tea',
    description: 'Miễn phí 1 trà trái cây',
    price: '65.000đ',
    point: '999',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
];
const AllPromo = ({route}) => {
  const {title} = route.params;
  const navigation = useNavigation();

  const onPressSelectPromo = val => {
    navigation.navigate('RedeemPromo', {item: val});
  };

  const renderItemThree = ({item, ix}) => {
    return (
      <Box key={ix} w="full" mt={2}>
        <TouchableOpacity onPress={() => onPressSelectPromo(item)}>
          <Box bg={'text.0'} rounded="lg" px={2}>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
              <View flex={'0'}>
                <Box rounded="lg" overflow="hidden" w={'20'}>
                  <AspectRatio w="100%" ratio={16 / 16}>
                    <Image
                      resizeMode="contain"
                      source={{uri: item?.img}}
                      alt="image"
                    />
                  </AspectRatio>
                </Box>
              </View>
              <HStack flex={'1'} py={2} px={2} justifyContent={'space-between'}>
                <VStack>
                  <Text
                    fontSize={'md'}
                    numberOfLines={3}
                    color={'text.600'}
                    fontWeight="400">
                    The milk tea
                  </Text>
                  <Text fontSize={'md'} numberOfLines={3} color={'text.600'}>
                    {item.description}
                  </Text>
                </VStack>
                <VStack alignItems={'center'}>
                  <Text
                    fontSize={'md'}
                    rounded={'lg'}
                    px={2}
                    numberOfLines={1}
                    color={'green.500'}
                    bg={'green.100'}
                    fontWeight="400">
                    {item?.point}
                  </Text>
                  <Text
                    fontSize={'sm'}
                    numberOfLines={1}
                    color={'text.600'}
                    fontWeight="400">
                    POINT
                  </Text>
                </VStack>
              </HStack>
            </HStack>
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };

  return (
    <Container>
      <Header title={title} />
      <VStack flex={1} bg={'gray.100'} pt={2}>
        <FlatList
          renderItem={renderItemThree}
          data={data}
          keyExtractor={keyExtractor}
          horizontal={false}
        />
      </VStack>
    </Container>
  );
};

export default AllPromo;
