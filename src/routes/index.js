import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';
import VerifyCodeScreen from '../views/LoginScreen/VerifyCode';
import FilterCategoryScreen from '../views/FilterCategory';
import ProductDetail from '../views/Product';
import Order from '../views/Order';
import OrderConfirm from '../views/Order/OrderConfirm';
import History from '../views/History';
import ListStore from '../views/Store';
import StoreDetail from '../views/Store/detail';
import Voucher from '../views/Voucher';
import VoucherDetail from '../views/Voucher/detail';
import Coupon from '../views/Coupon';
import AddPromoCode from '../views/Coupon/AddPromoCode';
import {GRAY_DARK, GRAY_LIGHT, PRIMARY, PRIMARY_LIGHT} from '../styles/colors';
import PromoDetail from '../views/Coupon/PromoDetail';
import MyPolicy from '../views/ProfileScreen/policy';
import MethodPayment from '../views/Order/MethodPayment';
import Address from '../views/ProfileScreen/address';
import NewAddress from '../views/ProfileScreen/newAddress';
import RedeemPromo from '../views/Coupon/RedeemPromo';
import AllPromo from '../views/Coupon/AllPromo';
import MyVoucher from '../views/Voucher/myVoucher';
import {useAuth} from './AuthProvider';
import {useDispatch} from 'react-redux';
import Loading from '../components/Loading';
import Other from '../views/Other';
import MyProfile from '../views/Other/MyProfile';
import CouponHistory from '../views/Coupon/history';
import PointHistory from '../views/Coupon/history';
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
            <Icon name="truck" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={ListStore}
        options={{
          tabBarLabel: 'Cửa hàng',
          tabBarIcon: ({color, size}) => (
            <Icon name="map-marker" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Coupon"
        component={Coupon}
        options={{
          tabBarLabel: 'Ưu đãi',
          tabBarIcon: ({color, size}) => (
            <Icon name="ticket" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Other"
        component={Other}
        options={{
          tabBarLabel: 'Khác',
          tabBarIcon: ({color, size}) => (
            <Icon name="bars" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function RouterContainer() {
  const {state} = useAuth();
  const dispatch = useDispatch();
  const [initialRoute, setInitialRoute] = useState({name: 'Main'});
  const [loading, setLoading] = useState(true);
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    if (state?.token === null) {
      setInitialRoute(null);
    }
  }, [state]);

  if (state?.loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={initialRoute?.name}
        screenOptions={{
          headerShown: false,
        }}>
        {state?.token == null ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Main"
              component={Main}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Verify"
              component={VerifyCodeScreen}
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

            <Stack.Screen
              name="StoreDetail"
              component={StoreDetail}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Voucher"
              component={Voucher}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="VoucherDetail"
              component={VoucherDetail}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddPromoCode"
              component={AddPromoCode}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PromoDetail"
              component={PromoDetail}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MyPolicy"
              component={MyPolicy}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MethodPayment"
              component={MethodPayment}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Category"
              component={FilterCategoryScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Address"
              component={Address}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="NewAddress"
              component={NewAddress}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RedeemPromo"
              component={RedeemPromo}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AllPromo"
              component={AllPromo}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MyVoucher"
              component={MyVoucher}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MyProfile"
              component={MyProfile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PointHistory"
              component={PointHistory}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
