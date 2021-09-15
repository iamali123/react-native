import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import color from "../../UI/BaseStyle/Colors";
// import { Center } from "native-base";

const SplitPayment = ({ navigation }) => {
  return (
    <Card>
      <ScrollView>
        <View style={styles.chargeContainer}>
          <View style={[baseStyle.blueButton, styles.taxBtn]}>
            <Text style={baseStyle.blueBtnText}>Charge $116.47</Text>
            <Text style={styles.btnSmallText}>Including Tax</Text>
          </View>
          <Text style={(baseStyle.h4, styles.alignment)}>
            $0.00 of $500.00 Will remain after this transaction.
          </Text>
          <View style={{ width: "100%" }}>
            <Text style={baseStyle.h4}>Split By Amount</Text>
            <TextInput
              style={baseStyle.input}
              value=""
              placeholder="60.47"
              keyboardType="numeric"
            />
          </View>
          <View>
            <Text style={baseStyle.h4}>Split Into Equal Payments</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.iconBtn, styles.splitBtn]}
              >
                <Text style={[baseStyle.h6, styles.textColor]}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.iconBtn, styles.splitBtn]}
              >
                <Text style={[baseStyle.h6, styles.textColor]}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.iconBtn, styles.splitBtn]}
              >
                <Text style={[baseStyle.h6, styles.textColor]}>4</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.paymentTypes}>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => navigation.navigate("Charge")}
            >
              <Image
                style={styles.btnIcon}
                source={require("../../../assets/images/face-detection.png")}
              />
              <Text style={[baseStyle.h6, styles.textColor]}>
                Face Detection
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => navigation.navigate("Charge")}
            >
              <Image
                style={styles.btnIcon}
                source={require("../../../assets/images/face-detection.png")}
              />
              <Text style={[baseStyle.h6, styles.textColor]}>
                Face Detection
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => navigation.navigate("Charge")}
            >
              <Image
                style={styles.btnIcon}
                source={require("../../../assets/images/face-detection.png")}
              />
              <Text style={[baseStyle.h6, styles.textColor]}>
                Face Detection
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => navigation.navigate("Charge")}
            >
              <Image
                style={styles.btnIcon}
                source={require("../../../assets/images/face-detection.png")}
              />
              <Text style={[baseStyle.h6, styles.textColor]}>
                Face Detection
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => navigation.navigate("Charge")}
            >
              <Image
                style={styles.btnIcon}
                source={require("../../../assets/images/face-detection.png")}
              />
              <Text style={[baseStyle.h6, styles.textColor]}>
                Face Detection
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => navigation.navigate("Charge")}
            >
              <Image
                style={styles.btnIcon}
                source={require("../../../assets/images/face-detection.png")}
              />
              <Text style={[baseStyle.h6, styles.textColor]}>
                Face Detection
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              onPress={() => navigation.navigate("Charge")}
            >
              <Image
                style={styles.btnIcon}
                source={require("../../../assets/images/face-detection.png")}
              />
              <Text style={[baseStyle.h6, styles.textColor]}>
                Face Detection
              </Text>
            </TouchableOpacity>
            <View style={styles.splitPaymentBtn}>
              <TouchableOpacity
                style={baseStyle.blueButton}
                onPress={() => navigation.navigate("PrintReceipt")}
              >
                <Text style={baseStyle.blueBtnText}>Add Custom</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  chargeContainer: {
    flex: 1,
    marginTop: "20%",
    marginBottom: "15%",
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
  splitBtn: {
    width: "30%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
  },
  alignment: {
    textAlign: "center",
    marginBottom: 25,
  },
  iconBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
    borderColor: "#D8E0F3",
    borderWidth: 1,
    width: "48%",
    marginBottom: 20,
  },
  textColor: {
    color: color.eastbay,
    display: "flex",
    justifyContent: "center",
  },
  splitPaymentBtn: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 15,
  },
});

export default SplitPayment;
