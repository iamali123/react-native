import React from "react";
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
import color from "../../UI/BaseStyle/Colors";

const PointOfSale = ({ navigation }) => {
  return (
    <Card>
      <View style={styles.filterSection}>
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.taxBtn]}
            onPress={() => navigation.navigate("Charge")}
          >
            <Text style={baseStyle.blueBtnText}>Charge $116.47</Text>
            <Text style={styles.btnSmallText}>Including Tax</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[baseStyle.blueButton, styles.saleBtn]}
            onPress={() => navigation.navigate("AddOrder")}
          >
            <Image
              style={styles.btnIcon}
              source={require("../../../assets/images/shopping.png")}
            />
            <Text style={baseStyle.blueBtnText}>New Sale</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesHead}>
          <Text style={[baseStyle.h4, styles.innerStyle]}>
            Shop by Categories
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
            <Text style={baseStyle.h6}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoriesList}>
            <TouchableOpacity
              style={[styles.catBtn, styles.active]}
              onPress={() => navigation.navigate("Shakes")}
            >
              <Text style={[baseStyle.blueBtnText, styles.activeTextColor]}>
                Shakes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.catBtn}
              onPress={() => navigation.navigate("Shakes")}
            >
              <Text style={[baseStyle.blueBtnText, styles.textColor]}>
                Pizza & Burger
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.catBtn}
              onPress={() => navigation.navigate("Shakes")}
            >
              <Text style={[baseStyle.blueBtnText, styles.textColor]}>
                Grocery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.catBtn}
              onPress={() => navigation.navigate("Shakes")}
            >
              <Text style={[baseStyle.blueBtnText, styles.textColor]}>
                Salad & Fries
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <ScrollView>
        <View style={styles.listViewFormat}>
          <TouchableOpacity onPress={() => navigation.navigate("view")}>
            <Image
              style={styles.ViewIcon}
              source={require("../../../assets/images/list-view.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("view")}>
            <Image
              style={styles.ViewIcon}
              source={require("../../../assets/images/column-view.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.filteredProducts}>
          <View style={styles.categoriesHead}>
            <Text style={[baseStyle.h4, styles.innerStyle]}>Shakes</Text>
            <TouchableOpacity onPress={() => navigation.navigate("shakes")}>
              <Text style={baseStyle.h6}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.productRow}
          >
            <TouchableOpacity style={styles.productCard}>
              <ImageBackground
                source={require("../../../assets/images/peppermint.png")}
                style={styles.image}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Options")}
                >
                  <Image
                    style={styles.optionsIcon}
                    source={require("../../../assets/images/options.png")}
                  />
                </TouchableOpacity>
              </ImageBackground>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingRight: 20,
                }}
              >
                <Text style={[baseStyle.h6, styles.mb]}>Peppermint Ma...</Text>
                <View style={[styles.row, styles.mb]}>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                  <View style={styles.row}>
                    <Image
                      style={styles.minusIcon}
                      source={require("../../../assets/images/decrement-icon.png")}
                    />
                    <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
                    <Image
                      style={styles.plusIcon}
                      source={require("../../../assets/images/increment-icon.png")}
                    />
                  </View>
                </View>
                <View style={styles.centerBtn}>
                  <TouchableOpacity
                    style={baseStyle.blueButton}
                    onPress={() => navigation.navigate("SingleProduct")}
                  >
                    <Text style={baseStyle.blueBtnText}>View Product</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productCard}>
              <ImageBackground
                source={require("../../../assets/images/chocolate.png")}
                style={styles.image}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Options")}
                >
                  <Image
                    style={styles.optionsIcon}
                    source={require("../../../assets/images/options.png")}
                  />
                </TouchableOpacity>
              </ImageBackground>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingRight: 20,
                }}
              >
                <Text style={[baseStyle.h6, styles.mb]}>Peppermint Ma...</Text>
                <View style={[styles.row, styles.mb]}>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                  <View style={styles.row}>
                    <Image
                      style={styles.minusIcon}
                      source={require("../../../assets/images/decrement-icon.png")}
                    />
                    <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
                    <Image
                      style={styles.plusIcon}
                      source={require("../../../assets/images/increment-icon.png")}
                    />
                  </View>
                </View>
                <View style={styles.centerBtn}>
                  <TouchableOpacity
                    style={baseStyle.blueButton}
                    onPress={() => navigation.navigate("SingleProduct")}
                  >
                    <Text style={baseStyle.blueBtnText}>View Product</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productCard}>
              <ImageBackground
                source={require("../../../assets/images/peppermint.png")}
                style={styles.image}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Options")}
                >
                  <Image
                    style={styles.optionsIcon}
                    source={require("../../../assets/images/options.png")}
                  />
                </TouchableOpacity>
              </ImageBackground>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingRight: 20,
                }}
              >
                <Text style={[baseStyle.h6, styles.mb]}>Peppermint Ma...</Text>
                <View style={[styles.row, styles.mb]}>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                  <View style={styles.row}>
                    <Image
                      style={styles.minusIcon}
                      source={require("../../../assets/images/decrement-icon.png")}
                    />
                    <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
                    <Image
                      style={styles.plusIcon}
                      source={require("../../../assets/images/increment-icon.png")}
                    />
                  </View>
                </View>
                <View style={styles.centerBtn}>
                  <TouchableOpacity
                    style={baseStyle.blueButton}
                    onPress={() => navigation.navigate("SingleProduct")}
                  >
                    <Text style={baseStyle.blueBtnText}>View Product</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.filteredProducts}>
          <View style={styles.categoriesHead}>
            <Text style={[baseStyle.h4, styles.innerStyle]}>
              Pizza & Burger
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("shakes")}>
              <Text style={baseStyle.h6}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.productRow}
          >
            <TouchableOpacity style={styles.productCard}>
              <ImageBackground
                source={require("../../../assets/images/pizza.png")}
                style={styles.image}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Options")}
                >
                  <Image
                    style={styles.optionsIcon}
                    source={require("../../../assets/images/options.png")}
                  />
                </TouchableOpacity>
              </ImageBackground>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingRight: 20,
                }}
              >
                <Text style={[baseStyle.h6, styles.mb]}>
                  Italian Pizza Delic...
                </Text>
                <View style={[styles.row, styles.mb]}>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                  <View style={styles.row}>
                    <Image
                      style={styles.minusIcon}
                      source={require("../../../assets/images/decrement-icon.png")}
                    />
                    <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
                    <Image
                      style={styles.plusIcon}
                      source={require("../../../assets/images/increment-icon.png")}
                    />
                  </View>
                </View>
                <View style={styles.centerBtn}>
                  <TouchableOpacity
                    style={baseStyle.blueButton}
                    onPress={() => navigation.navigate("SingleProduct")}
                  >
                    <Text style={baseStyle.blueBtnText}>View Product</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productCard}>
              <ImageBackground
                source={require("../../../assets/images/chocolate.png")}
                style={styles.image}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("SingleProduct")}
                >
                  <Image
                    style={styles.optionsIcon}
                    source={require("../../../assets/images/options.png")}
                  />
                </TouchableOpacity>
              </ImageBackground>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingRight: 20,
                }}
              >
                <Text style={[baseStyle.h6, styles.mb]}>Peppermint Ma...</Text>
                <View style={[styles.row, styles.mb]}>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                  <View style={styles.row}>
                    <Image
                      style={styles.minusIcon}
                      source={require("../../../assets/images/decrement-icon.png")}
                    />
                    <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
                    <Image
                      style={styles.plusIcon}
                      source={require("../../../assets/images/increment-icon.png")}
                    />
                  </View>
                </View>
                <View style={styles.centerBtn}>
                  <TouchableOpacity
                    style={baseStyle.blueButton}
                    onPress={() => navigation.navigate("SingleProduct")}
                  >
                    <Text style={baseStyle.blueBtnText}>View Product</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productCard}>
              <ImageBackground
                source={require("../../../assets/images/peppermint.png")}
                style={styles.image}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Options")}
                >
                  <Image
                    style={styles.optionsIcon}
                    source={require("../../../assets/images/options.png")}
                  />
                </TouchableOpacity>
              </ImageBackground>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingRight: 20,
                }}
              >
                <Text style={[baseStyle.h6, styles.mb]}>Peppermint Ma...</Text>
                <View style={[styles.row, styles.mb]}>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                  <View style={styles.row}>
                    <Image
                      style={styles.minusIcon}
                      source={require("../../../assets/images/decrement-icon.png")}
                    />
                    <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
                    <Image
                      style={styles.plusIcon}
                      source={require("../../../assets/images/increment-icon.png")}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  style={baseStyle.blueButton}
                  onPress={() => navigation.navigate("SingleProduct")}
                >
                  <Text style={baseStyle.blueBtnText}>View Product</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.filteredProducts}>
          <View style={styles.categoriesHead}>
            <Text style={[baseStyle.h4, styles.innerStyle]}>Shakes</Text>
            <TouchableOpacity onPress={() => navigation.navigate("shakes")}>
              <Text style={baseStyle.h6}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.productRow}
          >
            <TouchableOpacity style={styles.productCard}>
              <ImageBackground
                source={require("../../../assets/images/fries.png")}
                style={styles.image}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Options")}
                >
                  <Image
                    style={styles.optionsIcon}
                    source={require("../../../assets/images/options.png")}
                  />
                </TouchableOpacity>
              </ImageBackground>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingRight: 20,
                }}
              >
                <Text style={[baseStyle.h6, styles.mb]}>
                  Fries cheese fries...
                </Text>
                <View style={[styles.row, styles.mb]}>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                  <View style={styles.row}>
                    <Image
                      style={styles.minusIcon}
                      source={require("../../../assets/images/decrement-icon.png")}
                    />
                    <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
                    <Image
                      style={styles.plusIcon}
                      source={require("../../../assets/images/increment-icon.png")}
                    />
                  </View>
                </View>
                <View style={styles.centerBtn}>
                  <TouchableOpacity
                    style={baseStyle.blueButton}
                    onPress={() => navigation.navigate("SingleProduct")}
                  >
                    <Text style={baseStyle.blueBtnText}>View Product</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productCard}>
              <ImageBackground
                source={require("../../../assets/images/chocolate.png")}
                style={styles.image}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("SingleProduct")}
                >
                  <Image
                    style={styles.optionsIcon}
                    source={require("../../../assets/images/options.png")}
                  />
                </TouchableOpacity>
              </ImageBackground>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingRight: 20,
                }}
              >
                <Text style={[baseStyle.h6, styles.mb]}>Peppermint Ma...</Text>
                <View style={[styles.row, styles.mb]}>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                  <View style={styles.row}>
                    <Image
                      style={styles.minusIcon}
                      source={require("../../../assets/images/decrement-icon.png")}
                    />
                    <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
                    <Image
                      style={styles.plusIcon}
                      source={require("../../../assets/images/increment-icon.png")}
                    />
                  </View>
                </View>
                <View style={styles.centerBtn}>
                  <TouchableOpacity
                    style={baseStyle.blueButton}
                    onPress={() => navigation.navigate("SingleProduct")}
                  >
                    <Text style={baseStyle.blueBtnText}>View Product</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productCard}>
              <ImageBackground
                source={require("../../../assets/images/peppermint.png")}
                style={styles.image}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Options")}
                >
                  <Image
                    style={styles.optionsIcon}
                    source={require("../../../assets/images/options.png")}
                  />
                </TouchableOpacity>
              </ImageBackground>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingRight: 20,
                }}
              >
                <Text style={[baseStyle.h6, styles.mb]}>Peppermint Ma...</Text>
                <View style={[styles.row, styles.mb]}>
                  <Text style={[baseStyle.h6, styles.priceColor]}>$14.16</Text>
                  <View style={styles.row}>
                    <Image
                      style={styles.minusIcon}
                      source={require("../../../assets/images/decrement-icon.png")}
                    />
                    <Text style={[baseStyle.h6, styles.quantity]}>1</Text>
                    <Image
                      style={styles.plusIcon}
                      source={require("../../../assets/images/increment-icon.png")}
                    />
                  </View>
                </View>
                <View style={styles.centerBtn}>
                  <TouchableOpacity
                    style={baseStyle.blueButton}
                    onPress={() => navigation.navigate("SingleProduct")}
                  >
                    <Text style={baseStyle.blueBtnText}>View Product</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  filterSection: {
    marginBottom: 20,
    marginTop: "20%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productRow: {
    flexDirection: "row",
    marginLeft: 25,
    marginBottom: 30,
  },
  btnRow: {
    flexDirection: "row",
    marginBottom: 30,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "space-between",
  },
  btnSmallText: {
    textAlign: "center",
    color: "#ffffff",
  },
  saleBtn: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    paddingLeft: 13,
    paddingRight: 10,
    paddingTop: 12,
    paddingBottom: 5,
  },
  ViewIcon: {
    marginLeft: 7,
    marginRight: 7,
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  listViewFormat: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
  },
  categoriesList: {
    flexDirection: "row",
    marginLeft: 25,
  },
  innerStyle: {
    color: color.pelorous,
  },
  categoriesHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 6,
  },
  btnIcon: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  textColor: {
    color: color.eastbay,
  },
  catBtn: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#3F466F",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 7,
    marginRight: 15,
  },
  active: {
    backgroundColor: color.eastbay,
  },
  activeTextColor: {
    color: "#fff",
  },
  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginRight: 25,
    width: 284,
    justifyContent: "center",
  },
  image: {
    resizeMode: "cover",
    height: 185,
    width: "100%",
    position: "relative",
  },
  optionsIcon: {
    resizeMode: "contain",
    position: "absolute",
    top: 15,
    right: 20,
    width: 24,
    height: 7,
  },
  priceColor: {
    color: "#129516",
  },
  minusIcon: {
    width: 15,
    height: 3,
    resizeMode: "contain",
  },
  plusIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  mb: {
    marginBottom: 15,
  },
  quantity: {
    marginLeft: 15,
    marginRight: 15,
  },
  centerBtn: {
    alignItems: "center",
  },
  taxBtn: {
    width: "55%",
    backgroundColor: color.eastbay,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 12,
    paddingBottom: 10,
  },
});

export default PointOfSale;
