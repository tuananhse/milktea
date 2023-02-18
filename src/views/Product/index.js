import {useNavigation} from '@react-navigation/native';
import {
  AspectRatio,
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Input,
  Radio,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Container from '../../components/Container';
import ContentViewMore from '../../components/ContentViewMore';
import {GRAY_LIGHT, PRIMARY, PRIMARY_LIGHT} from '../../styles/colors';
import commonStyle from '../../styles/commonStyle';
import productStyle from './styles';
const ProductDetail = () => {
  const [viewMore, setViewMore] = useState(false);
  const [value, setValue] = useState('one');
  const [groupValues, setGroupValues] = useState([]);

  const [readMore, setReadMore] = useState(false);
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

  const onPressMore = () => {};
  const onPressLess = () => {};

  return (
    <Container edges="bottom">
      <VStack flex={1} bg={GRAY_LIGHT}>
        <VStack flex={9}>
          <ScrollView>
            <VStack>
              <Box w={'100%'} bg={'text.0'}>
                <View style={productStyle.btnClose}>
                  <Box rounded={'2xl'}>
                    <TouchableOpacity onPress={() => onPressClose()}>
                      <Icon name="close" size={24} />
                    </TouchableOpacity>
                  </Box>
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
                <Heading color={'text.100'} size={'md'}>
                  Trà sữa chân châu
                </Heading>
                <Text color={'text.500'} fontSize={'md'}>
                  35.000đ
                </Text>

                <ContentViewMore>
                  Thức uống giúp tỉnh táo tức thì để bắt đầu ngày mới thật hứng
                  khởi, Không đắng như cà phê truyền thống...
                </ContentViewMore>
              </VStack>
              <VStack space={2} p={4} bg={'text.0'} mt={2}>
                <Heading color={'text.100'} size={'md'}>
                  Size
                </Heading>
                <Text color={'text.500'} fontSize={'md'}>
                  Chọn 1 loại size
                </Text>
                <VStack>
                  <Radio.Group
                    name="myRadioGroup"
                    value={value}
                    onChange={nextValue => {
                      setValue(nextValue);
                    }}>
                    <VStack space={4} w={'full'}>
                      <Radio size="sm" value="one">
                        <HStack flex={1} justifyContent={'space-between'}>
                          <Text color={'text.600'} fontSize={'md'}>
                            Nhỏ
                          </Text>
                          <Text color={'text.600'} fontSize={'md'}>
                            35.000đ
                          </Text>
                        </HStack>
                      </Radio>
                      <Radio size="sm" value="two">
                        <HStack justifyContent={'space-between'} flex={1}>
                          <Text color={'text.600'} fontSize={'md'}>
                            Vừa
                          </Text>
                          <Text color={'text.600'} fontSize={'md'}>
                            39.000đ
                          </Text>
                        </HStack>
                      </Radio>
                      <Radio size="sm" value="three">
                        <HStack flex={1} justifyContent={'space-between'}>
                          <Text color={'text.600'} fontSize={'md'}>
                            Lớn
                          </Text>
                          <Text color={'text.600'} fontSize={'md'}>
                            45.000đ
                          </Text>
                        </HStack>
                      </Radio>
                    </VStack>
                  </Radio.Group>
                </VStack>
              </VStack>
              <VStack space={2} p={4} mt={2} bg={'text.0'}>
                <Heading color={'text.100'} size={'md'}>
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
                    <VStack space={4} w={'full'}>
                      <Checkbox value="one" my={2} w={'full'}>
                        <HStack justifyContent={'space-between'} flex={1}>
                          <Text color={'text.600'} fontSize={'md'}>
                            Kem Phô Mai
                          </Text>
                          <Text color={'text.600'} fontSize={'md'}>
                            10.000đ
                          </Text>
                        </HStack>
                      </Checkbox>
                      <Checkbox value="two">
                        <HStack justifyContent={'space-between'} flex={1}>
                          <Text color={'text.600'} fontSize={'md'}>
                            Trân châu trắng
                          </Text>
                          <Text color={'text.600'} fontSize={'md'}>
                            10.000đ
                          </Text>
                        </HStack>
                      </Checkbox>
                    </VStack>
                  </Checkbox.Group>
                </VStack>
              </VStack>
              <VStack space={2} p={4} mt={2} bg={'text.0'}>
                <Heading color={'text.100'} size={'md'}>
                  Yêu cầu khác
                </Heading>
                <Text color={'text.500'} fontSize={'md'}>
                  Nhập yêu cầu khác
                </Text>
                <VStack>
                  <Input
                    fontSize={'sm'}
                    borderColor={'text.50'}
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
                <TouchableOpacity onPress={() => onPressLess()}>
                  <View
                    alignItems={'center'}
                    justifyContent={'center'}
                    style={[
                      commonStyle.btnCircle,
                      {backgroundColor: PRIMARY_LIGHT},
                    ]}>
                    <Icon name="remove-outline" color={PRIMARY} size={24} />
                  </View>
                </TouchableOpacity>
                <Text color={'text.100'} fontWeight={'semibold'}>
                  {1}
                </Text>
                <TouchableOpacity onPress={() => onPressMore()}>
                  <View
                    style={[
                      commonStyle.btnCircle,
                      {backgroundColor: PRIMARY_LIGHT},
                    ]}>
                    <Icon name="add-outline" color={PRIMARY} size={24} />
                  </View>
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
