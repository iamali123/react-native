import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import { Picker } from "@react-native-picker/picker";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 600;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const SingleProduct = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Card>
      <ScrollView>
        <View style={styles.formContainer}>
          <ImageBackground
            style={styles.profileBg}
            source={require("../../../assets/images/machaitio.png")}
          ></ImageBackground>

          <View style={styles.contentContainer}>
            <Text style={baseStyle.h2}>Peppermint Macchiato</Text>
            <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
            <View style={styles.row}>
              <Text style={baseStyle.h3}>Quantity</Text>
              <View style={styles.rowBg}>
                <Image
                  style={styles.minusIcon}
                  source={require("../../../assets/images/decrement-icon.png")}
                />
                <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
                <Image
                  style={styles.plusIcon}
                  source={require("../../../assets/images/increment-icon.png")}
                />
              </View>
            </View>
            <TextInput
              style={baseStyle.input}
              value=""
              placeholder="Add Discount"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={baseStyle.h2}>Details</Text>
            <Text style={[baseStyle.text, styles.mb]}>
              Fresh peppermint mixed with choco, and blended cream
            </Text>
            <Picker
              style={baseStyle.dropdown}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Size" value="Size" />
              <Picker.Item label="XL" value="XL" />
            </Picker>
            <Picker
              style={baseStyle.dropdown}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Sugar" value="Sugar" />
              <Picker.Item label="Salt" value="Salt" />
            </Picker>
            <View style={[styles.row, styles.mt]}>
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.innerStyle]}
                onPress={() => navigation.navigate("PointOfSale")}
              >
                <Text style={[baseStyle.blueBtnText, styles.textSize]}>
                  Add More Product
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.innerStyle]}
                onPress={() => navigation.navigate("AddToCart")}
              >
                <Text style={[baseStyle.blueBtnText, styles.textSize]}>
                  Add To Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: "15%",
    marginBottom: "10%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  profileBg: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3,
    resizeMode: "cover",
    marginBottom: 40,
  },
  priceColor: {
    color: "#129516",
  },
  quantity: {
    marginLeft: 15,
    marginRight: 15,
  },
  contentContainer: {
    paddingRight: 40,
    paddingLeft: 40,
    paddingBottom: 10,
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
  rowBg: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  innerStyle: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    paddingBottom: 7,
  },
  textSize: {
    fontSize: normalize(28),
  },
  mb: {
    marginBottom: 12,
  },
  mt: {
    marginTop: 40,
  },
});

export default SingleProduct;
