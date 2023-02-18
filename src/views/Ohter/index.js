import {View, Text, Heading, VStack, Box, HStack, Badge} from 'native-base';
import React, {useState} from 'react';
import Container from '../../components/Container';
import SelectButton from '../../components/SelectButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLOR_BODY} from '../../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {SIGN_OUT} from '../../constants/ActionTypes';
import Header from '../../components/Header';
import commonStyle from '../../styles/commonStyle';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CDialog from '../../components/Dialog';
const Other = () => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const navigation = useNavigation();
  const onPressSelectProfile = () => {
    navigation.navigate('MyProfile');
  };
  const cleanToken = async () => {
    await AsyncStorage.getAllKeys().then(keys =>
      AsyncStorage.multiRemove(keys),
    );
    dispatch({type: SIGN_OUT});
  };

  const onPressLogOut = () => {
    setOpenDialog(true);
  };
  const onPressAddress = () => {};

  const onPressSetting = () => {};

  const onPressRatting = () => {};

  const onPressContact = () => {};
  return (
    <Container>
      {openDialog && (
        <CDialog
          title={'Đăng xuất'}
          content={'Bạn muốn thoát ứng dụng?'}
          confirmTitle={'Thoát'}
          onSubmit={() => {
            setOpenDialog(false);
            cleanToken();
          }}
          onClose={() => setOpenDialog(false)}
        />
      )}

      <HStack py={2} bg={'text.0'} px={4} justifyContent={'space-between'}>
        <Heading textAlign={'left'} color={'text.100'}>
          {'Khác'}
        </Heading>
        <HStack space={2} alignItems={'flex-start'}>
          <TouchableOpacity onPress={() => navigation.navigate('MyVoucher')}>
            <View style={commonStyle.circleWhite}>
              <Ionicons name="bookmark-outline" size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <VStack
              alignItems={'center'}
              justifyContent={'center'}
              flex={1}
              style={commonStyle.circleWhite}>
              <Badge
                colorScheme="danger"
                rounded="full"
                top={0}
                right={-10}
                zIndex={10}
                position={'absolute'}
                variant="solid"
                alignSelf="flex-end"
                _text={{
                  color: 'text.0',
                }}>
                2
              </Badge>
              <Ionicons name="notifications-outline" size={24} />
            </VStack>
          </TouchableOpacity>
        </HStack>
      </HStack>

      <VStack p={4} space={4} bg={'gray.100'} flex={1}>
        <VStack space={4}>
          <Heading fontSize={'md'}>Hỗ trợ</Heading>
          <VStack>
            <VStack rounded={'xl'}>
              <SelectButton
                divider
                onPress={() => onPressRatting()}
                rightContent={<Icon name="user" size={18} />}
                leftContent={<Icon name="angle-right" size={18} />}>
                Đánh giá đơn hàng
              </SelectButton>
              <SelectButton
                divider
                onPress={() => onPressContact()}
                rightContent={<Icon name="location-arrow" size={18} />}
                leftContent={<Icon name="angle-right" size={18} />}>
                Liên hệ và góp ý
              </SelectButton>
            </VStack>
          </VStack>
        </VStack>
        <VStack space={4}>
          <Heading fontSize={'md'}>Tài khoản</Heading>
          <VStack>
            <VStack rounded={'xl'}>
              <SelectButton
                divider
                onPress={() => onPressSelectProfile()}
                rightContent={<Icon name="user" size={18} />}
                leftContent={<Icon name="angle-right" size={18} />}>
                Thông tin cá nhân
              </SelectButton>
              <SelectButton
                divider
                onPress={() => onPressAddress()}
                rightContent={<Icon name="location-arrow" size={18} />}
                leftContent={<Icon name="angle-right" size={18} />}>
                Địa chỉ đã lưu
              </SelectButton>
              <SelectButton
                divider
                onPress={() => onPressSetting()}
                rightContent={<Icon name="gear" size={18} />}
                leftContent={<Icon name="angle-right" size={18} />}>
                Cài đặt
              </SelectButton>
              <SelectButton
                divider
                onPress={() => onPressLogOut()}
                rightContent={<Ionicons name="log-out-outline" size={18} />}
                leftContent={<Icon name="angle-right" size={18} />}>
                Đăng xuất
              </SelectButton>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Other;
