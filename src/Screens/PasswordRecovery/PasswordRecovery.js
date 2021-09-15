import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class PasswordRecovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", modalVisible: false };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  _passwordRecovery() {
    Alert.alert(" ", "My Alert Msg", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  }
  _renderModal() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                We have send you an email to your registered address with a
                verification code.
              </Text>
              <Pressable
                style={[baseStyle.blueButton, styles.innerStyle]}
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
              >
                <Text style={styles.textStyle}>Accept</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
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
            <Text style={baseStyle.h2}>Password Recovery</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.formContainer}>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/password-recovery.png")}
            />
            <View style={styles.bottomContent}>
              <TextInput
                style={baseStyle.input}
                value={this.state.email}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={(value) => this.setState({ email: value })}
              />
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.innerStyle]}
                onPress={() => this.setModalVisible(true)}
              >
                <Text style={baseStyle.blueBtnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          {this._renderModal()}
        </ScrollView>
      </Card>
    );
  }
}

export default PasswordRecovery;

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
  loginVector: {
    width: windowWidth - 40,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "5%",
  },

  bottomContent: {
    marginTop: "15%",
    width: "100%",
  },
  innerStyle: {
    width: "100%",
    marginTop: "10%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
