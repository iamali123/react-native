import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import color from "../../UI/BaseStyle/Colors";
import ResponsiveStylesheet from "react-native-responsive-stylesheet";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Orders = ({ navigation }) => {
  return (
    <Card>
      <View style={normalStyles.topBar}>
        <TouchableOpacity
          style={normalStyles.backbtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={normalStyles.backArrow}
            source={require("../../../assets/images/back-arrow.png")}
          />
        </TouchableOpacity>
        <Text style={baseStyle.h2}>Orders</Text>
      </View>
      <View style={normalStyles.filterSection}>
        <Text style={[baseStyle.h4, normalStyles.innerStyle]}>Filters</Text>
        <View style={normalStyles.categoriesList}>
          <TouchableOpacity style={[normalStyles.catBtn, normalStyles.active]}>
            <Text style={[baseStyle.blueBtnText, normalStyles.activeTextColor]}>
              Date
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={normalStyles.catBtn}>
            <Text style={[baseStyle.blueBtnText, normalStyles.textColor]}>
              Status
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={normalStyles.catBtn}>
            <Text style={[baseStyle.blueBtnText, normalStyles.textColor]}>
              Order Title
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={normalStyles.productRow}>
        <View style={[baseStyle.shadow, normalStyles.posItem]}>
          <View style={[baseStyle.row, { width: "100%" }]}>
            <Text style={baseStyle.h6}>Robert Johnson</Text>
            <Text style={[baseStyle.h6, normalStyles.priceColor]}>$28.76</Text>
          </View>
          <View style={[normalStyles.normalRow, responsiveStyles.normalRow]}>
            <View style={[normalStyles.leftCol, responsiveStyles.leftCol]}>
              <View style={[baseStyle.row, { marginBottom: 10 }]}>
                <Text
                  style={[
                    baseStyle.h6,
                    normalStyles.innerStyle,
                    { paddingRight: 10 },
                  ]}
                >
                  A30458
                </Text>
                <Text style={[baseStyle.h6, normalStyles.orderStatus]}>
                  Pending
                </Text>
              </View>
              <View style={baseStyle.row}>
                <Text
                  style={[
                    baseStyle.h6,
                    normalStyles.textColor,
                    { paddingRight: 10 },
                  ]}
                >
                  24/08/21
                </Text>
                <Text style={[baseStyle.h6, normalStyles.textColor]}>
                  02:13 pm
                </Text>
              </View>
            </View>
            <View style={[normalStyles.RightCol, responsiveStyles.RightCol]}>
              <View style={[baseStyle.row, { paddingTop: 20 }]}>
                <TouchableOpacity
                  style={[
                    baseStyle.blueButton,
                    normalStyles.btnStyle,
                    { marginRight: 10 },
                  ]}
                  onPress={() => this.props.navigation.navigate("Charge")}
                >
                  <Text style={baseStyle.blueBtnText}>Checkout</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[baseStyle.blueButton, normalStyles.btnStyle]}
                  onPress={() => this.props.navigation.navigate("PointOfSale")}
                >
                  <Text style={baseStyle.blueBtnText}>Edit Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={[baseStyle.shadow, normalStyles.posItem]}>
          <View style={[baseStyle.row, { width: "100%" }]}>
            <Text style={baseStyle.h6}>Robert Johnson</Text>
            <Text style={[baseStyle.h6, normalStyles.priceColor]}>$28.76</Text>
          </View>
          <View style={[normalStyles.normalRow, responsiveStyles.normalRow]}>
            <View style={[normalStyles.leftCol, responsiveStyles.leftCol]}>
              <View style={[baseStyle.row, { marginBottom: 10 }]}>
                <Text
                  style={[
                    baseStyle.h6,
                    normalStyles.innerStyle,
                    { paddingRight: 10 },
                  ]}
                >
                  A30458
                </Text>
                <Text style={[baseStyle.h6, normalStyles.orderStatus]}>
                  Pending
                </Text>
              </View>
              <View style={baseStyle.row}>
                <Text
                  style={[
                    baseStyle.h6,
                    normalStyles.textColor,
                    { paddingRight: 10 },
                  ]}
                >
                  24/08/21
                </Text>
                <Text style={[baseStyle.h6, normalStyles.textColor]}>
                  02:13 pm
                </Text>
              </View>
            </View>
            <View style={[normalStyles.RightCol, responsiveStyles.RightCol]}>
              <View style={[baseStyle.row, { paddingTop: 20 }]}>
                <TouchableOpacity
                  style={[
                    baseStyle.blueButton,
                    normalStyles.btnStyle,
                    { marginRight: 10 },
                  ]}
                  onPress={() => this.props.navigation.navigate("Charge")}
                >
                  <Text style={baseStyle.blueBtnText}>Checkout</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[baseStyle.blueButton, normalStyles.btnStyle]}
                  onPress={() => this.props.navigation.navigate("PointOfSale")}
                >
                  <Text style={baseStyle.blueBtnText}>Edit Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={[baseStyle.shadow, normalStyles.posItem]}>
          <View style={[baseStyle.row, { width: "100%" }]}>
            <Text style={baseStyle.h6}>Robert Johnson</Text>
            <Text style={[baseStyle.h6, normalStyles.priceColor]}>$28.76</Text>
          </View>
          <View style={[normalStyles.normalRow, responsiveStyles.normalRow]}>
            <View style={[normalStyles.leftCol, responsiveStyles.leftCol]}>
              <View style={[baseStyle.row, { marginBottom: 10 }]}>
                <Text
                  style={[
                    baseStyle.h6,
                    normalStyles.innerStyle,
                    { paddingRight: 10 },
                  ]}
                >
                  A30458
                </Text>
                <Text style={[baseStyle.h6, normalStyles.orderStatus]}>
                  Pending
                </Text>
              </View>
              <View style={baseStyle.row}>
                <Text
                  style={[
                    baseStyle.h6,
                    normalStyles.textColor,
                    { paddingRight: 10 },
                  ]}
                >
                  24/08/21
                </Text>
                <Text style={[baseStyle.h6, normalStyles.textColor]}>
                  02:13 pm
                </Text>
              </View>
            </View>
            <View style={[normalStyles.RightCol, responsiveStyles.RightCol]}>
              <View style={[baseStyle.row, { paddingTop: 20 }]}>
                <TouchableOpacity
                  style={[
                    baseStyle.blueButton,
                    normalStyles.btnStyle,
                    { marginRight: 10 },
                  ]}
                  onPress={() => this.props.navigation.navigate("Charge")}
                >
                  <Text style={baseStyle.blueBtnText}>Checkout</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[baseStyle.blueButton, normalStyles.btnStyle]}
                  onPress={() => this.props.navigation.navigate("PointOfSale")}
                >
                  <Text style={baseStyle.blueBtnText}>Edit Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        </View>
      </ScrollView>
    </Card>
  );
};

