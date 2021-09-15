import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import color from "../../UI/BaseStyle/Colors";

const AddOrder = ({ navigation }) => {
  return (
    <Card>

      <View style={styles.chargeContainer}>
	  <TextInput
        style={baseStyle.input}
        value=""
        placeholder="Order Title"
        keyboardType="numeric"
      />
		<View style={styles.paymentTypes}>
		<TouchableOpacity
        style={[baseStyle.blueButton, styles.iconBtn]}  
        onPress={() => navigation.navigate("Charge")}
      >
        <Text  style={[baseStyle.h6, styles.textColor]}>Title 1</Text>
      </TouchableOpacity>
	  <TouchableOpacity
        style={[baseStyle.blueButton, styles.iconBtn]}  
        onPress={() => navigation.navigate("Charge")}
      >
        <Text  style={[baseStyle.h6, styles.textColor]}>Title 2</Text>
      </TouchableOpacity>
	  <TouchableOpacity
        style={[baseStyle.blueButton, styles.iconBtn]}  
        onPress={() => navigation.navigate("Charge")}
      >
        <Text  style={[baseStyle.h6, styles.textColor]}>Title 3</Text>
      </TouchableOpacity>
	  <TouchableOpacity
        style={[baseStyle.blueButton, styles.iconBtn]}  
        onPress={() => navigation.navigate("Charge")}
      >
        <Text  style={[baseStyle.h6, styles.textColor]}>Title 4</Text>
      </TouchableOpacity>
	  <TouchableOpacity
        style={[baseStyle.blueButton, styles.iconBtn]}  
        onPress={() => navigation.navigate("Charge")}
      >
        <Text  style={[baseStyle.h6, styles.textColor]}>Title 5</Text>
      </TouchableOpacity>
	  <TouchableOpacity
        style={[baseStyle.blueButton, styles.iconBtn]}  
        onPress={() => navigation.navigate("Charge")}
      >
        <Text  style={[baseStyle.h6, styles.textColor]}>Title 6</Text>
      </TouchableOpacity>
		</View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  chargeContainer: {
    flex: 1,
    marginTop: "20%",
    marginBottom: "20%",
	paddingRight: "10%",
	paddingLeft: "10%",
  },
  paymentTypes: {
     flexDirection: "row",
	 marginTop: 20,
	 flexWrap:"wrap",
	 justifyContent: "space-between"
  },
  iconBtn: {
	backgroundColor: "#ffffff",
	paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
	borderColor: "#D8E0F3",
    borderWidth: 1,
	width: "30%",
	marginBottom: 15,

  },
  textColor: {
	  color: color.eastbay,
	  textAlign: "center"
  },
});

export default AddOrder;
