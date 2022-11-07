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
} from 'native-base';
import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import CButton from '../../components/CButton';
import CInput from '../../components/CInput';
import Container from '../../components/Container';
import {PRIMARY} from '../../styles/colors';
import commonStyle from '../../styles/commonStyle';
import {IMG} from '../../styles/images';
import loginStyle from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const VerifyCodeScreen = () => {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const onPressLogin = () => {
    navigation.navigate('Home');
  };
  const onPressClose = () => {};
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
          <VStack style={loginStyle.body}>
            <VStack
              pt={'6'}
              alignItems={'center'}
              borderTopLeftRadius={10}
              borderTopRightRadius={10}>
              <Text color={'text.100'}>Mã xác thực</Text>
              <Text fontWeight={'semibold'} color={'text.100'} fontSize={'2xl'}>
                Milk tea
              </Text>
            </VStack>
            <VStack space={6} mt={4}>
              <Input
                onChangeText={val => {
                  console.log('setPhone(val)', val);
                  setPhone(val);
                }}
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
                    <Icon size={20} name="phone" />
                  </View>
                }
              />
              <Button
                borderRadius={10}
                padding={3}
                bg={PRIMARY}
                onPress={() => onPressLogin()}>
                <Text color={'text.0'} fontWeight={'semibold'}>
                  Đăng nhập
                </Text>
              </Button>

              <View alignItems={'center'} justifyItems={'flex-end'}>
                <TouchableOpacity>
                  <Text color={'text.500'}>Tiếng việt</Text>
                </TouchableOpacity>
              </View>
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default VerifyCodeScreen;
