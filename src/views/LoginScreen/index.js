import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  Button,
  Divider,
  HStack,
  Input,
  ScrollView,
  Text,
  useToast,
  View,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {Image, Keyboard, Platform, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {checkConnectivity} from '../../../utils';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import {APP_NAME} from '../../constants';
import {fetchLoginAsync} from '../../store/userSlide';
import {FACEBOOK_COLOR, PRIMARY, WHITE} from '../../styles/colors';
import commonStyle from '../../styles/commonStyle';
import {IMG} from '../../styles/images';
import loginStyle from './styles';

const LoginScreen = () => {
  const [phone, setPhone] = useState('kyubjn94@gmail.com');

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [password, setPassword] = useState('.Kyubjn94');
  const dispatch = useDispatch();
  const toast = useToast();

  const onPressLogin = async () => {
    Keyboard.dismiss();
    let isConnected = await checkConnectivity();

    if (!isConnected) {
      toast.show({description: 'Không có kết nối, vui lòng thử lại!'});
      return;
    }

    if (!phone) {
      toast.show({description: 'Tên đăng nhập không được để trống!'});
      return;
    }
    if (!password) {
      toast.show({description: 'Mật khẩu không được để trống!'});
      return;
    }
    setLoading(true);
    let bodyFormData = new FormData();
    bodyFormData.append('username', phone);
    bodyFormData.append('password', password);
    dispatch(fetchLoginAsync(bodyFormData))
      .then(({payload}) => {
        setAuthToken(payload?.data?.token);
        setToken(payload?.data?.token);
      })
      .catch(() => {
        toast.show({
          description: 'Đăng nhập thất bại, vui lòng thử lại!',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const setAuthToken = token => {
    setToken(token);
    axios.defaults.headers.common['Authorization'] = '';
    delete axios.defaults.headers.common['Authorization'];
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  };

  const setToken = async token => {
    await AsyncStorage.setItem('@token', token);
  };

  const onPressClose = () => {};
  const onPressLoginApple = () => {};

  const onPressLoginFacebook = () => {};
  const onPressLoginGoogle = () => {};

  return (
    <Container edges={'bottom'} touchableWithoutFeedback>
      <ScrollView>
        <VStack style={commonStyle.flex}>
          <View justifyContent={'flex-start'} alignItems={'flex-start'}>
            <Image
              style={commonStyle.imgLoginHeader}
              source={IMG.loginHeader}
              resizeMode="cover"
            />
            <View style={loginStyle.icClose}>
              <TouchableOpacity
                onPress={() => onPressClose()}
                style={commonStyle.iconCircle}>
                <Icon name="close" size={32} />
              </TouchableOpacity>
            </View>
          </View>
          <VStack style={loginStyle.body} space={4}>
            <VStack
              pt={'6'}
              alignItems={'center'}
              borderTopLeftRadius={10}
              borderTopRightRadius={10}
              space={2}>
              <Text color={'text.100'}>Chào mừng bạn đến với</Text>
              <Text fontWeight={'semibold'} color={'text.100'} fontSize={'2xl'}>
                {APP_NAME}
              </Text>
            </VStack>
            <VStack>
              <Input
                onChangeText={val => {
                  setPhone(val);
                }}
                keyboardType="number-pad"
                placeholder="Nhập số điện thoại"
                autoCapitalize="none"
                borderRadius={10}
                value={phone}
                InputLeftElement={
                  <View pl={4}>
                    <Icon size={20} name="call-outline" />
                  </View>
                }
              />
              <VStack space={4} mt={4}>
                <Button
                  borderRadius={10}
                  bg={PRIMARY}
                  onPress={() => onPressLogin()}>
                  <Text color={'text.0'} fontWeight={'semibold'}>
                    Đăng nhập
                  </Text>
                </Button>
                <HStack alignItems={'center'} justifyContent={'center'}>
                  <Divider flex={1} />
                  <Text pl={2} pr={2} color={'text.100'}>
                    Hoặc
                  </Text>
                  <Divider flex={1} />
                </HStack>
                {Platform.OS === 'ios' && (
                  <Button
                    borderRadius={10}
                    bg={'text.100'}
                    leftIcon={
                      <Icon name="logo-apple" size={18} color={WHITE} />
                    }
                    onPress={() => onPressLoginApple()}>
                    <Text color={'text.0'} fontWeight={'semibold'}>
                      Tiếp tục bằng Apple
                    </Text>
                  </Button>
                )}

                <Button
                  borderRadius={10}
                  bg={FACEBOOK_COLOR}
                  leftIcon={
                    <Icon
                      name="logo-facebook"
                      size={18}
                      color={WHITE}
                      borderRadius={10}
                    />
                  }
                  onPress={() => onPressLoginFacebook()}>
                  <Text color={'text.0'} fontWeight={'semibold'}>
                    Tiếp tục bằng Facebook
                  </Text>
                </Button>
                <Button
                  borderRadius={10}
                  bg={WHITE}
                  leftIcon={
                    <Image
                      style={commonStyle.iconSmall}
                      source={IMG.icGoogle}
                    />
                  }
                  variant="outline"
                  onPress={() => onPressLoginGoogle()}>
                  <Text color={'text.100'} fontWeight={'semibold'}>
                    Tiếp tục bằng Google
                  </Text>
                </Button>
              </VStack>
            </VStack>
            <View alignItems={'center'} justifyItems={'flex-end'}>
              <TouchableOpacity>
                <Text color={'text.500'}>Tiếng việt</Text>
              </TouchableOpacity>
            </View>
          </VStack>
        </VStack>
        {loading && <Loading />}
      </ScrollView>
    </Container>
  );
};

export default LoginScreen;
