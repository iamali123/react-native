import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class BusinessProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
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
              <Text style={baseStyle.h2}>Business Profile</Text>
              <TouchableOpacity
                style={styles.nextbtn}
                onPress={() =>
                  this.props.navigation.navigate("BusinessRegistration")
                }
              >
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
            <View style={styles.formContainer}>
              <View style={styles.profileContainer}>
                <ImageBackground
                  style={styles.profileBg}
                  source={require("../../../assets/images/business-banner.png")}
                >
                    <View style={styles.userImgBg}>
                  <Image
                    style={styles.userImg}
                    source={require("../../../assets/images/pollotropical.png")}
                  />
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.infoContainer}>
                <View style={styles.col}>
                  <Text style={[baseStyle.text, styles.innerstyle]}>
                    First Name:
                  </Text>
                  <Text style={[baseStyle.text, styles.innerstyle]}>
                    Last Name:
                  </Text>
                  <Text style={[baseStyle.text, styles.innerstyle]}>DOB:</Text>
                  <Text style={[baseStyle.text, styles.innerstyle]}>
                    Phone Number:
                  </Text>
                  <Text style={[baseStyle.text, styles.innerstyle]}>
                    Address
                  </Text>
                  <Text style={[baseStyle.text, styles.innerstyle]}>
                    Country
                  </Text>
                  <Text style={[baseStyle.text, styles.innerstyle]}>City</Text>
                  <Text style={[baseStyle.text, styles.innerstyle]}>State</Text>
                  <Text style={[baseStyle.text, styles.innerstyle]}>
                    Zip Code
                  </Text>
                </View>
                <View style={styles.col}>
                  <Text style={[baseStyle.text, styles.alignText]}>
                    Andrew Carnegie
                  </Text>
                  <Text style={[baseStyle.text, styles.alignText]}>Smith</Text>
                  <Text style={[baseStyle.text, styles.alignText]}>
                    20/12/1995
                  </Text>
                  <Text style={[baseStyle.text, styles.alignText]}>
                    111 222 333
                  </Text>
                  <Text style={[baseStyle.text, styles.alignText]}>
                    7633, Holley Street Jackson, NJ 08527
                  </Text>
                  <Text style={[baseStyle.text, styles.alignText]}>USA</Text>
                  <Text style={[baseStyle.text, styles.alignText]}>
                    California
                  </Text>
                  <Text style={[baseStyle.text, styles.alignText]}>
                    California
                  </Text>
                  <Text style={[baseStyle.text, styles.alignText]}>31512</Text>
                </View>
                
              </View>
              <Text style={[baseStyle.h2, styles.accountHeading]}>Account Information</Text>
              <View style={[styles.infoContainer, styles.accountContainer]}>

                <View style={styles.col}>
                  <Text style={[baseStyle.text, styles.innerstyle]}>
                    Name
                  </Text>
                  <Text style={[baseStyle.text, styles.innerstyle]}>
                   Routing Number
                  </Text>
                  <Text style={[baseStyle.text, styles.innerstyle]}>Account Number</Text>
                </View>
                <View style={styles.col}>
                  <Text style={[baseStyle.text, styles.alignText]}>
                    Andrew Carnegie
                  </Text>
                  <Text style={[baseStyle.text, styles.alignText]}>Smith</Text>
                  <Text style={[baseStyle.text, styles.alignText]}>
                    20/12/1995
                  </Text>
                </View>
                
              </View>

            </View>
          </ScrollView>
        </Card>
      </>
    );
  }
}

export default BusinessProfile;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4%",
    marginBottom: "15%",
  },
  toolbarContainer: {
    paddingLeft: "5%", paddingRight: "5%",
    marginTop: "8%",
  },
  profileContainer: {
    width: "100%",
  },
  profileBg: {
    width: windowWidth,
    height: windowHeight / 4,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  col: {
    width: "50%",
  },
  userImg: {
    resizeMode: "contain",
    width: 90,
    height: 90
  },
  infoContainer: {
    marginTop: "25%",
    width: windowWidth - 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountContainer: {
    marginTop: "5%",
  },
  alignText: {
    textAlign: "right",
    marginBottom: 12,
  },
  innerstyle: {
    textAlign: "left",
    marginBottom: 12,
  },
  topBar: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    width: "100%",
    marginTop: "10%",
    width: windowWidth - 40,
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
  userImgBg: {
    width: windowWidth / 3,
    height: windowHeight / 6,
    marginBottom: -50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  accountHeading: {
      textAlign: "left",
      width: windowWidth - 50,
      marginTop: 15
  }
});
