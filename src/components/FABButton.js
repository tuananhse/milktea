import {View, Fab, Text, HStack, Image, Box} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {DELIVERY} from '../constants';
import {WHITE} from '../styles/colors';
import commonStyle from '../styles/commonStyle';

const FABButton = props => {
  const {onPressShipType, shipMethod} = props;

  return (
    <Box>
      <Fab
        shadow={1}
        rounded={'xl'}
        placement="bottom-right"
        size="sm"
        bottom={12}
        bg={'text.0'}
        py={2}
        label={
          <TouchableOpacity onPress={() => onPressShipType()}>
            <View w={'full'}>
              <HStack alignItems={'center'} space={2}>
                <Image
                  style={commonStyle.iconSmall}
                  source={{
                    uri: 'https://cdn.ntlogistics.vn/images/NTX/new_images/danh-gia-shipper-giao-hang-nhanh-qua-viec-dam-bao-an-toan-hang-hoa.jpg',
                  }}
                />
                <Text color={'text.500'}>
                  {shipMethod === DELIVERY ? 'Giao đến' : 'Tự đến lấy'}
                </Text>
              </HStack>
              <Text numberOfLines={1} fontWeight={'semibold'}>
                1414/20 Nguyễn thái sơn phường 5 quận gò vấp
              </Text>
            </View>
          </TouchableOpacity>
        }
      />
    </Box>
  );
};

export default FABButton;
