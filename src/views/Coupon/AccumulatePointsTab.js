import {useNavigation} from '@react-navigation/native';
import {
  Box,
  Center,
  HStack,
  Image,
  Progress,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {memo, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import MemberCard from '../../components/MemberCard';
import commonStyle from '../../styles/commonStyle';
import {IMG} from '../../styles/images';
const AccumulatePointTab = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);

  const onPressChangeVoucher = () => {
    setIndex(1);
  };

  const onPressMyVoucher = () => {
    navigation.navigate('MyVoucher');
  };

  const onPressHistoryPoint = () => {
    navigation.navigate('PointHistory');
  };

  const onPressMyPolicy = () => {
    navigation.navigate('MyPolicy');
  };
  return (
    <ScrollView contentContainerStyle={commonStyle.scrollContainer}>
      <VStack flex={1} bg={'gray.100'}>
        <Box bg={'text.0'} pb={4} rounded={'2xl'} mt={4}>
          <View mt={-4} mx={4}>
            <MemberCard enablePoint />
          </View>
          <VStack space={2} mt={2} mx={4}>
            <Text fontWeight={'semibold'}>VÀNG</Text>
            <Progress value={45} colorScheme={'light'} bg={'text.200'} />
            <Text>
              2160 POINT tích luỹ từ ngày 20/12/2021-20/12/2022 của bạn sẽ hết
              hạn vào ngày 20/12/2022. Hãy dùng POINT này để đổi ưu đãi nhé.
            </Text>
          </VStack>
        </Box>
        <VStack space={3} mt={4} mx={4} pb={4}>
          <HStack space={3} justifyContent="center">
            <Center flex={1} h="24" w="50%" bg="text.0" rounded="md" shadow={3}>
              <TouchableOpacity onPress={() => onPressChangeVoucher()}>
                <VStack flex={1} alignItems={'center'} justifyContent="center">
                  <Image
                    source={IMG.coupon}
                    resizeMode="contain"
                    style={commonStyle.icMedium}
                    alt="img"
                  />
                  <Text fontWeight={'semibold'}>Đổi ưu đãi</Text>
                </VStack>
              </TouchableOpacity>
            </Center>
            <Center flex={1} h="24" w="50%" bg="text.0" rounded="md" shadow={3}>
              <TouchableOpacity onPress={() => onPressMyVoucher()}>
                <VStack flex={1} alignItems={'center'} justifyContent="center">
                  <Image
                    source={IMG.giftbox}
                    resizeMode="contain"
                    style={commonStyle.icMedium}
                    alt="img"
                  />
                  <Text fontWeight={'semibold'}>Voucher của bạn</Text>
                </VStack>
              </TouchableOpacity>
            </Center>
          </HStack>
          <HStack space={3} justifyContent="center">
            <Center flex={1} h="24" w="50%" bg="text.0" rounded="md" shadow={3}>
              <TouchableOpacity onPress={() => onPressHistoryPoint()}>
                <VStack flex={1} alignItems={'center'} justifyContent="center">
                  <Image
                    source={IMG.history}
                    resizeMode="contain"
                    style={commonStyle.icMedium}
                    alt="img"
                  />
                  <Text fontWeight={'semibold'}>Lịch sử POINT</Text>
                </VStack>
              </TouchableOpacity>
            </Center>
            <Center flex={1} h="24" w="50%" bg="text.0" rounded="md" shadow={3}>
              <TouchableOpacity onPress={() => onPressMyPolicy()}>
                <VStack flex={1} alignItems={'center'} justifyContent="center">
                  <Image
                    source={IMG.encrypted}
                    resizeMode="contain"
                    style={commonStyle.icMedium}
                    alt="img"
                  />
                  <Text fontWeight={'semibold'}>Quyền lợi của bạn</Text>
                </VStack>
              </TouchableOpacity>
            </Center>
          </HStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default memo(AccumulatePointTab);
