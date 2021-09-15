import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MerchantStack,
  LoginStack,
  SignUpStack,
  PasswordRecoveryStack,
  CustomerStack,
  PointOfSaleStack,
  DashboardStack,
  TransactionsStack,
  OrdersStack,
  SettingsStack,
} from "./StackNavigation";

const Tab = createBottomTabNavigator();

const getTabBarVisible = (route) => {
  const params = route.params;
  if (params) {
    if (params.tabBarVisible === false) {
      return false;
    }
  }
  return true;
};
// function crmTabBarVisibility(route) {
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

//   switch (routeName) {
//     case 'New Requests':
//       return false;
//     case 'Pending Requests':
//       return false;
//     case 'Closed Requests':
//       return false;
//     case 'Late Requests':
//       return false;
//   }
// }
// function accountingTabBarVisibility(route) {
//   const routeName =
//     getFocusedRouteNameFromRoute(route) ?? 'AccountingDashboard';

//   switch (routeName) {
//     case 'Bills':
//       return false;
//     case 'Invoices':
//       return false;
//     case 'Incomes':
//       return false;
//     case 'Expenses':
//       return false;
//   }
// }
const CustomTabBarButtonTwo = ({ children, onPress }) => {
  return null;
};
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#49B7C4",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
export const BottomTabNavigation = ({ navigation, route }) => {

  // const [Index, setIndex] = useState('AccountingDashboard');
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({tabBarVisible: crmTabBarVisibility(route)});
  // }, [navigation, route]);
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({tabBarVisible: accountingTabBarVisibility(route)});
  // }, [navigation, route]);
  return (
    <Tab.Navigator
      initialRouteName="PointOfSaleTab"
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          title: "Dashboard",
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/images/dashboard-icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#3F466F' : '#3F466F',
                }}
              />
            </View>
          ),
        }}
        name="DashboardTab"
        component={DashboardStack}
      />
      <Tab.Screen
        options={{
          title: "Transactions",
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                                source={require('../../../assets/images/transactions-icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#3F466F' : '#3F466F',
                }}
              />
            </View>
          ),
        }}
        name="TransactionsTab"
        component={TransactionsStack}
      />
      <Tab.Screen
        options={{
          title: "PointOfSale",
          tabBarIcon: ({focused}) => (
              <Image
                                source={require('../../../assets/images/tab-pos-icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#fff' : '#fff',
                }}
              />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
        name="PointOfSaleTab"
        component={PointOfSaleStack}
      />
      <Tab.Screen
        options={{
          title: "Orders",
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                                source={require('../../../assets/images/orders-icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#3F466F' : '#3F466F',
                }}
              />
            </View>
          ),
        }}
        name="OrdersTab"
        component={OrdersStack}
      />
      <Tab.Screen
        options={{
          title: "Settings",
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                                source={require('../../../assets/images/settings-icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#3F466F' : '#3F466F',
                }}
              />
            </View>
          ),
        }}
        name="SettingsTab"
        component={SettingsStack}
      />
    </Tab.Navigator>
  );
};


// const styles = StyleSheet.create({
//   bottomNav: {
//     bottom: 25,
//     // left: 20,
//     // right: 20,
//     // height: 90,
//     // elevation: 0,
//     borderTopWidth: 0,
//     borderColor: "#ffcc00",
//     // borderWidth: 5,
//     // backgroundColor: '#fff',
//     // borderRadius: 15,
//     // borderTopRightRadius: 15,
//     // borderTopLeftRadius: 15,
//     // shadowColor: '#7F5DF0',
//     // shadowColor: '#7F5DF0',
//     // shadowOffset: {width: 0, height: 10},
//     // shadowOpacity: 0.25,
//     // shadowRadius: 3.5,
//     // elevation: 5,
//   },
//   shadow: {
//     // position: 'absolute',
//     shadowColor: "#7F5DF0",
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//     elevation: 5,
//   },
//   textColorSecondary: {
//     color: colors.secondary,
//   },
//   formControl: {
//     paddingTop: "3%",
//     paddingHorizontal: padding.sm,
//     width: "100%",
//   },
//   formControlTask: {
//     paddingTop: "3%",
//     paddingHorizontal: padding.sm,
//     width: "100%",
//   },
//   formControlInline: {
//     flexDirection: "row",
//   },
//   formItem: {
//     width: "48%",
//   },
//   formItemTask: {
//     width: "30%",
//   },
//   btn: {
//     marginBottom: padding.sm,
//     justifyContent: "center",
//     backgroundColor: colors.primary,
//     width: "100%",
//     borderRadius: 10,
//     elevation: 5,
//   },
//   icon: {
//     color: colors.label,
//     fontSize: 25,
//     marginBottom: 15,
//     paddingRight: "60%",
//   },
//   textColorWhite: {
//     color: "white",
//   },
//   error: {
//     borderColor: "#ff0000",
//   },
//   input: {
//     width: "90%",
//   },
//   heading: {
//     textAlign: "center",
//     justifyContent: "center",
//     fontSize: fonts.md,
//     fontWeight: "bold",
//     color: colors.secondary,
//     height: "10%",
//     flexDirection: "row",
//     width: "100%",
//     borderBottomColor: "#DBE9F6",
//     borderBottomWidth: 1,
//   },
//   lastItem: {
//     marginLeft: "4%",
//   },
// });
