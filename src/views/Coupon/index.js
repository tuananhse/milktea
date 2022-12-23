import React from 'react';
import Container from '../../components/Container';
import {
  ScrollView,
  VStack,
  Text,
  HStack,
  View,
  Badge,
  Heading,
  Input,
  Box,
  AspectRatio,
  Image,
  Stack,
  FlatList,
  Divider,
  Progress,
  Center,
} from 'native-base';
import commonStyle from '../../styles/commonStyle';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MemberCard from '../../components/MemberCard';
import {PRIMARY, PRIMARY_LIGHT} from '../../styles/colors';
import {IMG} from '../../styles/images';
import {useNavigation} from '@react-navigation/native';

const Coupon = () => {
  const navigation = useNavigation();
  const onPressChangeVoucher = () => {};

  const onPressMyVoucher = () => {};

  const onPressHistoryPoint = () => {};

  const onPressMyPolicy = () => {
    navigation.navigate('MyPolicy');
  };
  return (
    <Container>
      <ScrollView>
        <VStack flex p={4} style={commonStyle.flex}>
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Heading color={'text.100'}>Ưu đãi</Heading>
            <HStack space={2} alignItems={'flex-start'}>
              <TouchableOpacity>
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
          <VStack>
            <HStack>
              <View style={commonStyle.tagActive}>
                <Text color={'primary.100'} fontWeight={'semibold'}>
                  Tích điểm
                </Text>
              </View>
              <View style={commonStyle.tag}>
                <Text color={'text.500'} fontWeight={'semibold'}>
                  Đổi ưu đãi
                </Text>
              </View>
            </HStack>
            <Box>
              <MemberCard enablePoint />
              <VStack space={2} mt={2}>
                <Text fontWeight={'semibold'}>VÀNG</Text>
                <Progress value={45} colorScheme={'light'} bg={'text.200'} />
                <Text>
                  2160 POINT tích luỹ từ ngày 20/12/2021-20/12/2022 của bạn sẽ
                  hết hạn vào ngày 20/12/2022. Hãy dùng POINT này để đổi ưu đãi
                  nhé.
                </Text>
              </VStack>
            </Box>
            <VStack space={3} mt={4}>
              <HStack space={3} justifyContent="center">
                <Center h="24" w="50%" bg="text.200" rounded="md" shadow={3}>
                  <TouchableOpacity onPress={() => onPressChangeVoucher()}>
                    <VStack flex alignItems={'center'} justifyContent="center">
                      <Image
                        source={IMG.coupon}
                        resizeMode="contain"
                        style={commonStyle.icMedium}
                      />
                      <Text fontWeight={'semibold'}>Đổi ưu đãi</Text>
                    </VStack>
                  </TouchableOpacity>
                </Center>
                <Center h="24" w="50%" bg="text.200" rounded="md" shadow={3}>
                  <TouchableOpacity onPress={() => onPressMyVoucher()}>
                    <VStack flex alignItems={'center'} justifyContent="center">
                      <Image
                        source={IMG.giftbox}
                        resizeMode="contain"
                        style={commonStyle.icMedium}
                      />
                      <Text fontWeight={'semibold'}>Voucher của bạn</Text>
                    </VStack>
                  </TouchableOpacity>
                </Center>
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  flex
                  h="24"
                  w="50%"
                  bg="text.200"
                  rounded="md"
                  shadow={3}>
                  <TouchableOpacity onPress={() => onPressHistoryPoint()}>
                    <VStack flex alignItems={'center'} justifyContent="center">
                      <Image
                        source={IMG.history}
                        resizeMode="contain"
                        style={commonStyle.icMedium}
                      />
                      <Text fontWeight={'semibold'}>Lịch sử POINT</Text>
                    </VStack>
                  </TouchableOpacity>
                </Center>
                <Center h="24" w="50%" bg="text.200" rounded="md" shadow={3}>
                  <TouchableOpacity onPress={() => onPressMyPolicy()}>
                    <VStack flex alignItems={'center'} justifyContent="center">
                      <Image
                        source={IMG.encrypted}
                        resizeMode="contain"
                        style={commonStyle.icMedium}
                      />
                      <Text fontWeight={'semibold'}>Quyền lợi của bạn</Text>
                    </VStack>
                  </TouchableOpacity>
                </Center>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default Coupon;
