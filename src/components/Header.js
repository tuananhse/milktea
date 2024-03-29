import {Heading, HStack, View, VStack} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import commonStyle from '../styles/commonStyle';
import {useNavigation} from '@react-navigation/native';

const Header = props => {
  const {title} = props;
  const navigation = useNavigation();

  const onPressGoBack = () => {
    navigation.goBack();
  };

  return (
    <HStack h={10} alignItems={'center'}>
      <View position={'absolute'} left={4} zIndex={1}>
        <TouchableOpacity onPress={() => onPressGoBack()}>
          <View
            alignItems={'center'}
            justifyContent={'center'}
            style={commonStyle.icMedium}>
            <Icon name="chevron-back-outline" size={24} />
          </View>
        </TouchableOpacity>
      </View>
      <View w={'full'}>
        <Heading textAlign={'center'} color={'text.100'}>
          {title}
        </Heading>
      </View>
    </HStack>
  );
};

export default Header;
