import React, {useState} from 'react';
import Container from '../../components/Container';
import {
  VStack,
  Text,
  HStack,
  Box,
  Heading,
  Input,
  View,
  ScrollView,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyle from '../../styles/commonStyle';
import {useNavigation} from '@react-navigation/native';
import VoucherItem from '../../components/VoucherItem';
let item = {
  id: 1,
  name: 'Tặng voucher miễn phí thức uống',
  count: 1,
  expireDate: '30/12/2022',
  description:
    'Tặng voucher miễn phí thức uống khi mua ly sứ Áp dụng từ 26-28/6 Áp dụng tại tất cả các cửa hàng hoặc đặt hàng tại website, app TCH Giá bán chính thức: 160.000/ 1 ly Lưu ý: Coupon free drink sẽ được tự động gửi vào tài khoản thành viên của bạn trong ngày 29/6',
  image:
    'https://stc.shopiness.vn/deal/2018/06/26/c/0/8/1/1529984583186_540.jpg',
};
const Voucher = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState();
  const onChangeSearchText = () => {};

  const onPressDetail = val => {
    navigation.navigate('VoucherDetail', {data: val});
  };

  return (
    <Container>
      <HStack alignItems={'center'} justifyContent={'space-between'} p={4}>
        <VStack justifyContent={'center'}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" size={24} />
          </TouchableOpacity>
        </VStack>
        <VStack justifyContent={'center'}>
          <Box alignItems="flex-start">
            <Heading color={'text.100'}>Phiếu ưu đãi của bạn</Heading>
          </Box>
        </VStack>
        <HStack />
      </HStack>
      <VStack flex p={4} pt={0}>
        <HStack>
          <Input
            onChangeText={onChangeSearchText}
            placeholder="Nhập mã khuyến mãi"
            placeholderTextColor={'text.500'}
            _focus={{borderColor: 'white'}}
            selectionColor={'text.50'}
            borderColor={'text.200'}
            color={'text.100'}
            autoCapitalize="none"
            borderRadius={10}
            value={searchText}
            focusable={true}
            size={'lg'}
            flex
            InputLeftElement={
              <View pl={4}>
                <Icon size={20} name="barcode-outline" />
              </View>
            }
            InputRightElement={
              <View
                bg={'primary.100'}
                style={{
                  height: '100%',
                  padding: 10,
                }}>
                <TouchableOpacity>
                  <Text color={'text.0'}>Áp dụng</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </HStack>
        <ScrollView>
          <VStack space={4} mt={4}>
            <VStack space={2}>
              <Text fontWeight={'semibold'} fontSize="lg">
                Sắp hết hạn
              </Text>
              <VoucherItem item={item} onPress={() => onPressDetail(item)} />
            </VStack>
            <VStack space={2}>
              <Text fontWeight={'semibold'} fontSize="lg">
                Sẵn sàng để sử dụng
              </Text>
              <VoucherItem item={item} onPress={() => onPressDetail(item)} />

              <VoucherItem item={item} onPress={() => onPressDetail(item)} />

              <VoucherItem item={item} onPress={() => onPressDetail(item)} />
            </VStack>
          </VStack>
        </ScrollView>
      </VStack>
    </Container>
  );
};

export default Voucher;
