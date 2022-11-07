import {useNavigation} from '@react-navigation/native';
import {VStack, Text, HStack, Box, Heading, Button} from 'native-base';
import React from 'react';
import Container from '../../components/Container';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyle from '../../styles/commonStyle';
import HistoryList from './list';

const History = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <HStack alignItems={'center'} justifyContent={'space-between'} p={4}>
        <VStack justifyContent={'center'}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" size={24} />
          </TouchableOpacity>
        </VStack>
        <VStack justifyContent={'center'}>
          <Box alignItems="flex-start">
            <Heading color={'text.100'}>Lịch sử đơn hàng</Heading>
          </Box>
        </VStack>
        <HStack />
      </HStack>
      <VStack>
        <HStack space={4} justifyContent={'center'}>
          <Button style={commonStyle.btnHistoryUnActive}>
            <Text color={'text.500'} fontWeight={'semibold'}>
              Đang thực hiện
            </Text>
          </Button>
          <Button style={commonStyle.btnHistory}>
            <Text color={'primary.100'} fontWeight={'semibold'}>
              Đã hoàn tất
            </Text>
          </Button>
          <Button style={commonStyle.btnHistoryUnActive}>
            <Text color={'text.500'} fontWeight={'semibold'}>
              Đã huỷ
            </Text>
          </Button>
        </HStack>
      </VStack>
      <VStack>
        <HistoryList />
      </VStack>
    </Container>
  );
};

export default History;
