import React from "react";
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
import { Picker } from "@react-native-picker/picker";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Transactions = ({ navigation }) => {
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
        <Text style={baseStyle.h2}>Transactions</Text>
        <TouchableOpacity
          style={styles.nextbtn}
          onPress={() => this.props.navigation.navigate("EditBusinessProfile")}
        >
          <Image
            style={styles.backArrow}
            source={require("../../../assets/images/search-icon.png")}
          />
        </TouchableOpacity>
      </View>
       <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterOptions}
      >
        <View style={[baseStyle.dropdownWrapper, styles.dropdownStyle]}>
          <Picker style={baseStyle.dropdown}>
            <Picker.Item label="Date" value="Date" />
            <Picker.Item label="London" value="London" />
          </Picker>
        </View>
        <View style={[baseStyle.dropdownWrapper, styles.dropdownStyle]}>
          <Picker style={baseStyle.dropdown}>
            <Picker.Item label="Status" value="Status" />
            <Picker.Item label="London" value="London" />
          </Picker>
        </View>
        <View style={[baseStyle.dropdownWrapper, styles.dropdownStyle]}>
          <Picker style={baseStyle.dropdown}>
            <Picker.Item label="Payment Method" value="Payment Method" />
            <Picker.Item label="London" value="London" />
          </Picker>
        </View>

      </ScrollView> 
      <ScrollView>
        <View style={styles.posContainer}>
          <View style={styles.switchBlock}>
            <View style={styles.switchRow}>
              <TouchableOpacity style={styles.switchInner}>
                <View style={styles.leftCol}>
                  <Text style={baseStyle.h2}>Robert Johnson</Text>
                  <Text style={[baseStyle.h5, styles.textColor]}>US-3166</Text>
                  <Text style={baseStyle.h5}>**** **** ****2258</Text>
                </View>
                <View style={styles.rightCol}>
                  <View style={baseStyle.row}>
                    <Text style={baseStyle.h6}>10/08/21</Text>
                    <Text style={baseStyle.h6, {paddingLeft: 10}}>12:45 pm</Text>
                  </View>
                  <Text style={[baseStyle.h5, styles.priceColor]}>$258.85</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.total}>
              <Text style={[baseStyle.h5, styles.textColor]}>ID: 85965452</Text>
              <View style={{paddingBottom: 15}}>
              <View style={baseStyle.row}>
                <Text style={baseStyle.h5}>Amount</Text>
                <Text style={baseStyle.h5}>$10.00</Text>
              </View>
              <View style={baseStyle.row}>
                <Text style={baseStyle.h5}>Amount</Text>
                <Text style={baseStyle.h5}>$10.00</Text>
              </View>
              <View style={baseStyle.row}>
                <Text style={baseStyle.h5}>Amount</Text>
                <Text style={baseStyle.h5}>$10.00</Text>
              </View>
              </View>
              <View style={styles.totalAmount}>
                <Text style={[baseStyle.h5, styles.mr]}>Total Amount</Text>
                <Text style={baseStyle.h5}>$10.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.switchBlock}>
            <View style={styles.switchRow}>
              <TouchableOpacity style={styles.switchInner}>
                <View style={styles.leftCol}>
                  <Text style={baseStyle.h2}>Robert Johnson</Text>
                  <Text style={[baseStyle.h5, styles.textColor]}>US-3166</Text>
                  <Text style={baseStyle.h5}>**** **** ****2258</Text>
                </View>
                <View style={styles.rightCol}>
                  <View style={baseStyle.row}>
                    <Text style={baseStyle.h6}>10/08/21</Text>
                    <Text style={baseStyle.h6, {paddingLeft: 10}}>12:45 pm</Text>
                  </View>
                  <Text style={[baseStyle.h5, styles.priceColor]}>$258.85</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.total}>
              <Text style={[baseStyle.h5, styles.textColor]}>ID: 85965452</Text>
              <View style={{paddingBottom: 15}}>
              <View style={baseStyle.row}>
                <Text style={baseStyle.h5}>Amount</Text>
                <Text style={baseStyle.h5}>$10.00</Text>
              </View>
              <View style={baseStyle.row}>
                <Text style={baseStyle.h5}>Amount</Text>
                <Text style={baseStyle.h5}>$10.00</Text>
              </View>
              <View style={baseStyle.row}>
                <Text style={baseStyle.h5}>Amount</Text>
                <Text style={baseStyle.h5}>$10.00</Text>
              </View>
              </View>
              <View style={styles.totalAmount}>
                <Text style={[baseStyle.h5, styles.mr]}>Total Amount</Text>
                <Text style={baseStyle.h5}>$10.00</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Card>
  );
};
const styles = StyleSheet.create({
  posContainer: {
    flex: 1,
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
    paddingTop: 15,
    paddingBottom: 15,
  },
  total: {
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: "#D8E0F3",
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 20,
    paddingBottom: 20,
  },
  totalAmount: {
    borderColor: "#D8E0F3",
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  mr: {
    marginRight: 15,
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
    backgroundColor: "#fff",
  },
  filterOptions: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
  },
  priceColor: {
    color: "#129516",
    position: "absolute",
    bottom: 0,
    right: 0
  },
  textColor: {
    color: "#49B7C4",
  },
  dropdownStyle: {
    width: 150,
    marginLeft: 20,
    paddingLeft: 12,
    paddingRight: 5,
  }
});

export default Transactions;
