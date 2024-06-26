import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import UserManagement from "../screens/admins/UserManagement";
import InfoUserView from "../screens/shares/InfoUserView";
import InfoAdminView from "../screens/admins/InfoAdminView";
import AccessDevice from "../screens/customers/AccessDevice";
import AccountInfo from "../screens/shares/AccountInfo"
import AdminHome from "../screens/admins/AdminHome"
import DeviceList from "../screens/DeviceList"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={AdminHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserManagement"
        component={UserManagement}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InfoUserView"
        component={InfoUserView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InfoAdminView"
        component={InfoAdminView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccessDevice"
        component={AccessDevice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountInfo"
        component={AccountInfo}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="DeviceList"
        component={DeviceList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


const AdminTabNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="Home" component={CustomerStack} />
    </Stack.Navigator>
  );
};

export default AdminTabNavigator;
