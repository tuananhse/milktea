import Container from '../../components/Container';
import {ScrollView, VStack, Text, HStack, View, Badge} from 'native-base';
import commonStyle from '../../styles/commonStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import React from 'react';
import MemberCard from '../../components/MemberCard';
import NewsList from '../../components/NewsList';
import ProductList from '../../components/ProductList';
import DeliveryGroup from '../../components/DeliveryGroup';
import ProductListHistory from '../../components/ProductListHistory';
import Slider from '../../components/Slider';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ScrollView style={commonStyle.flex}>
        <VStack p={4} style={commonStyle.flex}>
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Text fontWeight={'semibold'} color={'text.100'}>
              Nguyễn Tuấn Anh ơi, Milk tea đi
            </Text>
            <HStack space={2} alignItems={'flex-start'}>
              <TouchableOpacity onPress={() => navigation.navigate('Voucher')}>
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
          <VStack space={2}>
            <MemberCard />
            <DeliveryGroup />
            <Slider />
            <ProductListHistory />
            <ProductList />
            <NewsList />
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  );
};
export default HomeScreen;
