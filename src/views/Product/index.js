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
                  Tr?? s???a ch??n ch??u
                </Heading>
                <Text color={'text.500'} fontSize={'xl'}>
                  35.000??
                </Text>
                <Text color={'text.100'} fontSize={'lg'} numberOfLines={3}>
                  Th???c u???ng gi??p t???nh t??o t???c th?? ????? b???t ?????u ng??y m???i th???t h???ng
                  kh???i, Kh??ng ?????ng nh?? c?? ph?? truy???n th???ng...
                  <TouchableOpacity onPress={() => onPressViewMore()}>
                    <Text fontSize={'lg'} color={'primary.100'} pl={2}>
                      Xem th??m
                    </Text>
                  </TouchableOpacity>
                </Text>
              </VStack>
              <VStack space={2} p={4} bg={'text.0'} mt={2}>
                <Heading color={'text.100'} size={'lg'}>
                  Size
                </Heading>
                <Text color={'text.500'} fontSize={'md'}>
                  Ch???n lo???i size
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
                            Nh???
                          </Text>
                          <Text color={'text.600'} fontSize={'lg'}>
                            35.000??
                          </Text>
                        </HStack>
                      </Radio>
                      <Radio value="two" colorScheme="warmGray" bg={'warmGray'}>
                        <HStack
                          justifyContent={'space-between'}
                          w={'80'}
                          alignItems={'center'}>
                          <Text color={'text.600'} fontSize={'lg'}>
                            V???a
                          </Text>
                          <Text color={'text.600'} fontSize={'lg'}>
                            39.000??
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
                            L???n
                          </Text>
                          <Text color={'text.600'} fontSize={'lg'}>
                            45.000??
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
                  Ch???n t???i ??a 2 lo???i
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
                          Kem Ph?? Mai
                        </Text>
                        <Text color={'text.600'} fontSize={'lg'}>
                          10.000??
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
                          Tr??n ch??u tr???ng
                        </Text>
                        <Text color={'text.600'} fontSize={'lg'}>
                          10.000??
                        </Text>
                      </HStack>
                    </Checkbox>
                  </Checkbox.Group>
                </VStack>
              </VStack>
              <VStack space={2} p={4} mt={2} bg={'text.0'}>
                <Heading color={'text.100'} size={'lg'}>
                  Y??u c???u kh??c
                </Heading>
                <Text color={'text.500'} fontSize={'md'}>
                  Nh???p y??u c???u kh??c
                </Text>
                <VStack>
                  <Input
                    fontSize={'sm'}
                    borderColor={'text.500'}
                    placeholder="Th??m ghi ch??"
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
                45.000??
              </Text>
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};
export default ProductDetail;
