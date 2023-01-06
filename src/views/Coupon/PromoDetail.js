import React, {useState} from 'react';
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
  Button,
} from 'native-base';
import commonStyle from '../../styles/commonStyle';
import {TouchableOpacity} from 'react-native';
import MemberCard from '../../components/MemberCard';
import {PRIMARY, PRIMARY_LIGHT} from '../../styles/colors';
import {IMG} from '../../styles/images';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QRCode from 'react-native-qrcode-svg';

const PromoDetail = route => {
  const {item} = route.route.params;
  const navigation = useNavigation();
  return (
    <Container bg={'green'}>
      <ScrollView bg={'gray.100'} flex={1}>
        <VStack>
          <HStack justifyContent={'flex-end'} pr={4} pt={4}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={24} />
            </TouchableOpacity>
          </HStack>
          <VStack flex={1}>
            <Box m={4} pb={10} bg={'text.0'} borderRadius={10} p={4}>
              <VStack space={4} alignItems={'center'}>
                <Text>Brand Name</Text>
                <Text>{item.name}</Text>
              </VStack>
              <VStack alignItems={'center'} space={2} mt={32}>
                <QRCode size={150} value="PKFNDNNDDN" />
                <Text>Brand Name</Text>
                <TouchableOpacity>
                  <Text color={'blue.500'}>Copy</Text>
                </TouchableOpacity>
                <Button mt={4} bg={'black'} pl={4} pr={4} borderRadius={20}>
                  <Text color={'text.0'}>Bắt đầu đặt hàng</Text>
                </Button>
                <VStack space={4} mt={4} w={'72'}>
                  <Divider />

                  <HStack justifyContent={'space-between'}>
                    <Text>Ngày hết hạn</Text>
                    <Text>{item.expireDate}</Text>
                  </HStack>
                  <Divider />
                  <Text>Mô tả sản phẩm</Text>
                </VStack>
              </VStack>
            </Box>
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default PromoDetail;
