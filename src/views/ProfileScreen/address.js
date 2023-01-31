import {useNavigation} from '@react-navigation/native';
import {
  Divider,
  HStack,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Container from '../../components/Container';
import {COMPANY_ADDRESS, HOME_ADDRESS, NEW_ADDRESS} from '../../constants';
import commonStyle from '../../styles/commonStyle';

const Address = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const onPressAddAddress = address => {
    navigation.navigate('NewAddress', {address: address});
  };

  const onPressGoBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <ScrollView>
        <VStack flex={1} p={4} space={4} style={commonStyle.flex}>
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <HStack space={2} alignItems={'flex-start'}>
              <TouchableOpacity onPress={() => onPressGoBack()}>
                <View style={commonStyle.circleWhite}>
                  <Icon name="chevron-back-outline" size={24} />
                </View>
              </TouchableOpacity>

              <View flex={1}>
                <Input
                  placeholder="Tìm kiếm"
                  borderWidth={0}
                  bg={'gray.100'}
                  rounded={'lg'}
                  onChangeText={text => setSearchText(text)}
                />
              </View>
            </HStack>
          </HStack>

          <VStack flex={1} space={3}>
            <Text fontWeight={'bold'} fontSize={16}>
              Địa chỉ đã lưu
            </Text>
            <VStack space={3}>
              <TouchableOpacity onPress={() => onPressAddAddress(HOME_ADDRESS)}>
                <HStack space={2} alignItems={'center'}>
                  <Icon name="home-outline" size={24} />
                  <Text>Thêm địa chỉ nhà</Text>
                </HStack>
              </TouchableOpacity>
              <Divider bg={'gray.100'} />
              <TouchableOpacity
                onPress={() => onPressAddAddress(COMPANY_ADDRESS)}>
                <HStack space={2} alignItems={'center'}>
                  <Icon name="business-outline" size={24} />
                  <Text>Thêm địa chỉ công ty</Text>
                </HStack>
              </TouchableOpacity>
              <Divider bg={'gray.100'} />
              <TouchableOpacity onPress={() => onPressAddAddress(NEW_ADDRESS)}>
                <HStack space={2} alignItems={'center'}>
                  <Icon name="add-outline" size={24} />
                  <Text>Thêm địa chỉ mới</Text>
                </HStack>
              </TouchableOpacity>
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default Address;
