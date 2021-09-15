import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        {/* <ScrollView> */}
        <View style={styles.container}>
          <Image
            source={require("../../../assets/images/emoji.png")}
            style={styles.image}
          ></Image>

          <Image
            source={require("../../../assets/images/customer-vector.png")}
            style={styles.customerVector}
          ></Image>

          <View style={styles.content}>
            <Text style={[baseStyle.h1, styles.welcomeHeading]}>Customer</Text>
            <Text style={[baseStyle.text, styles.welcomeDesc]}>
              The best part of ordering stuff online, the packages! It's like
              receiving a present every time an order shows up at your door.
            </Text>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.innerStyle]}
              onPress={() => this.props.navigation.navigate("LoginTab")}
            >
              <Text style={baseStyle.blueBtnText}>Getting Started</Text>
            </TouchableOpacity>
            <View style={styles.tabswrap}>
              <TouchableOpacity
                style={styles.tabbtn}
                onPress={() => this.props.navigation.navigate("CustomerTab")}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.tabbtn}
                onPress={() => this.props.navigation.navigate("MerchantTab")}
              ></TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </ScrollView> */}
      </Card>
    );
  }
}

export default Customer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    marginBottom: "30%",
  },
  toolbarContainer: { paddingLeft: "5%", paddingRight: "5%" },
  image: {
    resizeMode: "contain",
    width: windowWidth / 3,
    height: windowHeight / 4,
    marginBottom: "3%",
  },
  customerVector: {
    resizeMode: "contain",
    width: windowWidth - 40,
    alignSelf: "flex-end",
    height: windowHeight / 3,
    marginBottom: "3%",
  },
  content: {
    flex: 1,
    width: windowWidth - 40,
    textAlign: "center",
    alignItems: "center",
  },
  tabswrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  tabbtn: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#4C89E3",
    marginLeft: 5,
    marginRight: 5,
  },
  innerStyle: {
    marginBottom: 20,
    width: "100%",
  },
  welcomeDesc: {
    marginBottom: "8%",
    textAlign: "center",
  },
});
