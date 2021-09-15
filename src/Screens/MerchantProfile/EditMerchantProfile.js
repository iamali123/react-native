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
import ProfileForm from "./ProfileForm";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class EditMerchantProfile extends React.Component {
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
            <TouchableOpacity
              style={styles.nextbtn}
              onPress={() => this.props.navigation.navigate("Welcome")}
            >
              <Text>Submit</Text>
            </TouchableOpacity>
            <Text style={baseStyle.h2}>Profile</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.formContainer}>
            <ProfileForm />
            <View
              style={{ alignItems: "flex-end", width: "100%", marginTop: 15 }}
            >
              <TouchableOpacity
                style={baseStyle.blueButton}
                onPress={() => navigation.navigate("Merchant")}
              >
                <Text style={baseStyle.blueBtnText}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Card>
    );
  }
}

export default EditMerchantProfile;

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
