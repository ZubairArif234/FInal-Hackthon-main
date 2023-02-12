import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from '../Screens/Splash';
import SignUpScreen from '../Screens/Signup';
import Products from '../Screens/localuserScreens/Products'
import Accounts from '../Screens/localuserScreens/accounts'
import Carts from '../Screens/localuserScreens/cart'
import Orders from '../Screens/adminScreens/adminorderUpdate';
import AdminProducts from '../Screens/adminScreens/adminProducts'
import AdminProfile from '../Screens/adminScreens/AdminProfile'
import AddProducts from '../Screens/adminScreens/addproducts'

export default function Stacks() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function UserTabs  () {
    return(
        <Tab.Navigator initialRouteName="Home">
        <Tab.Screen options={{headerShown : false}} name="Home" component={Products} />
        <Tab.Screen options={{headerShown : false}} name="Cart" component={Carts} />
        <Tab.Screen options={{headerShown : false}} name="Accounts" component={Accounts} />
      </Tab.Navigator>
    )
  }
  function AdminTabs () {
    return(
        <Tab.Navigator  initialRouteName="AddProducts">
        <Tab.Screen options={{headerShown : false}} name="Orders" component={Orders} />
        <Tab.Screen options={{headerShown : false}} name="AdminProducts" component={AdminProducts} />
        <Tab.Screen options={{headerShown : false}} name="account" component={AdminProfile} />
        <Tab.Screen options={{headerShown : false}} name="AddProducts" component={AddProducts} />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen options={{headerShown : false}} name="SplashScreen"  component={Splash} />
        <Stack.Screen options={{headerShown : false}} name="AccountsPage" component={SignUpScreen} />
        <Stack.Screen options={{headerShown : false}} name="UserShow" component={UserTabs} />
        <Stack.Screen options={{headerShown : false}} name="AdminShow" component={AdminTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
