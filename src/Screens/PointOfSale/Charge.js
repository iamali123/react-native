import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import color from "../../UI/BaseStyle/Colors";
// import { marginBottom } from "styled-system";
// import { marginLeft } from "styled-system";

const Charge = ({ navigation }) => {
  return (
    <Card>
      <View style={styles.chargeContainer}>
        <View style={[baseStyle.blueButton, styles.taxBtn]}>
          <Text style={baseStyle.blueBtnText}>Charge $116.47</Text>
          <Text style={styles.btnSmallText}>Including Tax</Text>
        </View>
        <Text style={baseStyle.h4}>Select Payment Type</Text>
        <View style={styles.paymentTypes}>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("Tips")}
          >
            <Image
              style={styles.btnIcon}
              source={require("../../../assets/images/face-detection.png")}
            />
            <Text style={[baseStyle.h6, styles.textColor]}>Face Detection</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("Tips")}
          >
            <Image
              style={styles.btnIcon}
              source={require("../../../assets/images/face-detection.png")}
            />
            <Text style={[baseStyle.h6, styles.textColor]}>Face Detection</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("Tips")}
          >
            <Image
              style={styles.btnIcon}
              source={require("../../../assets/images/face-detection.png")}
            />
            <Text style={[baseStyle.h6, styles.textColor]}>Face Detection</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("Tips")}
          >
            <Image
              style={styles.btnIcon}
              source={require("../../../assets/images/face-detection.png")}
            />
            <Text style={[baseStyle.h6, styles.textColor]}>Face Detection</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("Tips")}
          >
            <Image
              style={styles.btnIcon}
              source={require("../../../assets/images/face-detection.png")}
            />
            <Text style={[baseStyle.h6, styles.textColor]}>Face Detection</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("Tips")}
          >
            <Image
              style={styles.btnIcon}
              source={require("../../../assets/images/face-detection.png")}
            />
            <Text style={[baseStyle.h6, styles.textColor]}>Face Detection</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.iconBtn]}
            onPress={() => navigation.navigate("EmailLink")}
          >
            <Image
              style={styles.btnIcon}
              source={require("../../../assets/images/face-detection.png")}
            />
            <Text style={[baseStyle.h6, styles.textColor]}>Face Detection</Text>
          </TouchableOpacity>
          <View style={styles.splitPaymentBtn}>
            <TouchableOpacity
              style={baseStyle.blueButton}
              onPress={() => navigation.navigate("SplitPayment")}
            >
              <Text style={baseStyle.blueBtnText}>Split Payment</Text>
            </TouchableOpacity>
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
  taxBtn: {
    width: "100%",
    backgroundColor: color.eastbay,
    marginBottom: 25,
  },
  btnSmallText: {
    textAlign: "center",
    color: "#ffffff",
  },
  paymentTypes: {
    flexDirection: "row",
    marginTop: 25,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 25,
    paddingTop: 6,
    paddingBottom: 6,
    borderColor: "#D8E0F3",
    borderWidth: 1,
    width: "48%",
    marginBottom: 20,
  },
  textColor: {
    color: color.eastbay,
  },
  splitPaymentBtn: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 15,
  },
});

export default Charge;
