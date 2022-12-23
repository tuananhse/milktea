import {Heading, View, VStack, ScrollView, HStack, Box} from 'native-base';
import React from 'react';
import Container from '../../components/Container';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import MemberCard from '../../components/MemberCard';
import {TabView, SceneMap} from 'react-native-tab-view';

const MyPolicy = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const FirstRoute = () => (
    <View style={{flex: 1, backgroundColor: '#ff4081'}} />
  );

  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <Container>
      <ScrollView>
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
          <VStack>
            <Box m={4}>
              <MemberCard enablePoint />
            </Box>
            <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
            />
          </VStack>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default MyPolicy;
