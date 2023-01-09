import {Button, Input, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {COMPANY_ADDRESS, HOME_ADDRESS, NEW_ADDRESS} from '../../constants';
import commonStyle from '../../styles/commonStyle';

const NewAddress = ({route}) => {
  const {address} = route.params;

  const getAddress = ad => {
    if (ad === COMPANY_ADDRESS) {
      return 'Công ty';
    }
    if (ad === HOME_ADDRESS) {
      return 'Nhà';
    }
    return 'Tên địa chỉ mới';
  };

  const onPressSubmit = () => {};
  return (
    <Container>
      <VStack flex={1} p={4} space={4} style={commonStyle.flex}>
        <Header title={'Thêm địa chỉ mới'} />
        <VStack flex={1} space={3}>
          <ScrollView>
            <VStack space={3}>
              <VStack flex={9}>
                <VStack space={2}>
                  <Text>Tên địa chỉ</Text>
                  <Input
                    isDisabled={address !== NEW_ADDRESS}
                    placeholder={getAddress(address)}
                  />
                  <Text>Địa chỉ</Text>
                  <Input placeholder="Địa chỉ" />
                  <Text>Toà nhà, số tầng</Text>
                  <Input placeholder="Toà nhà, số tầng" />
                  <Text>Cổng</Text>
                  <Input placeholder="Cổng" />
                  <Text>Ghi chú khác</Text>
                  <Input placeholder="Ghi chú khác" />
                </VStack>

                <VStack space={2}>
                  <Text>Tên người nhận</Text>
                  <Input placeholder="Tên người nhận" />
                  <Text>Số điện thoại</Text>
                  <Input placeholder="Số điện thoại" keyboardType="phone-pad" />
                </VStack>
              </VStack>
              <VStack flex={1} w={'full'} zIndex={1}>
                <Button
                  onPress={() => onPressSubmit()}
                  variant="outline"
                  bg={'gray.300'}
                  rounded="lg">
                  <Text color={'text.0'}>Xong</Text>
                </Button>
              </VStack>
            </VStack>
          </ScrollView>
        </VStack>
      </VStack>
    </Container>
  );
};

export default NewAddress;
