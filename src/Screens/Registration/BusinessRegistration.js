import * as React from "react";
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
import RegistrationFrom from "./RegistrationForm";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class BusinessRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        <View style={styles.toolbarContainer}>
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
            <Text style={baseStyle.h2}>Business Registration</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.formContainer}>
            <RegistrationFrom />
            <View
              style={{ alignItems: "flex-end", width: "100%", marginTop: 15 }}
            >
              <TouchableOpacity
                style={baseStyle.blueButton}
                onPress={() => navigation.navigate("Welcome")}
              >
                <Text style={baseStyle.blueBtnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Card>
    );
  }
}

export default BusinessRegistration;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "10%",
    marginBottom: "10%",
  },
  toolbarContainer: { paddingLeft: "5%", paddingRight: "5%" },
  loginVector: {
    width: 171,
    height: 171,
    resizeMode: "contain",
    marginBottom: "5%",
  },
  LoginContent: {
    marginBottom: "5%",
    maxWidth: 595,
  },
  topBar: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    width: "100%",
    marginTop: "10%",
  },
  innerStyle: {
    textAlign: "center",
  },
  backbtn: {
    position: "absolute",
    left: 0,
    top: 6,
  },
  nextbtn: {
    position: "absolute",
    right: 0,
    top: 6,
  },
  backArrow: {
    width: 20,
    height: 20,
  },
});
