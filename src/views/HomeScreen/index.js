import Container from '../../components/Container';
import {
  ScrollView,
  VStack,
  Text,
  HStack,
  View,
  Badge,
  Actionsheet,
  useDisclose,
  Box,
  Fab,
  Button,
  Image,
} from 'native-base';
import commonStyle from '../../styles/commonStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MemberCard from '../../components/MemberCard';
import NewsList from '../../components/NewsList';
import ProductList from '../../components/ProductList';
import DeliveryGroup from '../../components/DeliveryGroup';
import ProductListHistory from '../../components/ProductListHistory';
import Slider from '../../components/Slider';
import {useNavigation} from '@react-navigation/native';
import {GRAY_LIGHT, PRIMARY_LIGHT, WHITE} from '../../styles/colors';
import FABButton from '../../components/FABButton';
import {DELIVERY, TAKE_AWAY} from '../../constants';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [shipMethod, setShipMethod] = useState(DELIVERY);

  const onPressShipType = val => {
    setIsOpen(!isOpen);
  };

  const onPressShipMethod = val => {
    setShipMethod(val);
    setIsOpen(!isOpen);
  };

  const onPressEdit = () => {
    // onClose();
  };
  const onClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <ScrollView style={commonStyle.flex}>
        <VStack p={4} style={commonStyle.flex}>
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Text fontWeight={'semibold'} color={'text.100'}>
              Nguyễn Tuấn Anh ơi, Milk tea đi
            </Text>
            <HStack space={2} alignItems={'flex-start'}>
              <TouchableOpacity onPress={() => navigation.navigate('Voucher')}>
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
          <VStack space={2}>
            <MemberCard />
            <DeliveryGroup />
            <Slider />
            <ProductListHistory />
            <ProductList />
            <NewsList />
            <FABButton
              onPressShipType={onPressShipType}
              shipMethod={shipMethod}
            />
            <Actionsheet isOpen={isOpen} onClose={onClose}>
              <Actionsheet.Content>
                <Box w="100%" minH={'200'} mb={4} justifyContent="center">
                  <HStack
                    pt={0}
                    pb={2}
                    alignItems={'center'}
                    justifyContent={'center'}>
                    <Text fontSize="16" fontWeight={'bold'}>
                      Chọn phương thức đặt hàng
                    </Text>
                    <View
                      alignItems={'flex-end'}
                      justifyContent={'flex-end'}
                      position={'absolute'}
                      right={0}>
                      <TouchableOpacity onPress={onClose}>
                        <Icon name="close-outline" size={24} />
                      </TouchableOpacity>
                    </View>
                  </HStack>

                  <VStack space={3} flex={1} ml={-2} mr={-2}>
                    <HStack py={3} bg={PRIMARY_LIGHT} space={2} px={2}>
                      <VStack>
                        <Image
                          alt="img"
                          style={commonStyle.iconCircle}
                          source={{
                            uri: 'https://cdn.ntlogistics.vn/images/NTX/new_images/danh-gia-shipper-giao-hang-nhanh-qua-viec-dam-bao-an-toan-hang-hoa.jpg',
                          }}
                        />
                      </VStack>

                      <VStack flex={5}>
                        <TouchableOpacity
                          onPress={() => onPressShipMethod(DELIVERY)}>
                          <Text
                            fontSize="16"
                            color="gray.500"
                            fontWeight={'bold'}
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Giao hàng
                          </Text>
                          <Text
                            numberOfLines={2}
                            fontSize="14"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            1414/40 nguyễn thái sơn, phường 5 quận gò vấp
                          </Text>
                        </TouchableOpacity>
                      </VStack>
                      <VStack flex={1}>
                        <Button bg={'primary.100'} size={'sm'} rounded={'xl'}>
                          <Text color={WHITE}>Sửa</Text>
                        </Button>
                      </VStack>
                    </HStack>

                    <HStack
                      py={3}
                      px={2}
                      space={2}
                      flex={1}
                      alignItems={'center'}>
                      <VStack>
                        <Image
                          alt="img"
                          style={commonStyle.iconCircle}
                          source={{
                            uri: 'https://img.freepik.com/premium-vector/take-away-logo-design-fast-food-logo-icon_409025-781.jpg?w=826',
                          }}
                        />
                      </VStack>

                      <VStack flex={5}>
                        <TouchableOpacity
                          onPress={() => onPressShipMethod(TAKE_AWAY)}>
                          <Text
                            fontSize="16"
                            color="gray.500"
                            fontWeight={'bold'}
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Mang đi
                          </Text>
                          <Text
                            numberOfLines={2}
                            fontSize="14"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            The Milk tea{' \n'} Cách đây 10,2 km
                          </Text>
                        </TouchableOpacity>
                      </VStack>
                      <VStack flex={1}>
                        <Button
                          onPress={() => onPressEdit()}
                          bg={'primary.100'}
                          size={'sm'}
                          rounded={'xl'}>
                          <Text color={WHITE}>Sửa</Text>
                        </Button>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </Actionsheet.Content>
            </Actionsheet>
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  );
};
export default HomeScreen;
