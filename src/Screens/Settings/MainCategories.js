import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class MainCategories extends React.Component {
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
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.backArrow}
                source={require("../../../assets/images/back-arrow.png")}
              />
            </TouchableOpacity>
            <Text style={baseStyle.h2}>Categories</Text>
            <TouchableOpacity
              style={styles.nextbtn}
              onPress={() =>
                this.props.navigation.navigate("EditMerchantProfile")
              }
            >
              <Image
                style={styles.backArrow}
                source={require("../../../assets/images/search-icon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={{ width: "100%" }}>
            <View>
              <View style={[baseStyle.row, styles.parentCategory]}>
                <Text style={baseStyle.h4}>Dairy</Text>
                <TouchableOpacity
              style={styles.nextbtn}
              onPress={() =>
                this.props.navigation.navigate("EditCategories")
              }
            >
                <Image
                  style={styles.dotsIcon}
                  source={require("../../../assets/images/gray-options-icon.png")}
                />
                </TouchableOpacity>
              </View>
              <View style={[baseStyle.row, styles.childCategory]}>
                <Text style={[baseStyle.h4, styles.textColor]}>Milk</Text>
                <TouchableOpacity
              style={styles.nextbtn}
              onPress={() =>
                this.props.navigation.navigate("EditCategories")
              }
            >
                <Image
                  style={styles.dotsIcon}
                  source={require("../../../assets/images/gray-options-icon.png")}
                />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <View style={[baseStyle.row, styles.parentCategory]}>
                <Text style={baseStyle.h4}>Dairy</Text>
                <TouchableOpacity
              style={styles.nextbtn}
              onPress={() =>
                this.props.navigation.navigate("EditCategories")
              }
            >
                <Image
                  style={styles.dotsIcon}
                  source={require("../../../assets/images/gray-options-icon.png")}
                />
                </TouchableOpacity>
              </View>
              <View style={[baseStyle.row, styles.parentCategory]}>
                <Text style={baseStyle.h4}>Dairy</Text>
                <TouchableOpacity
              style={styles.nextbtn}
              onPress={() =>
                this.props.navigation.navigate("EditCategories")
              }
            >
                <Image
                  style={styles.dotsIcon}
                  source={require("../../../assets/images/gray-options-icon.png")}
                />
                </TouchableOpacity>
              </View>
              <View style={[baseStyle.row, styles.parentCategory]}>
                <Text style={baseStyle.h4}>Dairy</Text>
                <TouchableOpacity
              style={styles.nextbtn}
              onPress={() =>
                this.props.navigation.navigate("EditCategories")
              }
            >
                <Image
                  style={styles.dotsIcon}
                  source={require("../../../assets/images/gray-options-icon.png")}
                />
                </TouchableOpacity>
              </View>
              <View style={[baseStyle.row, styles.parentCategory]}>
                <Text style={baseStyle.h4}>Dairy</Text>
                <TouchableOpacity
              style={styles.nextbtn}
              onPress={() =>
                this.props.navigation.navigate("EditCategories")
              }
            >
                <Image
                  style={styles.dotsIcon}
                  source={require("../../../assets/images/gray-options-icon.png")}
                />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Card>
    );
  }
}

export default MainCategories;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: "5%",
    marginBottom: "10%",
    paddingLeft: 20,
    paddingRight: 20,
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
    left: 20,
    top: 6,
  },
  nextbtn: {
    position: "absolute",
    right: 20,
    top: 6,
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  dotsIcon: {
    width: 20,
    height: 8,
  },
  parentCategory: {
    marginBottom: 8
  },
  childCategory: {
    marginBottom: 8,
    paddingLeft: 20
  },
  textColor: {
    color: "#49B7C4"
  }

});
