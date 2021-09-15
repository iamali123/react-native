import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  Switch,
  Dimensions,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import color from "../../UI/BaseStyle/Colors";
// import { RadioButton } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PosSettings = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Card>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => this.props.navigation.goBack()}
        >
          <Image
            style={styles.backArrow}
            source={require("../../../assets/images/back-arrow.png")}
          />
        </TouchableOpacity>
        <Text style={baseStyle.h2}>POS Settings</Text>
        <TouchableOpacity
          style={styles.nextbtn}
          onPress={() =>
            this.props.navigation.navigate("EditBusinessProfile")
          }
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.posContainer}>
          <View style={styles.switchBlock}>
            <View style={styles.switchRow}>
              <View style={styles.switchInner}>
                <Text style={baseStyle.h4}>Always Open</Text>
                <View style={styles.switchWrapper}>
                  <Switch
                    style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                    trackColor={{ false: "#fff", true: "#fff" }}
                    thumbColor={isEnabled ? "#3F466F" : "#3F466F"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  ></Switch>
                </View>
              </View>
            </View>
            <View style={styles.switchRow}>
              <View style={styles.switchInner}>
                <Text style={baseStyle.h4}>Enable Basic Payments</Text>
                <View style={styles.switchWrapper}>
                  <Switch
                    style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                    trackColor={{ false: "#fff", true: "#fff" }}
                    thumbColor={isEnabled ? "#3F466F" : "#3F466F"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  ></Switch>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.posList}>
            <TouchableOpacity style={styles.posItem}>
              <Image
                style={styles.posImg}
                source={require("../../../assets/images/discounts.png")}
              />
              <Text style={baseStyle.h4}>Discounts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.posItem}
            >
              <Image
                style={styles.posImg}
                source={require("../../../assets/images/tips.png")}
              />
              <Text style={baseStyle.h4}>Tips</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.posItem}>
              <Image
                style={styles.posImg}
                source={require("../../../assets/images/transactions.png")}
              />
              <Text style={baseStyle.h4}>Transactions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.posItem}>
              <Image
                style={styles.posImg}
                source={require("../../../assets/images/taxes.png")}
              />
              <Text style={baseStyle.h4}>Taxes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.posItem}>
              <Image
                style={styles.posImg}
                source={require("../../../assets/images/promotions.png")}
              />
              <Text style={baseStyle.h4}>Promotions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.posItem}>
              <Image
                style={styles.posImg}
                source={require("../../../assets/images/description.png")}
              />
              <Text style={baseStyle.h4}>Decription</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.posItem}>
              <Image
                style={styles.posImg}
                source={require("../../../assets/images/units.png")}
              />
              <Text style={baseStyle.h4}>Units</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.posItem}>
              <Image
                style={styles.posImg}
                source={require("../../../assets/images/title.png")}
              />
              <Text style={baseStyle.h4}>Title</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Card>
  );
};
const styles = StyleSheet.create({
  posContainer: {
    marginTop: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  switchBlock: {
    marginBottom: 30,
    flex: 1,
    width: "100%",
  },
  switchRow: {
    borderColor: "#D8E0F3",
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  switchInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  posList: {
    flex: 1,
    width: windowWidth - 50,
    marginBottom: 25,
  },
  posItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#ffffff",
    marginBottom: 20,
    borderRadius: 5,
  },
  posImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 20,
  },
  topBar: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    marginTop: "15%",
  },
  backbtn: {
    position: "absolute",
    left: 20,
    top: 6,
  },
  nextbtn: {
    position: "absolute",
    right: 20,
    top: 6,
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  switchWrapper: {
    borderColor: "#3F466F",
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "#fff"
  }
});

export default PosSettings;
