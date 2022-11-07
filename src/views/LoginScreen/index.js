import {
  View,
  Text,
  VStack,
  Input,
  Button,
  Divider,
  ZStack,
  ScrollView,
  Factory,
  HStack,
} from 'native-base';
import React, {useState} from 'react';
import {Image, Platform, TouchableOpacity} from 'react-native';
import CButton from '../../components/CButton';
import CInput from '../../components/CInput';
import Container from '../../components/Container';
import {BLACK, FACEBOOK_COLOR, PRIMARY, WHITE} from '../../styles/colors';
import commonStyle from '../../styles/commonStyle';
import {IMG} from '../../styles/images';
import loginStyle from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {APP_NAME} from '../../constants';

const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const onPressLogin = () => {
    navigation.navigate('Main');
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
                fontSize={16}
                keyboardType="number-pad"
                placeholder="Nhập số điện thoại"
                placeholderTextColor={'text.500'}
                _focus={{borderColor: 'white'}}
                selectionColor={'text.50'}
                borderColor={'text.50'}
                color={'text.100'}
                autoCapitalize="none"
                borderRadius={10}
                value={phone}
                size={'2xl'}
                InputLeftElement={
                  <View pl={4}>
                    <Icon size={20} name="call-outline" />
                  </View>
                }
              />
              <VStack space={4} mt={4}>
                <Button
                  size={'lg'}
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
                    size={'lg'}
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
                  size={'lg'}
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
                  size={'lg'}
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
      </ScrollView>
    </Container>
  );
};

export default LoginScreen;
