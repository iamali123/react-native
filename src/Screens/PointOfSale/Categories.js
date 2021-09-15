import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import color from "../../UI/BaseStyle/Colors";

const Categories = ({ navigation }) => {
  return (
    <Card>
      <View style={styles.ChargeContainer}>
        <Text style={[baseStyle.h4, styles.titleColor]}>Foods</Text>
        <View style={styles.paymentTypes}>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn, styles.active]}
            onPress={() => navigation.navigate("PointOfSale")}
          >
            <Text style={[baseStyle.h6, styles.textColor, styles.activeText]}>
              Shakes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("PointOfSale")}
          >
            <Text style={[baseStyle.h6, styles.textColor]}>Pizza & Burger</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("PointOfSale")}
          >
            <Text style={[baseStyle.h6, styles.textColor]}>Grocery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("PointOfSale")}
          >
            <Text style={[baseStyle.h6, styles.textColor]}>Salad & Fries</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("PointOfSale")}
          >
            <Text style={[baseStyle.h6, styles.textColor]}>Pharmacy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("PointOfSale")}
          >
            <Text style={[baseStyle.h6, styles.textColor]}>Meat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("PointOfSale")}
          >
            <Text style={[baseStyle.h6, styles.textColor]}>Health</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("PointOfSale")}
          >
            <Text style={[baseStyle.h6, styles.textColor]}>
              Auto Accessories
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("PointOfSale")}
          >
            <Text style={[baseStyle.h6, styles.textColor]}>Frozen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  ChargeContainer: {
    flex: 1,
    marginTop: "20%",
    marginBottom: "20%",
    paddingRight: "10%",
    paddingLeft: "10%",
  },
  paymentTypes: {
    flexDirection: "row",
    marginTop: 10,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconBtn: {
    backgroundColor: "#ffffff",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 6,
    borderColor: "#3F466F",
    borderWidth: 1,
    marginBottom: 15,
  },
  textColor: {
    color: color.eastbay,
    textAlign: "center",
  },
  titleColor: {
    color: color.pelorous,
  },
  active: {
    backgroundColor: color.eastbay,
  },
  activeText: {
    color: "#fff",
  },
});

export default Categories;
