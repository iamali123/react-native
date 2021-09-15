import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import color from "../../UI/BaseStyle/Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Tips = ({ navigation }) => {
  return (
    <Card>
      <View style={styles.tipsContainer}>
        <Image
          style={styles.loginVector}
          source={require("../../../assets/images/merchant-welcome.png")}
        />
        <View style={[baseStyle.blueButton, styles.taxBtn]}>
          <Text style={baseStyle.blueBtnText}>Amount $116.47</Text>
          <Text style={styles.btnSmallText}>(Tip not included)</Text>
        </View>
        <Text style={[baseStyle.text, styles.innerStyle]}>
          How much you would like to give tip to the waiter please select an
          option below.
        </Text>
        <View style={styles.tipValue}>
          <TouchableOpacity
            style={styles.tip}
            onPress={() => navigation.navigate("SplitPayment")}
          >
            <Text style={baseStyle.h6}>15% = $3.00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tip}
            onPress={() => navigation.navigate("SplitPayment")}
          >
            <Text style={baseStyle.h6}>18% = $3.60</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tip}
            onPress={() => navigation.navigate("SplitPayment")}
          >
            <Text style={baseStyle.h6}>20% = $3.60</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tipsInputs}>
          <TextInput
            style={baseStyle.input}
            value=""
            placeholder="Custom Tip"
            keyboardType="numeric"
          />
          <TextInput
            style={baseStyle.input}
            value=""
            placeholder="Extra Tip"
            keyboardType="numeric"
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  tipsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
    marginBottom: "15%",
  },
  loginVector: {
    width: windowWidth - 40,
    height: windowHeight / 3,
    resizeMode: "contain",
  },
  taxBtn: {
    width: windowWidth - 40,
    backgroundColor: color.eastbay,
    marginBottom: 25,
  },
  btnSmallText: {
    textAlign: "center",
    color: "#ffffff",
  },
  tipValue: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  tip: {
    width: "33.333%",
    backgroundColor: "#ffffff",
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    display: "flex",
    alignItems: "center",
  },
  innerStyle: {
    width: windowWidth - 40,
    textAlign: "center",
    marginBottom: 30,
  },
  tipsInputs: {
    width: windowWidth - 40,
  },
});

export default Tips;
