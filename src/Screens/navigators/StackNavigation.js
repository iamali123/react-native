import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import {
  createNativeStackNavigator,
  HeaderBackButton,
} from "@react-navigation/native-stack";
import { DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import MerchantProfile from "../MerchantProfile/MerchantProfile";
import Login from "../Login/Login";
import LoginFailed from "../Login/LoginFailed";
import PasswordRecovery from "../PasswordRecovery/PasswordRecovery";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import ProductList from "../Products/ProductList";
import EditMerchantProfile from "../MerchantProfile/EditMerchantProfile";
import ProfileForm from "../MerchantProfile/ProfileForm";
import SignUp from "../SignUp/SignUp";
import TermsOfUse from "../TermsOfUse/TermsOfUse";
import PopUpAlert from "../Verification/PopUpAlert";
import Verification from "../Verification/Verification";
import Customer from "../Welcome/Customer";
import Merchant from "../Welcome/Merchant";
import Welcome from "../Welcome/Welcome";
import PointOfSale from "../PointOfSale/PointOfSale";
import { BottomTabNavigation } from "./BottomTabNavigation";
import Settings from "../Settings/Settings";
import PosSettings from "../Settings/PosSettings";
import Categories from "../PointOfSale/Categories";
import AddOrder from "../PointOfSale/AddOrder";
import AddToCart from "../PointOfSale/AddToCart";
import Charge from "../PointOfSale/Charge";
import Options from "../PointOfSale/Options";
import PrintReceipt from "../PointOfSale/PrintReceipt";
import SingleProduct from "../PointOfSale/SingleProduct";
import SplitPayment from "../PointOfSale/SplitPayment";
import Tips from "../PointOfSale/Tips";
import Support from "../Support/Support";
import StoreSearch from "../StoreSearch/StoreSearch";
import BusinessProfile from '../BusinessProfile/BusinessProfile'
import MainCategories from '../Settings/MainCategories'
import AddAttributes from '../Settings/AddAttributes'
import Locations from '../Settings/Locations'
import Referrals from '../Settings/Referrals'
import TeamMembers from '../Settings/TeamMembers'
import BusinessRegistration from '../Registration/BusinessRegistration'
import Transactions from '../PointOfSale/Transactions'
import Orders from '../PointOfSale/Orders'
import Dashboard from '../PointOfSale/Dashboard'

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  const [loaded] = useFonts({
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsLight: require("../../../assets/fonts/Poppins-Light.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };
  return (
    <Stack.Navigator initialRouteName="Merchant">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "#ffcc00",
          },
          headerTintColor: "#ffcc00",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="Merchant"
        component={Merchant}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "#ffcc00",
          },
          headerTintColor: "#ffcc00",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "#ffcc00",
          },
          headerTintColor: "#ffcc00",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="LoginFailed"
        component={LoginFailed}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "#ffcc00",
          },
          headerTintColor: "#ffcc00",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "#ffcc00",
          },
          headerTintColor: "#ffcc00",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="PasswordRecovery"
        component={PasswordRecovery}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "#ffcc00",
          },
          headerTintColor: "#ffcc00",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "#ffcc00",
          },
          headerTintColor: "#ffcc00",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="TermsOfUse"
        component={TermsOfUse}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "#ffcc00",
          },
          headerTintColor: "#ffcc00",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="PopUpAlert"
        component={PopUpAlert}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "#ffcc00",
          },
          headerTintColor: "#ffcc00",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="Verification"
        component={Verification}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "#ffcc00",
          },
          headerTintColor: "#ffcc00",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="EditMerchantProfile"
        component={EditMerchantProfile}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "#ffcc00",
          },
          headerTintColor: "#ffcc00",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="Welcome"
        component={Welcome}
      />
      {/* <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "#ffcc00",
          },
          headerTintColor: "#ffcc00",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
        name="MerchantProfile"
        component={MerchantProfile}
      /> */}
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PointOfSaleTab"
        component={BottomTabNavigation}
      />
    </Stack.Navigator>
  );
};

export const DashboardStack = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Dashboard"
        component={Dashboard}
      />
    </Stack.Navigator>
  );
};
export const TransactionsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Transactions">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Transactions"
        component={Transactions}
      />
    </Stack.Navigator>
  );
};
export const PointOfSaleStack = () => {
  return (
    <Stack.Navigator initialRouteName="PointOfSale">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PointOfSale"
        component={PointOfSale}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Categories"
        component={Categories}
      />
    </Stack.Navigator>
  );
};
export const OrdersStack = () => {
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Orders"
        component={Orders}
      />
    </Stack.Navigator>
  );
};
export const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Settings"
        component={Settings}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PosSettings"
        component={PosSettings}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="MerchantProfile"
        component={MerchantProfile}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EditMerchantProfile"
        component={EditMerchantProfile}
      />
            <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddAttributes"
        component={AddAttributes}
      />
                  <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Referrals"
        component={Referrals}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="TeamMembers"
        component={TeamMembers}
      />
      
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="BusinessRegistration"
        component={BusinessRegistration}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Locations"
        component={Locations}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="ProductList"
        component={ProductList}
      />
            <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="MainCategories"
        component={MainCategories}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Categories"
        component={Categories}
      />
        <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="BusinessProfile"
        component={BusinessProfile}
      />
    </Stack.Navigator>
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
//     borderColor: '#ffcc00',
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
//     shadowColor: '#7F5DF0',
//     shadowOffset: {width: 0, height: 10},
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//     elevation: 5,
//   },
//   textColorSecondary: {
//     color: colors.secondary,
//   },
//   formControl: {
//     paddingTop: '3%',
//     paddingHorizontal: padding.sm,
//     width: '100%',
//   },
//   formControlTask: {
//     paddingTop: '3%',
//     paddingHorizontal: padding.sm,
//     width: '100%',
//   },
//   formControlInline: {
//     flexDirection: 'row',
//   },
//   formItem: {
//     width: '48%',
//   },
//   formItemTask: {
//     width: '30%',
//   },
//   btn: {
//     marginBottom: padding.sm,
//     justifyContent: 'center',
//     backgroundColor: colors.primary,
//     width: '100%',
//     borderRadius: 10,
//     elevation: 5,
//   },
//   icon: {
//     color: colors.label,
//     fontSize: 25,
//     marginBottom: 15,
//     paddingRight: '60%',
//   },
//   textColorWhite: {
//     color: 'white',
//   },
//   error: {
//     borderColor: '#ff0000',
//   },
//   input: {
//     width: '90%',
//   },
//   heading: {
//     textAlign: 'center',
//     justifyContent: 'center',
//     fontSize: fonts.md,
//     fontWeight: 'bold',
//     color: colors.secondary,
//     height: '10%',
//     flexDirection: 'row',
//     width: '100%',
//     borderBottomColor: '#DBE9F6',
//     borderBottomWidth: 1,
//   },
//   lastItem: {
//     marginLeft: '4%',
//   },
// });
