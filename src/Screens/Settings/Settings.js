import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import color from "../../UI/BaseStyle/Colors";

const Settings = ({ navigation }) => {
  return (
    <Card>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.backArrow}
            source={require("../../../assets/images/back-arrow.png")}
          />
        </TouchableOpacity>
        <Text style={baseStyle.h2}>Settings</Text>
      </View>
      <View style={styles.settingsContainer}>
        <TouchableOpacity
          style={styles.itemsBlock}
          onPress={() => navigation.navigate("MerchantProfile")}
        >
          <Image
            style={styles.pageImg}
            source={require("../../../assets/images/profile.png")}
          />
          <Text style={[baseStyle.h6, styles.alignText]}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemsBlock}
          onPress={() => navigation.navigate("BusinessProfile")}
        >
          <Image
            style={styles.pageImg}
            source={require("../../../assets/images/business-profile.png")}
          />
          <Text style={[baseStyle.h6, styles.alignText]}>Business Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemsBlock, styles.noRightBorder]}
          onPress={() => navigation.navigate("PosSettings")}
        >
          <Image
            style={styles.pageImg}
            source={require("../../../assets/images/pos-settings.png")}
          />
          <Text style={[baseStyle.h6, styles.alignText]}>POS Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemsBlock}
          onPress={() => navigation.navigate("ProductList")}
        >
          <Image
            style={styles.pageImg}
            source={require("../../../assets/images/products.png")}
          />
          <Text style={[baseStyle.h6, styles.alignText]}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemsBlock}
          onPress={() => navigation.navigate("MainCategories")}
        >
          <Image
            style={styles.pageImg}
            source={require("../../../assets/images/categories.png")}
          />
          <Text style={[baseStyle.h6, styles.alignText]}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemsBlock, styles.noRightBorder]}
          onPress={() => navigation.navigate("AddAttributes")}
        >
          <Image
            style={styles.pageImg}
            source={require("../../../assets/images/attributes.png")}
          />
          <Text style={[baseStyle.h6, styles.alignText]}>Attributes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemsBlock}
          onPress={() => navigation.navigate("TeamMembers")}
        >
          <Image
            style={styles.pageImg}
            source={require("../../../assets/images/team.png")}
          />
          <Text style={baseStyle.h6}>Team</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemsBlock}
          onPress={() => navigation.navigate("Referrals")}
        >
          <Image
            style={styles.pageImg}
            source={require("../../../assets/images/referrals.png")}
          />
          <Text style={[baseStyle.h6, styles.alignText]}>Referrals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemsBlock, styles.noRightBorder]}
          onPress={() => navigation.navigate("Locations")}
        >
          <Image
            style={styles.pageImg}
            source={require("../../../assets/images/locations.png")}
          />
          <Text style={[baseStyle.h6, styles.alignText]}>Locations</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemsBlock, styles.noBottomBorder]}
          onPress={() => navigation.navigate("Transactions")}
        >
          <Image
            style={styles.pageImg}
            source={require("../../../assets/images/transactions.png")}
          />
          <Text style={[baseStyle.h6, styles.alignText]}>Transactions</Text>
        </TouchableOpacity>
        <View style={[styles.itemsBlock, styles.noBottomBorder]}></View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  settingsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemsBlock: {
    alignItems: "center",
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 25,
    paddingBottom: 20,
    borderColor: color.gray,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    width: "33.333%",
  },
  pageImg: {
    maxWidth: 45,
    maxHeight: 45,
    marginBottom: 8,
    resizeMode: "contain",
  },
  noRightBorder: {
    borderRightWidth: 0,
  },
  noBottomBorder: {
    borderBottomWidth: 0,
  },
  topBar: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    width: "100%",
    marginBottom: "5%",
    marginTop: "15%",
  },
  backbtn: {
    position: "absolute",
    left: 25,
    top: 6,
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  alignText: {
    textAlign: "center",
  },
});

export default Settings;
