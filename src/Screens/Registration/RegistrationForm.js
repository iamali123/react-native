import * as React from "react";
// import { useState } from "react";
import { TextInput, View, StyleSheet, Text, Image } from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import { Picker } from "@react-native-picker/picker";

class RgistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedLanguage: "" };
  }
  render() {
    return (
      <>
        <TextInput
          style={baseStyle.input}
          value=""
          placeholder="Business Name"
        />
        <TextInput
          style={baseStyle.input}
          value=""
          placeholder="Phone Number"
        />
        <TextInput style={baseStyle.input} value="" placeholder="Address" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View style={[baseStyle.dropdownWrapper, styles.dualField]}>
            <Picker
              style={baseStyle.dropdown}
              selectedValue={this.state.selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ selectedLanguage: itemValue })
              }
            >
              <Picker.Item label="City" value="City" />
              <Picker.Item label="London" value="London" />
            </Picker>
          </View>
          <View style={[baseStyle.dropdownWrapper, styles.dualField]}>
            <Picker
              style={baseStyle.dropdown}
              selectedValue={this.state.selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ selectedLanguage: itemValue })
              }
            >
              <Picker.Item label="State" value="State" />
              <Picker.Item label="London" value="London" />
            </Picker>
          </View>
        </View>
        <TextInput style={baseStyle.input} value="" placeholder="Zip Code" />
        <View style={baseStyle.dropdownWrapper}>
          <Picker
            style={baseStyle.dropdown}
            selectedValue={this.state.selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ selectedLanguage: itemValue })
            }
          >
            <Picker.Item
              label="EIN (Optional)"
              value="United States Of America"
            />
            <Picker.Item label="London" value="London" />
          </Picker>
        </View>
        <TextInput
          style={baseStyle.input}
          value=""
          placeholder="Businesss Category"
        />
        <View style={baseStyle.dropdownWrapper}>
          <Picker
            style={baseStyle.dropdown}
            selectedValue={this.state.selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ selectedLanguage: itemValue })
            }
          >
            <Picker.Item
              label="EIN (Optional)"
              value="United States Of America"
            />
            <Picker.Item label="London" value="London" />
          </Picker>
        </View>
        <View style={baseStyle.dropdownWrapper}>
          <Picker
            style={baseStyle.dropdown}
            selectedValue={this.state.selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ selectedLanguage: itemValue })
            }
          >
            <Picker.Item
              label="EIN (Optional)"
              value="United States Of America"
            />
            <Picker.Item label="London" value="London" />
          </Picker>
          {/* <Image
            style={baseStyle.bottomDrop}
            source={require("../../../assets/images/dropdown-icon.png")}
          ></Image> */}
        </View>

        <Text style={[baseStyle.h2, styles.mt]}>Bank Infromation</Text>
        <TextInput
          style={baseStyle.input}
          value=""
          placeholder="Businesss Category"
        />
        <TextInput
          style={baseStyle.input}
          value=""
          placeholder="Businesss Category"
        />
        <TextInput
          style={baseStyle.input}
          value=""
          placeholder="Businesss Category"
        />
        <TextInput
          style={baseStyle.input}
          value=""
          placeholder="Businesss Category"
        />
      </>
    );
  }
}

export default RgistrationForm;

const styles = StyleSheet.create({
  dualField: {
    width: "47%",
  },
  mt: {
    marginTop: 15,
    marginBottom: 10,
    textAlign: "left",
  },
});
