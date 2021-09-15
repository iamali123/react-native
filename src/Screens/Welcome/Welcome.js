import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Welcome extends React.Component {
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
              style={styles.nextbtn}
              onPress={() => this.props.navigation.navigate("PointOfSaleTab")}
            >
              <Text>Skip</Text>
            </TouchableOpacity>
            <Text style={baseStyle.h2}>Welcome</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.formContainer}>
            <Image
              style={styles.loginVector}
              source={require("../../../assets/images/merchant-welcome.png")}
            />
            <View style={styles.bottomContent}>
              <Text style={[baseStyle.text, styles.innerStyle]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </View>
          </View>
        </ScrollView>
      </Card>
    );
  }
}

export default Welcome;

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
    marginBottom: "7%",
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
    top: 0,
  },
  nextbtn: {
    position: "absolute",
    right: 0,
    top: 0,
  },
});
