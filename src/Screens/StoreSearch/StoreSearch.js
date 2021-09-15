import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";

const StoreSearch = ({ navigation }) => {
  return (
    <Card>
      <ScrollView>
        <View style={styles.searchContainer}>
          <View style={styles.searchList}>
            <Text>White Castle</Text>
            <Image
              style={styles.rightArrow}
              source={require("../../../assets/images/icon-arrow-left.png")}
            />
          </View>
          <View style={styles.searchList}>
            <Text>Buy Buy Baby</Text>
            <Image
              style={styles.rightArrow}
              source={require("../../../assets/images/icon-arrow-left.png")}
            />
          </View>
          <View style={styles.searchList}>
            <Text>Pollo Tropical</Text>
            <Image
              style={styles.rightArrow}
              source={require("../../../assets/images/icon-arrow-left.png")}
            />
          </View>
          <View style={styles.searchList}>
            <Text>Olive Garden</Text>
            <Image
              style={styles.rightArrow}
              source={require("../../../assets/images/icon-arrow-left.png")}
            />
          </View>
          <View style={styles.searchList}>
            <Text>LA Fitness</Text>
            <Image
              style={styles.rightArrow}
              source={require("../../../assets/images/icon-arrow-left.png")}
            />
          </View>
          <View style={styles.searchList}>
            <Text>Five Guys</Text>
            <Image
              style={styles.rightArrow}
              source={require("../../../assets/images/icon-arrow-left.png")}
            />
          </View>
          <View style={styles.searchList}>
            <Text>Buy Buy Baby</Text>
            <Image
              style={styles.rightArrow}
              source={require("../../../assets/images/icon-arrow-left.png")}
            />
          </View>
          <View style={styles.searchList}>
            <Text>Polllo Tropical</Text>
            <Image
              style={styles.rightArrow}
              source={require("../../../assets/images/icon-arrow-left.png")}
            />
          </View>
        </View>
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignItems: "center",
    paddingLeft: "8%",
    paddingRight: "5%",
  },
  searchList: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "8%",
  },
});

export default StoreSearch;
