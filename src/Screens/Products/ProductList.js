import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class ProductList extends React.Component {
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
            <Text style={baseStyle.h2}>Products</Text>
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
        <ScrollView>
          <View style={styles.formContainer}>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.saleBtn]}
              onPress={() => this.props.navigation.navigate("Verification")}
            >
              <Text style={baseStyle.blueBtnText}>Add Product</Text>
              <Image
                style={styles.btnIcon}
                source={require("../../../assets/images/add-product-icon.png")}
              />
            </TouchableOpacity>
            <View style={styles.productList}>
              <View style={styles.productBlock}>
               <ImageBackground
                  source={require("../../../assets/images/peppermint.png")}
                  style={styles.image}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Options")}
                    style={styles.editBtn}
                  >
                    <Image
                      style={styles.editIcon}
                      source={require("../../../assets/images/edit-product-icon.png")}
                    />
                  </TouchableOpacity>
                </ImageBackground> 
                <View
                  style={{
                    paddingTop: 20,
                    paddingBottom: 15,
                    paddingRight: 20,
                  }}
                >
                  <Text style={[baseStyle.h6, styles.mb]}>Peppermint Ma...</Text>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                </View>
              </View>
              <View style={styles.productBlock}>
               <ImageBackground
                  source={require("../../../assets/images/peppermint.png")}
                  style={styles.image}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Options")}
                    style={styles.editBtn}
                  >
                    <Image
                      style={styles.editIcon}
                      source={require("../../../assets/images/edit-product-icon.png")}
                    />
                  </TouchableOpacity>
                </ImageBackground> 
                <View
                  style={{
                    paddingTop: 20,
                    paddingBottom: 15,
                    paddingRight: 20,
                  }}
                >
                  <Text style={[baseStyle.h6, styles.mb]}>Peppermint Ma...</Text>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                </View>
              </View>
              <View style={styles.productBlock}>
               <ImageBackground
                  source={require("../../../assets/images/peppermint.png")}
                  style={styles.image}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Options")}
                    style={styles.editBtn}
                  >
                    <Image
                      style={styles.editIcon}
                      source={require("../../../assets/images/edit-product-icon.png")}
                    />
                  </TouchableOpacity>
                </ImageBackground> 
                <View
                  style={{
                    paddingTop: 20,
                    paddingBottom: 15,
                    paddingRight: 20,
                  }}
                >
                  <Text style={[baseStyle.h6, styles.mb]}>Peppermint Ma...</Text>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                </View>
              </View>
              <View style={styles.productBlock}>
               <ImageBackground
                  source={require("../../../assets/images/peppermint.png")}
                  style={styles.image}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Options")}
                    style={styles.editBtn}
                  >
                    <Image
                      style={styles.editIcon}
                      source={require("../../../assets/images/edit-product-icon.png")}
                    />
                  </TouchableOpacity>
                </ImageBackground> 
                <View
                  style={{
                    paddingTop: 20,
                    paddingBottom: 15,
                    paddingRight: 20,
                  }}
                >
                  <Text style={[baseStyle.h6, styles.mb]}>Peppermint Ma...</Text>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                </View>
              </View>
              <View style={styles.productBlock}>
               <ImageBackground
                  source={require("../../../assets/images/peppermint.png")}
                  style={styles.image}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Options")}
                    style={styles.editBtn}
                  >
                    <Image
                      style={styles.editIcon}
                      source={require("../../../assets/images/edit-product-icon.png")}
                    />
                  </TouchableOpacity>
                </ImageBackground> 
                <View
                  style={{
                    paddingTop: 20,
                    paddingBottom: 15,
                    paddingRight: 20,
                  }}
                >
                  <Text style={[baseStyle.h6, styles.mb]}>Peppermint Ma...</Text>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Card>
    );
  }
}

export default ProductList;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "5%",
    marginBottom: "10%",
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
  nextbtn: {
    position: "absolute",
    right: 0,
    top: 6,
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  saleBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 12,
    paddingBottom: 7,
  },
  btnIcon: {
    width: 22,
    height: 22,
    resizeMode: "cover",
    marginLeft: 5,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 30
  },
  editIcon: {
    resizeMode: "contain",
    width: 24,
    height: 20,
  },
  editBtn: {
    position: "absolute",
    top: -15,
    right: -15,
    backgroundColor: "#49B7C4",
    borderRadius: 50,
  width: 37,
  height: 37,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
  },
  priceColor: {
    color: "#E22020",
  },
  image: {
    resizeMode: "cover",
    height: 150,
    position: "relative",
    borderRadius: 15,
  },
  productBlock: {
    width: "47%",
    marginBottom: 10
  }
});
