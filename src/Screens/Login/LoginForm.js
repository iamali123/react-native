import * as React from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      ShowPassword: true,
      visible: false,
    };
  }

  toggleSwitch() {
    this.setState({ ShowPassword: !this.state.ShowPassword });
  }
  _renderEyeButton() {
    if (this.state.visible) {
      return (
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => {
            this.toggleSwitch();
          }}
        >
          <Image
            style={{ alignSelf: "center" }}
            source={
              this.state.ShowPassword
                ? require("../../../assets/images/eye-disable.png")
                : require("../../../assets/images/eye-enable.png")
            }
          ></Image>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <>
        <TextInput
          style={baseStyle.input}
          value={this.state.email}
          placeholder="Email"
          keyboardType="default"
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
            style={{ width: "100%", paddingRight: "20%" }}
            secureTextEntry={this.state.ShowPassword}
            value={this.state.password}
            placeholder="Password"
            keyboardType="default"
            onChangeText={(value) =>
              this.setState({ password: value, visible: true })
            }
          />
          <TouchableOpacity
            style={styles.faceButton}
            onPress={() => {
              this.props.navigation.navigate();
            }}
          >
            <Image
              style={styles.faceIcon}
              source={require("../../../assets/images/faceIcon.png")}
            ></Image>
          </TouchableOpacity>
          {this._renderEyeButton()}
        </View>
      </>
    );
  }
}

export default LoginForm;
const styles = StyleSheet.create({
  eyeIcon: {
    position: "absolute",
    right: "20%",

    alignSelf: "center",
  },
  faceIcon: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  faceButton: {
    position: "absolute",
    right: "5%",
    alignSelf: "center",
  },
});
