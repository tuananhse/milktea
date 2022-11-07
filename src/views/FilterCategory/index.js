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
} from 'native-base';
import React, {useState} from 'react';
import Container from '../../components/Container';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyle from '../../styles/commonStyle';
import ProductCategoryList from '../../components/ProductCategoryList';

const FilterCategory = () => {
  const [selected, setSelected] = useState(null);
  return (
    <Container>
      <HStack alignItems={'center'} justifyContent={'space-between'} p={4}>
        <VStack>
          <Box alignItems="flex-start">
            <Menu
              shadow={2}
              w="100%"
              trigger={triggerProps => {
                return (
                  <Pressable
                    accessibilityLabel="More options menu"
                    {...triggerProps}>
                    <HStack alignItems={'center'}>
                      <Heading color={'text.100'}>
                        {selected ? selected : 'Danh mục'}
                      </Heading>
                      <Icon name="chevron-down-outline" size={24} />
                    </HStack>
                  </Pressable>
                );
              }}>
              <Menu.Item value={1}>
                <Text fontWeight={'semibold'} fontSize={'lg'}>
                  Cà phê
                </Text>
              </Menu.Item>
              <Menu.Item value={2}>
                <Text fontWeight={'semibold'} fontSize={'lg'}>
                  Đặt gần đây
                </Text>
              </Menu.Item>
              <Menu.Item value={3}>
                <Text fontWeight={'semibold'} fontSize={'lg'}>
                  Trà sữa chân châu
                </Text>
              </Menu.Item>
              <Menu.Item value={4}>
                <Text fontWeight={'semibold'} fontSize={'lg'}>
                  Trà đào
                </Text>
              </Menu.Item>
              <Menu.Item value={5}>
                <Text fontWeight={'semibold'} fontSize={'lg'}>
                  Bánh-Snack
                </Text>
              </Menu.Item>
            </Menu>
          </Box>
        </VStack>

        <HStack space={2} alignItems={'flex-start'}>
          <TouchableOpacity>
            <View style={commonStyle.circleWhite}>
              <Icon name="heart-outline" size={24} />
            </View>
          </TouchableOpacity>
        </HStack>
      </HStack>
      <VStack>
        <ProductCategoryList />
      </VStack>
    </Container>
  );
};

export default FilterCategory;
