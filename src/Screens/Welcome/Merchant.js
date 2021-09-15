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
import { CommonActions } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class Merchant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require("../../../assets/images/emoji.png")}
              style={styles.image}
            ></Image>

            <Image
              source={require("../../../assets/images/merchant-vector.png")}
              style={styles.merchantVector}
            ></Image>

            <View style={styles.content}>
              <Text style={[baseStyle.h1, styles.welcomeHeading]}>
                Merchant
              </Text>
              <Text style={[baseStyle.text, styles.welcomeDesc]}>
                We are selling dreams. We are merchant of happiness.
              </Text>
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.innerStyle]}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={baseStyle.blueBtnText}>Getting Started</Text>
              </TouchableOpacity>
              {/* <View style={styles.tabswrap}>
                <TouchableOpacity
                  style={styles.tabbtn}
                  onPress={() => this.props.navigation.navigate("CustomerTab")}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={styles.tabbtn}
                  onPress={() => this.props.navigation.navigate("MerchantTab")}
                ></TouchableOpacity>
              </View> */}
            </View>
          </View>
        </ScrollView>
      </Card>
    );
  }
}

export default Merchant;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: windowWidth / 3,
    height: windowHeight / 4,
    marginBottom: "3%",
  },
  toolbarContainer: { paddingLeft: "5%", paddingRight: "5%" },
  merchantVector: {
    resizeMode: "contain",
    width: windowWidth - 40,
    height: windowHeight / 3,
    marginBottom: "3%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    // marginBottom: "30%",
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
