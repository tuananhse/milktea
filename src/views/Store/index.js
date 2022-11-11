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
} from 'native-base';
import React, {useState} from 'react';
import Container from '../../components/Container';
import commonStyle from '../../styles/commonStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {keyExtractor} from '../../../utils';
import {useNavigation} from '@react-navigation/native';

const dataFake = [
  {
    id: 1,
    name: 'Hiraki Bình dương',
    km: 24,
    address: '1222 Phan Văn Trị, Phường 4, Quận Gò Vấp, Hồ Chí Minh, Việt Nam',

    image:
      'https://websitecuckukvn.misacdn.net/wp-content/uploads/2019/05/TheCoffeeHouse-Signature-Featured.jpg',
  },
  {
    id: 1,
    name: '220 Phạm Văn Chiêu',
    km: 2,
    address: '1222 Phan Văn Trị, Phường 4, Quận Gò Vấp, Hồ Chí Minh, Việt Nam',
    image:
      'https://websitecuckukvn.misacdn.net/wp-content/uploads/2019/05/TheCoffeeHouse-Signature-Featured.jpg',
  },
  {
    id: 1,
    name: '304 Phan Huy Ích',
    km: 12,
    image:
      'https://websitecuckukvn.misacdn.net/wp-content/uploads/2019/05/TheCoffeeHouse-Signature-Featured.jpg',
  },
  {
    id: 1,
    name: '12 Bạch Đằng',
    km: 4,
    address: '1222 Phan Văn Trị, Phường 4, Quận Gò Vấp, Hồ Chí Minh, Việt Nam',

    image:
      'https://websitecuckukvn.misacdn.net/wp-content/uploads/2019/05/TheCoffeeHouse-Signature-Featured.jpg',
  },
  {
    id: 1,
    name: '15 Nguyễn Du',
    km: 5,
    address: '1222 Phan Văn Trị, Phường 4, Quận Gò Vấp, Hồ Chí Minh, Việt Nam',

    image:
      'https://websitecuckukvn.misacdn.net/wp-content/uploads/2019/05/TheCoffeeHouse-Signature-Featured.jpg',
  },
  {
    id: 1,
    name: '1222 Phan Văn Trị',
    address: '1222 Phan Văn Trị, Phường 4, Quận Gò Vấp, Hồ Chí Minh, Việt Nam',
    km: 24,
    image:
      'https://websitecuckukvn.misacdn.net/wp-content/uploads/2019/05/TheCoffeeHouse-Signature-Featured.jpg',
  },
];
const ListStore = () => {
  const navigation = useNavigation();
  const onChangeSearchText = () => {};
  const [searchText, setSearchText] = useState('');
  const onPressDetail = item => {
    navigation.navigate('StoreDetail', {item: item});
  };
  const renderItem = ({item, index}) => {
    return (
      <Box key={index} mt={2}>
        <TouchableOpacity onPress={() => onPressDetail(item)}>
          <HStack space={2}>
            <Box rounded="lg" overflow="hidden">
              <AspectRatio w="94" h={'24'}>
                <Image
                  resizeMode="contain"
                  source={{uri: item?.image}}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <VStack space={2} justifyContent={'space-between'}>
              <VStack space={1}>
                <Heading size="xs" numberOfLines={1} color={'text.100'}>
                  THE MILK TEa
                </Heading>
                <Text color={'text.100'}>{item?.name}</Text>
              </VStack>
              <Text color={'text.500'}>Cách đây {item?.km} km</Text>
            </VStack>
          </HStack>
          <Divider mt={2} />
        </TouchableOpacity>
      </Box>
    );
  };
  return (
    <Container>
      <VStack flex p={4} style={commonStyle.flex}>
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <Heading color={'text.100'}>Danh sách cửa hàng</Heading>
          <HStack space={2} alignItems={'flex-start'}>
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
        <VStack space={2} flex>
          <HStack
            space={2}
            mt={4}
            alignContent={'center'}
            justifyContent={'center'}>
            <Input
              onChangeText={onChangeSearchText}
              placeholder="Tìm kiếm"
              placeholderTextColor={'text.500'}
              _focus={{borderColor: 'white'}}
              selectionColor={'text.50'}
              borderColor={'text.50'}
              color={'text.100'}
              autoCapitalize="none"
              borderRadius={10}
              value={searchText}
              focusable={true}
              size={'lg'}
              flex={3}
              InputLeftElement={
                <View pl={4}>
                  <Icon size={20} name="search" />
                </View>
              }
            />
            <TouchableOpacity>
              <HStack
                space={2}
                flex
                justifyContent={'center'}
                alignItems={'center'}>
                <Icon size={20} name="map-outline" />
                <Text fontWeight={'semibold'}>Bản đồ</Text>
              </HStack>
            </TouchableOpacity>
          </HStack>
          <VStack flex>
            <Text fontWeight={'semibold'} fontSize="lg">
              Các cửa hàng khác
            </Text>
            <FlatList
              renderItem={renderItem}
              key="brand-product"
              data={dataFake}
              keyExtractor={keyExtractor}
            />
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default ListStore;
