import * as React from "react";
// import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import { Picker } from "@react-native-picker/picker";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedLanguage: "" };
  }
  render() {
    return (
      <>
        <TextInput style={baseStyle.input} value="" placeholder="First Name" />
        <TextInput style={baseStyle.input} value="" placeholder="Last Name" />
        <TextInput
          style={baseStyle.input}
          value=""
          placeholder="Date of Birth"
        />
                <View style={baseStyle.dropdownWrapper}>
        <Picker
          style={baseStyle.dropdown}
          selectedValue={this.state.selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ selectedLanguage: itemValue })
          }
        >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
        </View>
        <TextInput style={baseStyle.input} value="" placeholder="Email" />
        <TextInput style={baseStyle.input} value="" placeholder="Phone" />
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
            label="United States Of America"
            value="United States Of America"
          />
          <Picker.Item label="London" value="London" />
        </Picker>
        </View>
      </>
    );
  }
}

export default ProfileForm;
const styles = StyleSheet.create({
  dualField: {
    width: "46%",
  },
});
