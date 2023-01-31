import React, {useState} from 'react';
import Container from '../../components/Container';
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
import commonStyle from '../../styles/commonStyle';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MemberCard from '../../components/MemberCard';
import {
  GRAY_DARK,
  GRAY_LIGHT,
  PRIMARY,
  PRIMARY_LIGHT,
  TEXT_CATEGORY_TITLE,
  TEXT_LABEL,
  TEXT_PLACEHOLDER,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  WHITE,
} from '../../styles/colors';
import {IMG} from '../../styles/images';
import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {keyExtractor} from '../../../utils';

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

const Coupon = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Tích điểm'},
    {key: 'second', title: 'Đổi ưu đãi'},
  ]);

  const onPressViewAll = text => {
    navigation.navigate('AllPromo', {title: text});
  };

  const FirstRoute = () => (
    <ScrollView>
      <VStack flex={1} bg={'gray.100'}>
        <Box bg={'text.0'} pb={4} rounded={'2xl'} mt={4}>
          <View mt={-4}>
            <MemberCard enablePoint />
          </View>
          <VStack space={2} mt={2} mx={4}>
            <Text fontWeight={'semibold'}>VÀNG</Text>
            <Progress value={45} colorScheme={'light'} bg={'text.200'} />
            <Text>
              2160 POINT tích luỹ từ ngày 20/12/2021-20/12/2022 của bạn sẽ hết
              hạn vào ngày 20/12/2022. Hãy dùng POINT này để đổi ưu đãi nhé.
            </Text>
          </VStack>
        </Box>
        <VStack space={3} mt={4} mx={4} pb={4}>
          <HStack space={3} justifyContent="center">
            <Center flex={1} h="24" w="50%" bg="text.0" rounded="md" shadow={3}>
              <TouchableOpacity onPress={() => onPressChangeVoucher()}>
                <VStack flex={1} alignItems={'center'} justifyContent="center">
                  <Image
                    source={IMG.coupon}
                    resizeMode="contain"
                    style={commonStyle.icMedium}
                  />
                  <Text fontWeight={'semibold'}>Đổi ưu đãi</Text>
                </VStack>
              </TouchableOpacity>
            </Center>
            <Center flex={1} h="24" w="50%" bg="text.0" rounded="md" shadow={3}>
              <TouchableOpacity onPress={() => onPressMyVoucher()}>
                <VStack flex={1} alignItems={'center'} justifyContent="center">
                  <Image
                    source={IMG.giftbox}
                    resizeMode="contain"
                    style={commonStyle.icMedium}
                  />
                  <Text fontWeight={'semibold'}>Voucher của bạn</Text>
                </VStack>
              </TouchableOpacity>
            </Center>
          </HStack>
          <HStack space={3} justifyContent="center">
            <Center flex={1} h="24" w="50%" bg="text.0" rounded="md" shadow={3}>
              <TouchableOpacity onPress={() => onPressHistoryPoint()}>
                <VStack flex={1} alignItems={'center'} justifyContent="center">
                  <Image
                    source={IMG.history}
                    resizeMode="contain"
                    style={commonStyle.icMedium}
                  />
                  <Text fontWeight={'semibold'}>Lịch sử POINT</Text>
                </VStack>
              </TouchableOpacity>
            </Center>
            <Center flex={1} h="24" w="50%" bg="text.0" rounded="md" shadow={3}>
              <TouchableOpacity onPress={() => onPressMyPolicy()}>
                <VStack flex={1} alignItems={'center'} justifyContent="center">
                  <Image
                    source={IMG.encrypted}
                    resizeMode="contain"
                    style={commonStyle.icMedium}
                  />
                  <Text fontWeight={'semibold'}>Quyền lợi của bạn</Text>
                </VStack>
              </TouchableOpacity>
            </Center>
          </HStack>
        </VStack>
      </VStack>
    </ScrollView>
  );

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

  const onPressSelectPromo = val => {
    navigation.navigate('RedeemPromo', {item: val});
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
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };

  const SecondRoute = () => (
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

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      tabStyle={{width: 'auto'}}
      {...props}
      renderLabel={({route, focused}) => (
        <Text
          fontWeight={'semibold'}
          style={{
            color: focused ? PRIMARY : GRAY_DARK,
            backgroundColor: focused ? PRIMARY_LIGHT : WHITE,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 18,
            minWidth: 80,
          }}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{
        backgroundColor: WHITE,
      }}
      style={{backgroundColor: WHITE}}
    />
  );

  const onPressChangeVoucher = () => {
    setIndex(1);
  };

  const onPressMyVoucher = () => {
    navigation.navigate('MyVoucher');
  };

  const onPressHistoryPoint = () => {};

  const onPressMyPolicy = () => {
    navigation.navigate('MyPolicy');
  };

  return (
    <Container>
      <VStack flex={1}>
        <HStack mx={4} alignItems={'center'} justifyContent={'space-between'}>
          <Heading color={'text.100'}>Ưu đãi</Heading>
          <HStack mr={2} space={2} alignItems={'flex-start'}>
            <TouchableOpacity>
              <View style={commonStyle.circleWhite}>
                <Icon name="bookmark-outline" size={24} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <VStack>
                <Badge
                  colorScheme="danger"
                  rounded="full"
                  mb={-4}
                  mr={-4}
                  zIndex={1}
                  variant="solid"
                  alignSelf="flex-end"
                  _text={{
                    fontSize: 12,
                  }}>
                  2
                </Badge>
                <Icon name="notifications-outline" size={24} />
              </VStack>
            </TouchableOpacity>
          </HStack>
        </HStack>
        <View flex={1}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={{width: layout.width}}
          />
        </View>
      </VStack>
    </Container>
  );
};

export default Coupon;
