// import {from} from 'form-data';
import React from "react";
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Card = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.topWaveLayer}
        source={require("../../assets/images/top-wave.png")}
      />
      {props.children}
      <ImageBackground
        style={styles.bottomWaveLayer}
        source={require("../../assets/images/bottom-wave.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FF",
  },
  topWaveLayer: {
    width: windowWidth,
    height: windowHeight / 6,
    position: "absolute",
    top: 0,
    right: 0,
    resizeMode: "cover",
  },
  bottomWaveLayer: {
    width: windowWidth,
    height: windowHeight / 3,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -1,
    resizeMode: "cover",
  },
});

export default Card;
