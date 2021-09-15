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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class LoginFailed extends React.Component {
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
            <Text style={baseStyle.h2}>Login In Failed</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.formContainer}>
            <View style={styles.LoginContent}>
              <Text style={[baseStyle.text, styles.innerStyle]}>
                You've entered wrong email and password Please ensure have you
                registered? If you don't have sign up please.
              </Text>
            </View>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/loginfailed.png")}
            />
            <View style={styles.bottomContent}>
              <View style={{ flexDirection: "row" }}>
                <Text style={[baseStyle.text, styles.innerStyle]}>
                  Don’t you have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text style={[baseStyle.text, styles.innerStyle]}>
                    {" "}
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={[baseStyle.text, styles.innerStyle]}>
                Forgot Password?
              </Text>
            </View>
          </View>
        </ScrollView>
      </Card>
    );
  }
}

export default LoginFailed;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "10%",
    marginBottom: "20%",
  },
  toolbarContainer: { paddingLeft: "5%", paddingRight: "5%" },
  loginVector: {
    width: windowWidth - 40,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "5%",
  },
  LoginContent: {
    marginBottom: "10%",
    maxWidth: 595,
  },
  bottomContent: {
    marginTop: "20%",
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
  backArrow: {
    width: 20,
    height: 20,
  },
});
