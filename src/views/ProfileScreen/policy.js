import {
  Heading,
  View,
  VStack,
  ScrollView,
  HStack,
  Box,
  Text,
  Image,
} from 'native-base';
import React from 'react';
import Container from '../../components/Container';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import MemberCard from '../../components/MemberCard';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {TEXT_PRIMARY, PRIMARY, WHITE} from '../../styles/colors';
import commonStyle from '../../styles/commonStyle';

const MyPolicy = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Mới'},
    {key: 'second', title: 'Đồng'},
    {key: 'three', title: 'Bạc'},
    {key: 'four', title: 'Vàng'},
    {key: 'five', title: 'Bạch kim'},
  ]);

  const FirstRoute = () => (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text>Miễn phí upsize cho đơn hàng đầu tiên</Text>
    </View>
  );

  const SecondRoute = () => (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <VStack space={10}>
        <Text>Tặng 01 phần bánh sinh nhật</Text>
        <Text>Miễn phí 1 phần Snack</Text>
        <Text>Đặc quyền ĐỔI ƯU đãi bằng POINT</Text>
      </VStack>
    </View>
  );
  const ThreeRoute = () => (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <VStack space={10}>
        <Text>Tặng 01 phần bánh sinh nhật</Text>
        <Text>Miễn phí 1 phần Snack</Text>
        <Text>Đặc quyền ĐỔI ƯU đãi bằng POINT</Text>
      </VStack>
    </View>
  );
  const FourRoute = () => (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <VStack space={10}>
        <Text>Tặng 01 phần bánh sinh nhật</Text>
        <Text>Miễn phí 1 phần Snack</Text>
        <Text>Đặc quyền ĐỔI ƯU đãi bằng POINT</Text>
      </VStack>
    </View>
  );
  const FiveRoute = () => (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <VStack space={10}>
        <Text>Tặng 01 phần bánh sinh nhật</Text>
        <Text>Miễn phí 1 phần Snack</Text>
        <Text>Đặc quyền ĐỔI ƯU đãi bằng POINT</Text>
      </VStack>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    three: ThreeRoute,
    four: FourRoute,
    five: FiveRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? PRIMARY : TEXT_PRIMARY,
          }}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{backgroundColor: PRIMARY}}
      style={{backgroundColor: WHITE}}
    />
  );

  return (
    <Container>
      <VStack flex={1}>
        <HStack alignItems={'center'} justifyContent={'space-between'} p={4}>
          <VStack justifyContent={'center'}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-back-outline" size={24} />
            </TouchableOpacity>
          </VStack>
          <VStack justifyContent={'center'}>
            <Heading color={'text.100'}>Quyền lợi của bạn</Heading>
          </VStack>
          <HStack />
        </HStack>
        <VStack flex={1}>
          <Box m={4}>
            <MemberCard enablePoint />
          </Box>
          <View flex={1}>
            <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              renderTabBar={renderTabBar}
              initialLayout={{width: layout.width}}
            />
          </View>
        </VStack>
      </VStack>
    </Container>
  );
};

export default MyPolicy;
