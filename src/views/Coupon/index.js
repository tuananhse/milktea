import {Badge, Box, Heading, HStack, Text, View, VStack} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Container from '../../components/Container';
import {GRAY_DARK, PRIMARY, PRIMARY_LIGHT, WHITE} from '../../styles/colors';
import commonStyle from '../../styles/commonStyle';
import AccumulatePointsTab from './AccumulatePointsTab';
import ChangePointTab from './ChangePointTab';

const Coupon = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Tích điểm'},
    {key: 'second', title: 'Đổi ưu đãi'},
  ]);

  const FirstRoute = () => <AccumulatePointsTab />;

  const SecondRoute = () => <ChangePointTab />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      tabStyle={commonStyle.tabBarWidth}
      {...props}
      renderLabel={({route, focused}) => (
        <Box
          rounded={'2xl'}
          style={[
            styles.tabBarItem,
            {backgroundColor: focused ? PRIMARY_LIGHT : WHITE},
          ]}>
          <Text
            fontWeight={'semibold'}
            style={{
              color: focused ? PRIMARY : GRAY_DARK,
            }}>
            {route.title}
          </Text>
        </Box>
      )}
      indicatorStyle={{
        backgroundColor: WHITE,
      }}
      style={{backgroundColor: WHITE}}
    />
  );

  return (
    <Container>
      <VStack flex={1}>
        <HStack mx={4} alignItems={'center'} justifyContent={'space-between'}>
          <Heading color={'text.100'}>Ưu đãi</Heading>
          <HStack mr={2} space={2} alignItems={'flex-start'}>
            <TouchableOpacity>
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
    </Container>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    minWidth: 80,
  },
});
export default Coupon;
