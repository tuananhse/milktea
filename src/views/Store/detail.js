import {useNavigation} from '@react-navigation/native';
import {
  AspectRatio,
  Box,
  Button,
  Checkbox,
  Divider,
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
import {GRAY_LIGHT} from '../../styles/colors';
import commonStyle from '../../styles/commonStyle';

const StoreDetail = props => {
  const {item} = props?.route?.params;
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
      <VStack flex={1}>
        <VStack flex={9}>
          <ScrollView>
            <VStack>
              <Box w={'100%'} bg={'text.0'}>
                <View style={commonStyle.btnClose}>
                  <TouchableOpacity
                    onPress={() => onPressClose()}
                    style={[commonStyle.iconCircle, commonStyle.bgClose]}>
                    <Icon name="close" size={32} />
                  </TouchableOpacity>
                </View>

                <AspectRatio w="100%" ratio={16 / 12}>
                  <Image
                    alt="image"
                    resizeMode="contain"
                    source={{
                      uri: item?.image,
                    }}
                  />
                </AspectRatio>
              </Box>
              <VStack space={2} p={4} pt={0} bg={'text.0'}>
                <Text color={'text.500'}>THE MILK TEA</Text>
                <Heading color={'text.100'} size={'lg'}>
                  {item.name}
                </Heading>
                <Text color={'text.500'}>Gi??? m??? c???a: 7:00 - 22:00</Text>
              </VStack>
              <Divider />
              <VStack space={4} p={4} bg={'text.0'} mt={2}>
                <HStack alignItems={'center'} space={2}>
                  <View style={commonStyle.iconCircleBg}>
                    <Icon name="home" size={24} />
                  </View>
                  <View flex={1}>
                    <Text color={'text.500'} fontSize={'md'}>
                      {item?.address}
                    </Text>
                  </View>
                </HStack>
                <HStack alignItems={'center'} space={2}>
                  <View style={commonStyle.iconCircleBg}>
                    <Icon name="heart-outline" size={24} />
                  </View>
                  <View flex={1}>
                    <Text color={'text.500'} fontSize={'md'}>
                      Th??m v??o danh s??ch y??u th??ch
                    </Text>
                  </View>
                </HStack>
                <HStack alignItems={'center'} space={2}>
                  <View style={commonStyle.iconCircleBg}>
                    <Icon name="call-outline" size={24} />
                  </View>
                  <View flex={1}>
                    <Text color={'text.500'} fontSize={'md'}>
                      Li??n H???
                    </Text>
                  </View>
                </HStack>
              </VStack>
            </VStack>
          </ScrollView>
        </VStack>

        <VStack flex={1} justifyContent={'center'} bg={'text.0'} shadow={2}>
          <Button flex={1} bg={'primary.100'} onPress={() => onPressOrder()}>
            <VStack textAlign={'center'} justifyContent={'center'}>
              <Text
                textAlign={'center'}
                color={'text.0'}
                fontWeight={'semibold'}>
                ?????t s???n ph???m
              </Text>
              <Text color={'text.0'}>T??? ?????n l???y t???i c???a h??ng n??y</Text>
            </VStack>
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};
export default StoreDetail;
