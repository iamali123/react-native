import colors from "./Colors";
import {
	Dimensions,
	PixelRatio
  } from "react-native";

// const { fontScale } = Dimensions.get("window");

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT,
  } = Dimensions.get('window');

  const scale = SCREEN_WIDTH / 750;

 function normalize(size) {
	const newSize = size * scale 
	if (Platform.OS === 'ios') {
	  return Math.round(PixelRatio.roundToNearestPixel(newSize))
	} else {
	  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
	}
  }

export default {
  colors,
  text: {
	fontFamily: "PoppinsLight",
    fontSize: normalize(26),
  },
  h1: {
	fontFamily: "PoppinsRegular",
	fontSize: normalize(48),
  },
  h2: {
    fontFamily: "PoppinsMedium",
    fontSize: normalize(34),
  },
        h3: {
 fontFamily: "PoppinsMedium",
    fontSize: normalize(30),
  },
      h4: {
	fontFamily: "PoppinsRegular",
    fontSize: normalize(28),
  },
      h5: {
    fontFamily: "PoppinsMedium",
    fontSize: normalize(26),
  },
    h6: {
    fontFamily: "PoppinsMedium",
    fontSize: normalize(24),
  },

  blueButton: {
    backgroundColor: colors.pelorous,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 12,
    paddingBottom: 8,
    margin: 0,
    color: "#fff",
    borderRadius: 50,
  },
  blueBtnText: {
    color: "#fff",
	fontFamily: "PoppinsMedium",
    fontSize: normalize(32),
	textAlign: "center",
  },
  input: {
    height: SCREEN_HEIGHT/15,
    width: "100%",
    marginBottom: 12,
    borderColor: "#D8E0F3",
    borderWidth: 2,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    fontSize: normalize(28),
    color: "#3F466F",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  dropdown: {
    width: "100%",
    fontSize: normalize(28),
    color: "#3F466F",

},
dropdownWrapper: {
  height: SCREEN_HEIGHT/15,
  flexDirection: "row",
  position: "relative",
  borderColor: "#D8E0F3",
  borderWidth: 2,
  borderRadius: 50,
  backgroundColor: "#FFFFFF",
  paddingLeft: 20,
  paddingRight: 8,
  paddingTop: 10,
  paddingBottom: 10,
  marginBottom: 12,
},
bottomDrop: {
  position: "absolute",
  right: 17,
  width: 13,
  height: 13,
  top: 17,
  resizeMode: "contain"
},
row: {
  flexDirection: "row",
  justifyContent: "space-between"
},
shadow: {
shadowColor: '#ADB6D9',
shadowOffset: {width: 0, height: 2},
shadowOpacity: 0.38,
shadowRadius: 5,
elevation: 5,
}
};
