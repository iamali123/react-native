import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";

class Verification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pin1: "", pin2: "", pin3: "", pin4: "", pin5: "" };
  }
  ref1 = React.createRef();
  ref2 = React.createRef();
  ref3 = React.createRef();
  ref4 = React.createRef();
  ref5 = React.createRef();
  handleKeyPress = (e) => {
    if (e.nativeEvent.key === "Backspace") {
    }
  };
  render() {
    const { pin1, pin2, pin3, pin4, pin5 } = this.state;
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
            <TouchableOpacity
              style={styles.nextbtn}
              onPress={() => this.props.navigation.navigate("PopUpAlert")}
            >
              <Text>Next</Text>
            </TouchableOpacity>
            <Text style={baseStyle.h2}>Account Verification</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.formContainer}>
            <View style={styles.LoginContent}>
              <Text style={[baseStyle.text, styles.innerStyle]}>
                We have sent a verification code to your registered email
                address.
              </Text>
            </View>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/account-verification.png")}
            />
            <View style={styles.bottomContent}>
              <Text style={baseStyle.text}>Enter your verification code</Text>
            </View>
            <View style={styles.row}>
              <TextInput
                ref={this.ref1}
                style={[baseStyle.input, styles.codeInput]}
                value={pin1}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    this.ref1.current.focus();
                  }
                }}
                onChangeText={(pin1) => {
                  this.setState({ pin1: pin1 });
                  this.ref2.current.focus();
                }}
              />
              <TextInput
                ref={this.ref2}
                style={[baseStyle.input, styles.codeInput]}
                value={pin2}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    this.ref1.current.focus();
                  }
                }}
                onChangeText={(pin2) => {
                  this.setState({ pin2: pin2 });
                  this.ref3.current.focus();
                }}
              />
              <TextInput
                ref={this.ref3}
                style={[baseStyle.input, styles.codeInput]}
                value={pin3}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    this.ref2.current.focus();
                  }
                }}
                onChangeText={(pin3) => {
                  this.setState({ pin3: pin3 });
                  this.ref4.current.focus();
                }}
              />
              <TextInput
                ref={this.ref4}
                style={[baseStyle.input, styles.codeInput]}
                value={pin4}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    this.ref3.current.focus();
                  }
                }}
                onChangeText={(pin4) => {
                  this.setState({ pin4: pin4 });
                  this.ref5.current.focus();
                }}
              />
              <TextInput
                ref={this.ref5}
                style={[baseStyle.input, styles.codeInput]}
                value={pin5}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    this.ref4.current.focus();
                  }
                }}
                onChangeText={(pin5) => {
                  this.setState({ pin5: pin5 });
                  // this.ref1.current.focus();
                }}
              />
            </View>
          </View>
        </ScrollView>
      </Card>
    );
  }
}

export default Verification;

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
    width: 171,
    height: 171,
    resizeMode: "contain",
    marginBottom: "5%",
  },
  LoginContent: {
    marginBottom: "5%",
    maxWidth: 595,
  },
  bottomContent: {
    marginTop: "1%",
    textAlign: "center",
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  codeInput: {
    borderRadius: 8,
    width: "16%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    alignContent: "center",
    textAlign: "center",
  },
});
