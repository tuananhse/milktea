import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';
import VerifyCodeScreen from '../views/LoginScreen/VerifyCode';
import FilterCategoryScreen from '../views/FilterCategory';
import ProductDetail from '../views/Product';
import Order from '../views/Order';
import OrderConfirm from '../views/Order/OrderConfirm';
import History from '../views/History';
import {GRAY_DARK, GRAY_LIGHT, PRIMARY, PRIMARY_LIGHT} from '../styles/colors';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: PRIMARY,
        tabBarInactiveTintColor: GRAY_DARK,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={FilterCategoryScreen}
        options={{
          tabBarLabel: 'Đặt hàng',
          tabBarIcon: ({color, size}) => (
            <Icon name="envelope" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={History}
        options={{
          tabBarLabel: 'Lịch sử',
          tabBarIcon: ({color, size}) => (
            <Icon name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={FilterCategoryScreen}
        options={{
          tabBarLabel: 'Cài đặt',
          tabBarIcon: ({color, size}) => (
            <Icon name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function RouterContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verify"
          component={VerifyCodeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderConfirm"
          component={OrderConfirm}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
