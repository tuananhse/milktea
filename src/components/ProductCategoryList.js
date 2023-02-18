import {useNavigation} from '@react-navigation/native';
import {
  AspectRatio,
  Box,
  FlatList,
  Heading,
  HStack,
  Stack,
  Text,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {keyExtractor} from '../../utils';
import {PRIMARY, WHITE} from '../styles/colors';
import commonStyle from '../styles/commonStyle';
const ProductCategoryList = props => {
  const {list} = props;
  const navigation = useNavigation();
  const onPressSelect = val => {
    navigation.navigate('ProductDetail');
  };
  const renderItem = ({item, index}) => {
    return (
      <Box key={index} flex={1}>
        <TouchableOpacity onPress={() => onPressSelect()}>
          <Box m={2}>
            <HStack space={4} flexGrow={1}>
              <VStack>
                <Box maxW={'32'} rounded="lg" overflow="hidden">
                  <AspectRatio w="100%" ratio={16 / 12}>
                    <Image
                      resizeMode="contain"
                      source={{uri: item?.img}}
                      alt="image"
                    />
                  </AspectRatio>
                </Box>
              </VStack>
              <VStack flex={1} space={2}>
                <Stack space={2}>
                  <Heading size="xs" numberOfLines={2} color={'text.100'}>
                    {item?.name}
                  </Heading>
                  <Text
                    fontSize={'md'}
                    numberOfLines={1}
                    color={'text.600'}
                    fontWeight="400">
                    {item?.price}
                  </Text>
                </Stack>
                <VStack alignItems={'flex-end'}>
                  <TouchableOpacity>
                    <View
                      alignSelf={'baseline'}
                      p={1}
                      mr={2}
                      style={[
                        commonStyle.btnCircle,
                        {backgroundColor: PRIMARY},
                      ]}>
                      <Icon name="add-outline" color={WHITE} size={24} />
                    </View>
                  </TouchableOpacity>
                </VStack>
              </VStack>
            </HStack>
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };
  return (
    <VStack m={2}>
      <FlatList
        renderItem={renderItem}
        key="brand-product"
        data={list}
        keyExtractor={keyExtractor}
        horizontal={false}
        numColumns={1}
      />
    </VStack>
  );
};

export default ProductCategoryList;
