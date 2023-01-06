import {Box, Heading, VStack, Text, ScrollView} from 'native-base';
import React from 'react';
import Container from '../../components/Container';
import {Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyle from '../../styles/commonStyle';
import {useNavigation} from '@react-navigation/native';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import QRCode from 'react-native-qrcode-svg';

const VoucherDetail = props => {
  const {data} = props?.route?.params;
  const navigation = useNavigation();
  const onPressClose = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <VStack bg={'text.200'} flex={1}>
        <VStack
          justifyContent={'flex-end'}
          alignItems={'flex-end'}
          pt={3}
          pr={4}>
          <TouchableOpacity
            onPress={() => onPressClose()}
            style={[commonStyle.iconCircle]}>
            <Icon name="close" size={32} />
          </TouchableOpacity>
        </VStack>
        <Box m={4} mt={0} bg={'text.0'} rounded={'lg'} p={4}>
          <ScrollView>
            <VStack>
              <VStack alignItems={'center'} justifyContent={'center'}>
                <Heading fontSize={'lg'}>THE MILK TEA</Heading>
                <Text
                  fontWeight={'semibold'}
                  textAlign={'center'}
                  color={'text.100'}
                  fontSize={'lg'}>
                  {data?.name}
                </Text>
              </VStack>
              <VStack p={6} alignItems={'center'}>
                <QRCode size={150} value="PKFNDNNDDN" />
                <Text textAlign={'center'} color={'text.100'} fontSize={'lg'}>
                  PKFNDNNDDN
                </Text>
                <TouchableOpacity>
                  <Text
                    textAlign={'center'}
                    color={'primary.200'}
                    fontSize={'lg'}>
                    Sao chép
                  </Text>
                </TouchableOpacity>
              </VStack>
              <VStack alignItems={'flex-start'} space={2}>
                <Text color={'red.100'} fontSize={'lg'}>
                  Ngày hết hạn: {data?.expireDate}
                </Text>

                <Text color={'text.500'} fontSize={'lg'}>
                  {data?.description}
                </Text>
              </VStack>
            </VStack>
          </ScrollView>
        </Box>
      </VStack>
    </Container>
  );
};

export default VoucherDetail;
