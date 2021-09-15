import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import color from "../../UI/BaseStyle/Colors";

const AddToCart = ({ navigation }) => {
  return (
    <Card>
      <View style={styles.chargeContainer}>
        <View style={[baseStyle.blueButton, styles.taxBtn]}>
          <Text style={baseStyle.blueBtnText}>Amount $116.47</Text>
          <Text style={styles.btnSmallText}>Including Tax</Text>
        </View>
        <View style={styles.selectedItem}>
          <Text style={baseStyle.h5}>Chocolate Frappucino...</Text>
          <Image
            style={styles.minusIcon}
            source={require("../../../assets/images/decrement-icon.png")}
          />
          <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
          <Image
            style={styles.plusIcon}
            source={require("../../../assets/images/increment-icon.png")}
          />
          <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
          <TouchableOpacity>
            <Image
              style={styles.optionsIcon}
              source={require("../../../assets/images/options.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.selectedItem}>
          <Text style={baseStyle.h5}>Salad With Spray...</Text>
          <Image
            style={styles.minusIcon}
            source={require("../../../assets/images/decrement-icon.png")}
          />
          <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
          <Image
            style={styles.plusIcon}
            source={require("../../../assets/images/increment-icon.png")}
          />
          <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
          <TouchableOpacity>
            <Image
              style={styles.optionsIcon}
              source={require("../../../assets/images/options.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.selectedItem}>
          <Text style={baseStyle.h5}>Peppermint Macchiato</Text>
          <Image
            style={styles.minusIcon}
            source={require("../../../assets/images/decrement-icon.png")}
          />
          <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
          <Image
            style={styles.plusIcon}
            source={require("../../../assets/images/increment-icon.png")}
          />
          <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
          <TouchableOpacity>
            <Image
              style={styles.optionsIcon}
              source={require("../../../assets/images/options.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.row, styles.bborder]}>
          <View style={styles.leftCol}>
            <Text style={baseStyle.h6}>Subtotal</Text>
            <Text style={baseStyle.h6}>Sales Tax</Text>
            <Text style={baseStyle.h6}>Discount</Text>
          </View>
          <View style={styles.rightCol}>
            <Text style={baseStyle.h6}>$29.36</Text>
            <Text style={baseStyle.h6}>$2.15</Text>
            <Text style={baseStyle.h6}>$2.75</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.leftCol}>
            <Text style={baseStyle.h6}>Total</Text>
          </View>
          <View style={styles.rightCol}>
            <Text style={baseStyle.h6}>$28.76</Text>
          </View>
        </View>
        <View style={[styles.row, styles.mt]}>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.innerStyle]}
            onPress={() => navigation.navigate("PointOfSale")}
          >
            <Text style={[baseStyle.blueBtnText, styles.textSize]}>
              Cancel Order
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.innerStyle]}
            onPress={() => navigation.navigate("Charge")}
          >
            <Text style={[baseStyle.blueBtnText, styles.textSize]}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  chargeContainer: {
    flex: 1,
    marginTop: "20%",
    marginBottom: "20%",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  taxBtn: {
    width: "100%",
    backgroundColor: color.eastbay,
    marginBottom: 25,
  },
  btnSmallText: {
    textAlign: "center",
    color: "#ffffff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#D8E0F3",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    paddingBottom: 16,
    marginBottom: 20,
  },
  bborder: {
    borderColor: "#D8E0F3",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    paddingBottom: 8,
    marginBottom: 10,
  },
  priceColor: {
    color: "#129516",
  },

  minusIcon: {
    width: 15,
    height: 3,
    resizeMode: "contain",
  },
  plusIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  mt: {
    marginTop: 50,
  },
  leftCol: {
    width: "60%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  rightCol: {
    width: "40%",
    alignItems: "center",
  },
});

export default AddToCart;
