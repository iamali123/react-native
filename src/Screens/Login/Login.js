import * as React from "react";
import LoginForm from "./LoginForm";
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
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        <View style={styles.toolbarContainer}>
          <View style={styles.topBar}>
            <Text style={baseStyle.h2}>Log In</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.formContainer}>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/login-vector.png")}
            />
            <LoginForm />
            <View
              style={{ alignItems: "flex-end", width: "100%", marginTop: 15 }}
            >
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.innerStyle]}
                onPress={() => this.props.navigation.navigate("PointOfSaleTab")}
              >
                <Text style={baseStyle.blueBtnText}>Log In</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomContent}>
              <View style={{ flexDirection: "row" }}>
                <Text style={[baseStyle.text, styles.innerStyle]}>
                  Don’t you have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text style={[baseStyle.text, styles.innerStyle]}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("PasswordRecovery")
                }
              >
                <Text style={[baseStyle.text, styles.innerStyle]}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Card>
    );
  }
}

export default Login;

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
    width: "100%",
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "2%",
  },
  bottomContent: {
    marginTop: "15%",
    textAlign: "center",
  },
  topBar: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    width: "100%",
    marginTop: "10%",
  },
  backbtn: {
    position: "absolute",
    left: 0,
    top: 6,
    marginLeft: "5%",
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  innerStyle: {
    textAlign: "center",
  },
});