const normalStyles = ResponsiveStylesheet.create({
  topBar: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    width: "100%",
    marginTop: "10%",
  },
  backbtn: {
    position: "absolute",
    left: 20,
    top: 6,
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  filterSection: {
    marginTop: "5%",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productRow: {
    margin: 20,
  },
  btnRow: {
    flexDirection: "row",
    marginBottom: 30,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "space-between",
  },

  categoriesList: {
    flexDirection: "row",
  },
  innerStyle: {
    color: color.pelorous,
  },
  textColor: {
    color: "#8085A5",
  },
  catBtn: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#3F466F",
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 5,
    marginRight: 15,
  },
  btnStyle: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 7,
  },
  active: {
    backgroundColor: color.eastbay,
  },
  activeTextColor: {
    color: "#fff",
  },

  orderStatus: {
    color: "#FF0000",
  },
  priceColor: {
    color: "#129516",
  },
  RightCol: {
    alignItems: "flex-end",
  },
  leftCol: {
    paddingRight: 20,
    alignItems: "flex-start",
  },
  posItem: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#ffffff",
    marginBottom: 20,
    borderRadius: 5,
  },
  normalRow: {
    flexDirection: "row",
  },
});
//Media Queries styles:
var responsiveStyles = ResponsiveStylesheet.createSized("max-width", {
  380: {
    normalRow: {
      flexWrap: "wrap",
    },
    RightCol: {
      width: "100%",
    },
    leftCol: {
      width: "100%",
    },
  },
});

export default Orders;
