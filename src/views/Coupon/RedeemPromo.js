import {
  View,
  VStack,
  Text,
  Box,
  AspectRatio,
  Heading,
  Radio,
  ScrollView,
  HStack,
  Flex,
  Checkbox,
  Input,
  Button,
  Image,
  Fab,
} from 'native-base';
import React from 'react';
import Header from '../../components/Header';
import commonStyle from '../../styles/commonStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, Alert} from 'react-native';
import {IMG} from '../../styles/images';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/Container';

const RedeemPromo = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();

  const onPressClose = () => {
    navigation.goBack();
  };

  const onPressRedeem = () => {
    Alert.alert('Xác nhận', `Đổi ưu đãi với ${item.point} POINT?`, [
      {
        text: 'Huỷ',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Xác nhận',
        onPress: () => {
          navigation.goBack();
        },
      },
    ]);
  };
  return (
    <Container>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View flex={1}>
          <View justifyContent={'flex-start'} alignItems={'flex-start'}>
            <Image
              style={commonStyle.imgLoginHeader}
              source={{
                uri: item?.img,
              }}
              resizeMode="cover"
            />
            <View style={commonStyle.icClose}>
              <TouchableOpacity
                onPress={() => onPressClose()}
                style={commonStyle.btnCircle}>
                <Icon name="close" size={32} />
              </TouchableOpacity>
            </View>
            <View alignItems={'center'} w={'full'}>
              <Box
                shadow={1}
                position={'absolute'}
                bottom={-32}
                w={'96'}
                bg={'text.0'}
                p={4}
                rounded={'2xl'}>
                <HStack alignItems={'center'} space={4}>
                  <View flex={1} alignItems={'center'}>
                    <Image source={IMG.coupon} style={commonStyle.icPromo} />
                  </View>
                  <VStack flex={3} space={2}>
                    <Text>{item.description}</Text>
                    <VStack>
                      <Text color={'text.500'}>The Milk Tea</Text>
                      <Text>Sử dụng trong 30 ngày</Text>
                    </VStack>
                  </VStack>
                </HStack>
              </Box>
            </View>
          </View>
          <VStack flex={1} px={4} space={4} top={10}>
            <HStack justifyContent={'space-between'}>
              <VStack>
                <Text>Quy đổi với</Text>
                <Text fontWeight={'semibold'}>{item.point} POINT</Text>
              </VStack>
              <VStack alignItems={'flex-end'}>
                <Text>Thời hạn quy đổi</Text>
                <Text>12/12/2024</Text>
              </VStack>
            </HStack>
            <VStack>
              <Text fontSize={'lg'}>Chi tiết ưu đãi</Text>
              <Text>{item.description}</Text>
            </VStack>
          </VStack>
          <Box flex={1}>
            <Fab
              shadow={1}
              rounded={'xl'}
              placement="bottom-right"
              size="sm"
              bottom={[12, 16, 16]}
              bg={'primary.100'}
              w={'96'}
              py={2}
              label={
                <View flex={1}>
                  <HStack
                    flex={1}
                    w={'96'}
                    px={4}
                    justifyContent={'space-between'}>
                    <VStack>
                      <Text
                        color={'text.0'}
                        numberOfLines={1}
                        fontWeight={'semibold'}>
                        Đổi {item.point} POINT
                      </Text>
                      <Text
                        color={'text.0'}
                        numberOfLines={1}
                        fontWeight={'semibold'}>
                        lấy voucher này
                      </Text>
                    </VStack>
                    <View justifyContent={'center'}>
                      <TouchableOpacity onPress={() => onPressRedeem()}>
                        <Box bg={'text.0'} rounded={'2xl'} px={4} py={2}>
                          <Text fontWeight={'semibold'} color={'primary.100'}>
                            Đổi ưu đãi
                          </Text>
                        </Box>
                      </TouchableOpacity>
                    </View>
                  </HStack>
                </View>
              }
            />
          </Box>
        </View>
      </ScrollView>
    </Container>
  );
};

export default RedeemPromo;
