import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import color from "../../UI/BaseStyle/Colors";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Support = ({ navigation }) => {
  return (
    <Card>
      <ScrollView>
        <View style={styles.supportContainer}>
          {/* <View style={styles.innerContainer}>
            <TouchableOpacity style={styles.supportList}>
              <View style={styles.brandBlock}>
                <Image
                  style={styles.brandLogo}
                  source={require("../../assets/images/white-castle.png")}
                />
              </View>
			  <View>
			  <View style={styles.valuesRow}>
			  <Text style={baseStyle.h3}>White Castle</Text>
			  </View>
			  		  <View style={styles.valuesRow}>
			  			  <Text>US-3166</Text>
								  </View>
								  
            </TouchableOpacity> */}
        </View>
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
  },
  innerContainer: {
    width: "100%",
    borderColor: color.gray,
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  supportList: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 25,
    marginBottom: 25,
  },
  valuesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  brandBlock: {
    paddingRight: "5%",
  },
});

export default Support;
