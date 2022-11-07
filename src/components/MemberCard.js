import {View, Text, Box, VStack, HStack} from 'native-base';
import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {GRAY_DARK} from '../styles/colors';
import commonStyle from '../styles/commonStyle';
// import Barcode from 'react-native-barcode-builder';
import Barcode from '@kichiyaki/react-native-barcode-generator';

const MemberCard = () => {
  return (
    <Box
      mt={4}
      bg={'text.100'}
      pl="6"
      pr="6"
      pb="4"
      rounded="xl"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        textAlign: 'start',
      }}>
      <VStack>
        <HStack justifyContent={'space-between'}>
          <Text pt={'6'} fontWeight={'bold'} color={'text.0'}>
            Nguyễn Tuấn Anh
          </Text>
          <TouchableOpacity style={commonStyle.btnAccumulatePoints}>
            <Text fontWeight={'semibold'} color={'text.0'}>
              Tích điểm
            </Text>
          </TouchableOpacity>
        </HStack>
        <Text fontWeight={'bold'} color={'text.0'}>
          100 POINT · Vàng
        </Text>
        <VStack mt={2}>
          <Barcode
            format="EAN13"
            value="0123456789012"
            text="0123456789012"
            height={40}
            style={commonStyle.barcode}
            maxWidth={Dimensions.get('window').width}
          />
        </VStack>
      </VStack>
    </Box>
  );
};

export default MemberCard;
