import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  CheckBox,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import SignUpForm from "./SignUpForm";
import Card from "../../UI/Card";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessSelected: false,
      termsSelected: false,
      visible: false,
    };
  }

  _renderEyeButton() {
    if (this.state.visible) {
      return (
        <View style={{ alignItems: "flex-end", width: "100%", marginTop: 15 }}>
          <TouchableOpacity
            style={baseStyle.blueButton}
            onPress={() => this.props.navigation.navigate("Verification")}
          >
            <Text style={baseStyle.blueBtnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
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
            <Text style={baseStyle.h2}>Sign Up</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.formContainer}>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/sign-up.png")}
            />
            <SignUpForm />
            <View style={styles.bottomContent}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <Text style={baseStyle.text}>Sign up for a business</Text>
                <CheckBox
                  value={this.state.businessSelected}
                  onValueChange={(value) =>
                    this.setState({
                      businessSelected: value,
                    })
                  }
                  style={styles.checkbox}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Text style={baseStyle.text}>
                  Accept Privacy Policy & Terms of Use
                </Text>
                <CheckBox
                  value={this.state.termsSelected}
                  onValueChange={(value) =>
                    this.setState({
                      termsSelected: value,
                      visible: !this.state.visible,
                    })
                  }
                  style={styles.checkbox}
                />
              </View>
            </View>
            {this._renderEyeButton()}
          </View>
        </ScrollView>
      </Card>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    // marginTop: "10%",
    marginBottom: "20%",
  },
  toolbarContainer: { paddingLeft: "5%", paddingRight: "5%" },
  loginVector: {
    width: windowWidth - 40,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "1%",
  },
  bottomContent: {
    marginTop: "5%",
    marginBottom: "5%",
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
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});
