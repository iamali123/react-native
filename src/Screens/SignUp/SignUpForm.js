import * as React from "react";
import { TextInput,  View,
  TouchableOpacity,
  Image, StyleSheet } from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      ShowPassword: true,
    };
  }
  render() {
    return (
      <>
        <TextInput
          style={baseStyle.input}
          value={this.state.email}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(value) => this.setState({ email: value })}
        />
                <View
          style={[
            baseStyle.input,
            {
              flexDirection: "row",
              position: "relative",
            },
          ]}
        >
        <TextInput
         style={{ width: "100%", paddingRight: 30 }}
          value={this.state.password}
          placeholder="Password"
          keyboardType="default"
          onChangeText={(value) => this.setState({ password: value })}
        />
                  <TouchableOpacity
            style={styles.faceButton}
            onPress={() => {
              this.props.navigation.navigate();
            }}
          >
            <Image
              style={styles.faceIcon}
              source={require("../../../assets/images/password-eye.png")}
            ></Image>
          </TouchableOpacity>
          </View>
          <View
          style={[
            baseStyle.input,
            {
              flexDirection: "row",
              position: "relative",
            },
          ]}
        >
        <TextInput
     style={{ width: "100%", paddingRight: 30 }}
          value={this.state.confirmPassword}
          placeholder="Confirm Password"
          keyboardType="default"
          onChangeText={(value) => this.setState({ confirmPassword: value })}
        />
         <TouchableOpacity
            style={styles.faceButton}
            onPress={() => {
              this.props.navigation.navigate();
            }}
          >
            <Image
              style={styles.faceIcon}
              source={require("../../../assets/images/password-eye.png")}
            ></Image>
          </TouchableOpacity>
          </View>
      </>
    );
  }
}

export default SignUpForm;

const styles = StyleSheet.create({
  faceIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain"
  },
  faceButton: {
    position: "absolute",
    right: 20,
    alignSelf: "center",
  },
});
