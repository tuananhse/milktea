import {useNavigation} from '@react-navigation/native';
import {
  AspectRatio,
  Badge,
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  Image,
  Progress,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {memo, useState} from 'react';
import {StyleSheet, TouchableOpacity, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import {keyExtractor} from '../../../utils';
import Container from '../../components/Container';
import MemberCard from '../../components/MemberCard';
import {GRAY_DARK, PRIMARY, PRIMARY_LIGHT, WHITE} from '../../styles/colors';
import commonStyle from '../../styles/commonStyle';
import {IMG} from '../../styles/images';
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

const ChangePointTab = props => {
  const navigation = useNavigation();

  const onPressSelectPromo = val => {
    navigation.navigate('RedeemPromo', {item: val});
  };

  const onPressViewAll = text => {
    navigation.navigate('AllPromo', {title: text});
  };

  const renderItem = ({item, ix}) => {
    return (
      <Box key={ix} maxW="80" mt={4}>
        <TouchableOpacity onPress={() => onPressSelectPromo(item)}>
          <Box mr={4} bg={'text.0'} rounded="lg">
            <Box rounded="lg" overflow="hidden" shadow={'2'}>
              <AspectRatio w="100%" ratio={16 / 12}>
                <Image
                  resizeMode="contain"
                  source={{uri: item?.img}}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <HStack
              py={4}
              px={2}
              alignItems="center"
              justifyContent="space-between">
              <VStack>
                <Heading size="xs" numberOfLines={2} color={'text.100'}>
                  {item?.name}
                </Heading>
                <Text
                  fontSize={'md'}
                  numberOfLines={1}
                  color={'text.600'}
                  fontWeight="400">
                  {item?.description}
                </Text>
              </VStack>
              <VStack alignItems="center">
                <Box rounded={'2xl'} bg={'green.100'}>
                  <Text
                    fontSize={'md'}
                    px={2}
                    numberOfLines={1}
                    color={'green.500'}
                    fontWeight="400">
                    {item?.point}
                  </Text>
                </Box>
                <Text
                  fontSize={'sm'}
                  numberOfLines={1}
                  color={'text.600'}
                  fontWeight="400">
                  POINT
                </Text>
              </VStack>
            </HStack>
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };
  const renderItemSecond = ({item, ix}) => {
    return (
      <Box key={ix} maxW="40" mt={4}>
        <TouchableOpacity onPress={() => onPressSelectPromo(item)}>
          <Box mr={4} bg={'text.0'} rounded="lg">
            <Box rounded="lg" overflow="hidden" shadow={'2'}>
              <AspectRatio w="100%" ratio={16 / 12}>
                <Image
                  resizeMode="contain"
                  source={{uri: item?.img}}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <VStack py={2} px={2} alignItems="center">
              <VStack>
                <Text
                  textAlign={'center'}
                  fontSize={'md'}
                  numberOfLines={3}
                  color={'text.600'}
                  fontWeight="400">
                  {item?.description}
                </Text>
              </VStack>
              <VStack alignItems="center">
                <Box rounded={'2xl'} bg={'green.100'}>
                  <Text
                    fontSize={'md'}
                    px={2}
                    numberOfLines={1}
                    color={'green.500'}
                    fontWeight="400">
                    {item?.point}
                  </Text>
                </Box>

                <Text
                  fontSize={'sm'}
                  numberOfLines={1}
                  color={'text.600'}
                  fontWeight="400">
                  POINT
                </Text>
              </VStack>
            </VStack>
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };

  const renderItemThree = ({item, ix}) => {
    return (
      <Box key={ix} w="full" mt={4}>
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
                    COMPANY NAME
                  </Text>
                  <Text fontSize={'md'} numberOfLines={3} color={'text.600'}>
                    {item.description}
                  </Text>
                </VStack>
                <VStack alignItems={'center'}>
                  <Box rounded={'2xl'} bg={'green.100'}>
                    <Text
                      fontSize={'md'}
                      px={2}
                      numberOfLines={1}
                      color={'green.500'}
                      fontWeight="400">
                      {item?.point}
                    </Text>
                  </Box>

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
    <ScrollView>
      <VStack flex={1} space={2} bg={'gray.100'}>
        <VStack px={2} mt={4}>
          <HStack justifyContent={'space-between'}>
            <View>
              <Text color={'text.100'} fontWeight={'semibold'}>
                Nổi bật
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => onPressViewAll('Nổi bật')}>
                <Box bg={'primary.50'} rounded={'2xl'} px={3} py={1}>
                  <Text color={'primary.100'} fontWeight={'semibold'}>
                    Xem tất cả
                  </Text>
                </Box>
              </TouchableOpacity>
            </View>
          </HStack>
          <VStack flex={1}>
            <FlatList
              renderItem={renderItem}
              key="brand-product"
              data={data}
              keyExtractor={keyExtractor}
              horizontal
            />
          </VStack>
        </VStack>
        <VStack px={2} mt={4}>
          <HStack justifyContent={'space-between'}>
            <View>
              <Text color={'text.100'} fontWeight={'semibold'}>
                Từ Milk tea
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => onPressViewAll('Từ Milk tea')}>
                <Box bg={'primary.50'} rounded={'2xl'} px={3} py={1}>
                  <Text color={'primary.100'} fontWeight={'semibold'}>
                    Xem tất cả
                  </Text>
                </Box>
              </TouchableOpacity>
            </View>
          </HStack>
          <VStack flex={1}>
            <FlatList
              renderItem={renderItemSecond}
              key="brand-product"
              data={data}
              keyExtractor={keyExtractor}
              horizontal
            />
          </VStack>
        </VStack>
        <VStack px={2} mt={4}>
          <HStack justifyContent={'space-between'}>
            <View>
              <Text color={'text.100'} fontWeight={'semibold'}>
                Từ đối tác
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => onPressViewAll('Từ đối tác')}>
                <Box bg={'primary.50'} rounded={'2xl'} px={3} py={1}>
                  <Text color={'primary.100'} fontWeight={'semibold'}>
                    Xem tất cả
                  </Text>
                </Box>
              </TouchableOpacity>
            </View>
          </HStack>
          <VStack flex={1}>
            <FlatList
              renderItem={renderItemThree}
              key="brand-product"
              data={data}
              keyExtractor={keyExtractor}
              horizontal={false}
            />
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default memo(ChangePointTab);
