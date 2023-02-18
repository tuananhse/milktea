import {
  Heading,
  Text,
  HStack,
  View,
  VStack,
  Badge,
  Box,
  Pressable,
  Menu,
  ScrollView,
  Input,
  Actionsheet,
  useDisclose,
  Flex,
  Image,
  AspectRatio,
} from 'native-base';
import React, {useCallback, useState} from 'react';
import Container from '../../components/Container';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyle from '../../styles/commonStyle';
import ProductCategoryList from '../../components/ProductCategoryList';
import CategoryList from '../../components/CategoryList';
import {debounce, toQuery} from 'lodash';
const list = [
  {
    id: 1,
    name: 'Trà sữa chân trâu',
    price: '65.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'Trà vải',
    price: '39.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 1,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'Trà đào cam sả - Đá',
    price: '55.000đ',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
];

const listCategory = [
  {
    id: 1,
    name: 'Cà phê',
    key: 'cafe',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 2,
    name: 'CloudFree',
    key: 'CloudFree',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 3,
    name: 'CloudTea',
    key: 'CloudTea',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 4,
    name: 'Hi-Tea',
    key: 'HiTea',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 5,
    name: 'Trà trái cây - Trà sữa',
    key: 'tea',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 6,
    name: 'Thưởng thức tại nhà',
    key: 'house',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 7,
    name: 'Bánh - Snack',
    key: 'snack',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
  {
    id: 8,
    name: 'Thức uống khác',
    key: 'other',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1221945/tra-sua-khong-don-gian-chi-co-tra-va-sua-ma-con-cuc-nhieu-thanh-phan-doc-hai-khac-201911250918409829.jpg',
  },
];

const FilterCategory = () => {
  const [selected, setSelected] = useState(null);
  const [searchEnable, setSearchEnable] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [listProduct, setListProduct] = useState(list);

  const {isOpen, onOpen, onClose} = useDisclose();

  const onPressSearch = () => {
    setSearchEnable(!searchEnable);
  };

  const onChangeSearchText = useCallback(
    text => {
      setSearchText(text);
      debounceDropDown(text);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchText],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceDropDown = useCallback(
    debounce(nextValue => findProduct(nextValue), 1000),
    [],
  );

  const findProduct = val => {
    let newList = list.filter(item =>
      item.name.toLocaleUpperCase().includes(val.toLocaleUpperCase()),
    );
    setListProduct(newList);
  };

  const onPressSelectCategory = () => {
    onClose();
  };

  const RenderContent = () => {
    return (
      <VStack>
        <Heading pl={4} size="md" numberOfLines={2} color={'text.100'}>
          Trà sữa
        </Heading>
        <ProductCategoryList list={list} />
      </VStack>
    );
  };
  return (
    <Container>
      {searchEnable ? (
        <HStack alignItems={'center'} justifyContent={'space-between'} p={4}>
          <VStack>
            <Box alignItems="flex-start">
              <TouchableOpacity onPress={onOpen}>
                <HStack alignItems={'center'}>
                  <Heading
                    size={'md'}
                    fontWeight={'semibold'}
                    color={'text.100'}>
                    {'Danh mục'}
                  </Heading>
                  <Icon name="chevron-down-outline" size={24} />
                </HStack>
              </TouchableOpacity>
            </Box>
          </VStack>

          <HStack space={2} alignItems={'flex-start'}>
            <TouchableOpacity onPress={() => onPressSearch()}>
              <View style={commonStyle.circleWhite}>
                <Icon name="search-outline" size={24} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={commonStyle.circleWhite}>
                <Icon name="heart-outline" size={24} />
              </View>
            </TouchableOpacity>
          </HStack>
        </HStack>
      ) : (
        <HStack alignItems={'center'} p={4}>
          <HStack space={2} justifyItems={'center'} alignItems={'center'}>
            <Input
              onChangeText={onChangeSearchText}
              placeholder="Cafe, trà đào cam sả..."
              placeholderTextColor={'text.500'}
              _focus={{borderColor: 'white'}}
              selectionColor={'text.50'}
              borderColor={'text.50'}
              color={'text.100'}
              autoCapitalize="none"
              borderRadius={10}
              value={searchText}
              focusable={true}
              size={'xl'}
              w={'80'}
              InputLeftElement={
                <View pl={4}>
                  <Icon size={20} name="search" />
                </View>
              }
            />
            <TouchableOpacity onPress={() => onPressSearch()}>
              <Text color={'primary.100'} fontWeight={'semibold'}>
                Huỷ
              </Text>
            </TouchableOpacity>
          </HStack>
        </HStack>
      )}

      <ScrollView>
        {!searchEnable ? (
          <ProductCategoryList list={listProduct} />
        ) : (
          <VStack flex={1}>
            <CategoryList />
            <RenderContent />
          </VStack>
        )}
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Heading size={'md'} fontWeight={'semibold'} color={'text.100'}>
              {'Danh mục'}
            </Heading>
            <HStack flexWrap={'wrap'} w={'full'} flexGrow={1}>
              {listCategory.map(item => {
                return (
                  <VStack w={'1/3'} py={2}>
                    <TouchableOpacity
                      onPress={() => onPressSelectCategory(item)}>
                      <VStack alignItems={'center'}>
                        <Image
                          resizeMode="contain"
                          source={{uri: item?.img}}
                          alt="image"
                          style={commonStyle.circleMediumWhite}
                        />

                        <Text mt={2} numberOfLines={2} textAlign={'center'}>
                          {item.name}
                        </Text>
                      </VStack>
                    </TouchableOpacity>
                  </VStack>
                );
              })}
            </HStack>
          </Actionsheet.Content>
        </Actionsheet>
      </ScrollView>
    </Container>
  );
};

export default FilterCategory;
VStack;
