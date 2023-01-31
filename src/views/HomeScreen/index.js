import Container from '../../components/Container';
import {
  ScrollView,
  VStack,
  Text,
  HStack,
  View,
  Badge,
  Actionsheet,
  useDisclose,
  Box,
  Fab,
  Button,
  Image,
} from 'native-base';
import commonStyle from '../../styles/commonStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MemberCard from '../../components/MemberCard';
import NewsList from '../../components/NewsList';
import ProductList from '../../components/ProductList';
import DeliveryGroup from '../../components/DeliveryGroup';
import ProductListHistory from '../../components/ProductListHistory';
import Slider from '../../components/Slider';
import {useNavigation} from '@react-navigation/native';
import {GRAY_LIGHT, PRIMARY_LIGHT, WHITE} from '../../styles/colors';
import FABButton from '../../components/FABButton';
import {DELIVERY, TAKE_AWAY} from '../../constants';
import PopupButton from '../../components/PopupBottom';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [shipMethod, setShipMethod] = useState(DELIVERY);
  const [hidePopup, setHidePopup] = useState(false);
  const onPressShipType = val => {
    setIsOpen(!isOpen);
  };

  const onPressShipMethod = val => {
    setShipMethod(val);
    setIsOpen(!isOpen);
  };

  const onPressEdit = () => {
    navigation.navigate('Address');
  };

  const onClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <ScrollView style={commonStyle.flex}>
        <VStack p={4} style={commonStyle.flex}>
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Text fontWeight={'semibold'} color={'text.100'}>
              Nguyễn Tuấn Anh ơi, Milk tea đi
            </Text>
            <HStack space={2} alignItems={'flex-start'}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MyVoucher')}>
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

            {hidePopup && (
              <View>
                <FABButton
                  onPressShipType={onPressShipType}
                  shipMethod={shipMethod}
                />
                <PopupButton
                  isOpen={isOpen}
                  onClose={onClose}
                  shipMethod={shipMethod}
                  onPressShipMethod={onPressShipMethod}
                  onPressEdit={onPressEdit}
                />
              </View>
            )}
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  );
};
export default HomeScreen;
