import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import color from "../../UI/BaseStyle/Colors";

const PrintReceipt = ({ navigation }) => {
  return (
    <Card>
      <View style={styles.chargeContainer}>
        <View style={styles.selectedItem}>
          <Text style={baseStyle.h5}>Chocolate Frappucino...</Text>
          <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
        </View>
        <View style={styles.selectedItem}>
          <Text style={baseStyle.h5}>Salad With Spray...</Text>
          <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
        </View>
        <View style={styles.selectedItem}>
          <Text style={baseStyle.h5}>Peppermint Macchiato</Text>
          <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
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

export default PrintReceipt;
