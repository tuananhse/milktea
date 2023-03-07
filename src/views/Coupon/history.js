import {Divider, FlatList, HStack, Text, View, VStack} from 'native-base';
import React from 'react';
import {formatDate, TIME_DATE_LONG} from '../../../utils';
import Container from '../../components/Container';
import Header from '../../components/Header';

let data = [
  {
    createdAt: new Date().toISOString(),
    orderName: 'Đơn hàng #12321321',
    point: 10,
  },
  {
    createdAt: new Date().toISOString(),
    orderName: 'Đơn hàng #534243',
    point: 5,
  },
  {
    createdAt: new Date().toISOString(),
    orderName: 'Đơn hàng #654654',
    point: 20,
  },
];

const PointHistory = () => {
  const renderItem = ({item}) => (
    <VStack mx={4}>
      <HStack my={3} alignItems={'center'} justifyContent={'space-between'}>
        <VStack>
          <Text color={'text.500'}>
            {formatDate(item.createdAt, TIME_DATE_LONG)}
          </Text>
          <Text
            fontWeight={'semibold'}
            fontSize={'md'}
            numberOfLines={3}
            color={'text.100'}>
            {item.orderName}
          </Text>
        </VStack>
        <View p={2}>
          <Text
            fontSize={'md'}
            px={2}
            numberOfLines={1}
            color={'green.500'}
            fontWeight="bold">
            {item?.point}
          </Text>
        </View>
      </HStack>
      <Divider />
    </VStack>
  );

  return (
    <Container>
      <Header title={'Lịch sử POINT'} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

export default PointHistory;
