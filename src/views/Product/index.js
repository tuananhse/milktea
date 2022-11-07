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
} from 'native-base';
import {Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyle from '../../styles/commonStyle';
import {useNavigation} from '@react-navigation/native';
import productStyle from './styles';
import {GRAY_DARK, GRAY_LIGHT} from '../../styles/colors';
const ProductDetail = () => {
  const [viewMore, setViewMore] = useState(false);
  const [value, setValue] = useState('one');
  const [groupValues, setGroupValues] = useState([]);
  const navigation = useNavigation();
  const onPressViewMore = () => {
    setViewMore(!viewMore);
  };

  const onPressClose = () => {
    navigation.goBack();
  };

  const onPressOrder = () => {
    navigation.navigate('Order');
  };
  return (
    <Container edges="bottom">
      <VStack flex={1} bg={GRAY_LIGHT}>
        <VStack flex={9}>
          <ScrollView>
            <VStack>
              <Box w={'100%'} bg={'text.0'}>
                <View style={productStyle.btnClose}>
                  <TouchableOpacity
                    onPress={() => onPressClose()}
                    style={commonStyle.iconCircle}>
                    <Icon name="close" size={32} />
                  </TouchableOpacity>
                </View>

                <AspectRatio w="100%" ratio={16 / 12}>
                  <Image
                    alt="image"
                    resizeMode="contain"
                    source={{
                      uri: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
                    }}
                  />
                </AspectRatio>
              </Box>
              <VStack space={2} p={4} bg={'text.0'}>
                <Heading color={'text.100'} size={'lg'}>
                  Trà sữa chân châu
                </Heading>
                <Text color={'text.500'} fontSize={'xl'}>
                  35.000đ
                </Text>
                <Text color={'text.100'} fontSize={'lg'} numberOfLines={3}>
                  Thức uống giúp tỉnh táo tức thì để bắt đầu ngày mới thật hứng
                  khởi, Không đắng như cà phê truyền thống...
                  <TouchableOpacity onPress={() => onPressViewMore()}>
                    <Text fontSize={'lg'} color={'primary.100'} pl={2}>
                      Xem thêm
                    </Text>
                  </TouchableOpacity>
                </Text>
              </VStack>
              <VStack space={2} p={4} bg={'text.0'} mt={2}>
                <Heading color={'text.100'} size={'lg'}>
                  Size
                </Heading>
                <Text color={'text.500'} fontSize={'md'}>
                  Chọn loại size
                </Text>
                <VStack>
                  <Radio.Group
                    name="myRadioGroup"
                    value={value}
                    onChange={nextValue => {
                      setValue(nextValue);
                    }}>
                    <VStack space={4}>
                      <Radio value="one" colorScheme="warmGray" bg={'warmGray'}>
                        <HStack
                          justifyContent={'space-between'}
                          w={'80'}
                          alignItems={'center'}>
                          <Text color={'text.600'} fontSize={'lg'}>
                            Nhỏ
                          </Text>
                          <Text color={'text.600'} fontSize={'lg'}>
                            35.000đ
                          </Text>
                        </HStack>
                      </Radio>
                      <Radio value="two" colorScheme="warmGray" bg={'warmGray'}>
                        <HStack
                          justifyContent={'space-between'}
                          w={'80'}
                          alignItems={'center'}>
                          <Text color={'text.600'} fontSize={'lg'}>
                            Vừa
                          </Text>
                          <Text color={'text.600'} fontSize={'lg'}>
                            39.000đ
                          </Text>
                        </HStack>
                      </Radio>
                      <Radio
                        value="three"
                        colorScheme="warmGray"
                        bg={'warmGray'}>
                        <HStack
                          justifyContent={'space-between'}
                          w={'80'}
                          alignItems={'center'}>
                          <Text color={'text.600'} fontSize={'lg'}>
                            Lớn
                          </Text>
                          <Text color={'text.600'} fontSize={'lg'}>
                            45.000đ
                          </Text>
                        </HStack>
                      </Radio>
                    </VStack>
                  </Radio.Group>
                </VStack>
              </VStack>
              <VStack space={2} p={4} mt={2} bg={'text.0'}>
                <Heading color={'text.100'} size={'lg'}>
                  Topping
                </Heading>
                <Text color={'text.500'} fontSize={'md'}>
                  Chọn tối đa 2 loại
                </Text>
                <VStack>
                  <Checkbox.Group
                    onChange={setGroupValues}
                    value={groupValues}
                    accessibilityLabel="choose numbers">
                    <Checkbox
                      value="one"
                      my={2}
                      colorScheme="warmGray"
                      bg={'warmGray'}>
                      <HStack
                        justifyContent={'space-between'}
                        w={'80'}
                        alignItems={'center'}>
                        <Text color={'text.600'} fontSize={'lg'}>
                          Kem Phô Mai
                        </Text>
                        <Text color={'text.600'} fontSize={'lg'}>
                          10.000đ
                        </Text>
                      </HStack>
                    </Checkbox>
                    <Checkbox
                      value="two"
                      colorScheme="warmGray"
                      bg={'warmGray'}>
                      <HStack
                        justifyContent={'space-between'}
                        w={'80'}
                        alignItems={'center'}>
                        <Text color={'text.600'} fontSize={'lg'}>
                          Trân châu trắng
                        </Text>
                        <Text color={'text.600'} fontSize={'lg'}>
                          10.000đ
                        </Text>
                      </HStack>
                    </Checkbox>
                  </Checkbox.Group>
                </VStack>
              </VStack>
              <VStack space={2} p={4} mt={2} bg={'text.0'}>
                <Heading color={'text.100'} size={'lg'}>
                  Yêu cầu khác
                </Heading>
                <Text color={'text.500'} fontSize={'md'}>
                  Nhập yêu cầu khác
                </Text>
                <VStack>
                  <Input
                    fontSize={'sm'}
                    borderColor={'text.500'}
                    placeholder="Thêm ghi chú"
                  />
                </VStack>
              </VStack>
            </VStack>
          </ScrollView>
        </VStack>

        <VStack
          flex={1}
          justifyContent={'center'}
          pl={4}
          pr={4}
          bg={'text.0'}
          shadow={2}>
          <HStack>
            <View flex={1} alignItems={'flex-start'} justifyContent={'center'}>
              <HStack space={6} alignItems={'center'}>
                <TouchableOpacity style={commonStyle.btnCircle}>
                  <Icon name="remove-outline" size={24} />
                </TouchableOpacity>
                <Text color={'text.100'} fontWeight={'semibold'}>
                  1
                </Text>
                <TouchableOpacity style={commonStyle.btnCircle}>
                  <Icon name="add-outline" size={24} />
                </TouchableOpacity>
              </HStack>
            </View>
            <Button flex={1} bg={'primary.100'} onPress={() => onPressOrder()}>
              <Text color={'text.0'} fontWeight={'semibold'}>
                45.000đ
              </Text>
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};
export default ProductDetail;
