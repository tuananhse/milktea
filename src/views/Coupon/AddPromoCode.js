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
} from 'native-base';
import commonStyle from '../../styles/commonStyle';
import {TouchableOpacity} from 'react-native';
import MemberCard from '../../components/MemberCard';
import {PRIMARY, PRIMARY_LIGHT} from '../../styles/colors';
import {IMG} from '../../styles/images';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PromoItem from '../../components/PromoItem';
const listPromoExprire = [
  {
    id: 1,
    name: 'Hi-TEA HEALTHY - LY THỨ 2 GIÁ 0 ĐỒNG',
    expire: 'Đã hết hạn sử dụng',
    expireDate: '12/11/2022',
    expireStatus: 'end',
    image:
      'https://stc.shopiness.vn/deal/2018/06/26/c/0/8/1/1529984583186_540.jpg',
  },
  {
    id: 2,
    name: 'Hi-TEA HEALTHY - LY THỨ 2 GIÁ 0 ĐỒNG',
    expire: 'Hết hạn sau 5 ngày',
    expireStatus: 'medium',
    expireDate: '12/12/2022',
    image:
      'https://stc.shopiness.vn/deal/2018/06/26/c/0/8/1/1529984583186_540.jpg',
  },
];

const listPromoReady = [
  {
    id: 1,
    name: 'Hi-TEA HEALTHY - LY THỨ 2 GIÁ 0 ĐỒNG',
    expire: 'Hết hạn 11/12/2022',
    expireDate: '11/12/2022',
    image:
      'https://stc.shopiness.vn/deal/2018/06/26/c/0/8/1/1529984583186_540.jpg',
  },
  {
    id: 2,
    name: 'Hi-TEA HEALTHY - LY THỨ 2 GIÁ 0 ĐỒNG',
    expire: 'Hết hạn 11/12/2022',
    expireDate: '11/12/2022',
    image:
      'https://stc.shopiness.vn/deal/2018/06/26/c/0/8/1/1529984583186_540.jpg',
  },
  {
    id: 3,
    name: 'Hi-TEA HEALTHY - LY THỨ 2 GIÁ 0 ĐỒNG',
    expire: 'Hết hạn 11/12/2022',
    expireDate: '11/12/2022',
    image:
      'https://stc.shopiness.vn/deal/2018/06/26/c/0/8/1/1529984583186_540.jpg',
  },
];

const AddPromoCode = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState();
  const onChangeSearchText = () => {};

  const onPressItem = item => {
    navigation.navigate('PromoDetail', {item: item});
  };
  return (
    <Container>
      <ScrollView>
        <VStack flex={1} p={4} style={commonStyle.flex}>
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Heading color={'text.100'}>Nhập mã ưu đãi</Heading>
            <HStack space={2} alignItems={'flex-start'}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="close" size={24} />
              </TouchableOpacity>
            </HStack>
          </HStack>
          <VStack p={2} pl={0} pt={4}>
            <Input
              onChangeText={onChangeSearchText}
              placeholder="Nhập mã ưu đãi"
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
              borderWidth={0.5}
              InputLeftElement={
                <View pl={2}>
                  <Icon name="qrcode" size={24} />
                </View>
              }
              InputRightElement={
                <View
                  bg={'primary.100'}
                  h={'full'}
                  pl={4}
                  pr={4}
                  justifyItems={'center'}
                  alignItems={'center'}>
                  <View flex={1} alignItems={'center'} justifyContent="center">
                    <TouchableOpacity>
                      <Text color={'text.0'} fontWeight={'semibold'}>
                        Áp dụng
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              }
            />
          </VStack>
          <VStack mt={2}>
            <Heading size={'xs'}>Sắp hết hạn</Heading>
            <View mt={2}>
              {listPromoExprire.map(item => (
                <PromoItem item={item} onPress={() => onPressItem(item)} />
              ))}
            </View>
          </VStack>
          <VStack mt={4}>
            <Heading size={'xs'}>Sẵn sàng sử dụng</Heading>
            <View mt={2}>
              {listPromoReady.map(item => (
                <PromoItem item={item} onPress={() => onPressItem(item)} />
              ))}
            </View>
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default AddPromoCode;
