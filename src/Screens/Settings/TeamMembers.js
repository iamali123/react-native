import React from "react";
import { useState } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
    Switch,
    Dimensions,
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import color from "../../UI/BaseStyle/Colors";
import { alignContent, marginLeft } from "styled-system";
import { alignItems } from "styled-system";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const TeamMembers = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <Card>
            <View style={styles.topBar}>
                <TouchableOpacity
                    style={styles.backbtn}
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Image
                        style={styles.backArrow}
                        source={require("../../../assets/images/back-arrow.png")}
                    />
                </TouchableOpacity>
                <Text style={baseStyle.h2}>Team Members</Text>
                <TouchableOpacity
                    style={styles.nextbtn}
                    onPress={() =>
                        this.props.navigation.navigate("EditBusinessProfile")
                    }
                >
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.posContainer}>
                    <View style={styles.switchBlock}>
                        <View style={styles.switchRow}>
                            <View style={styles.switchInner}>
                                <Image
                                    style={styles.memberImg}
                                    source={require("../../../assets/images/team-member.png")}
                                />
                                <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }} >
                                    <View style={styles.introCol}>
                                        <Text style={baseStyle.h4}>Sandra Smith</Text>
                                        <Text style={baseStyle.h6}>Owner</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                                            <Text style={[baseStyle.h6, styles.textColor]}>Activate</Text>
                                            <View style={styles.switchWrapper}>
                                                <Switch
                                                    style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
                                                    trackColor={{ false: "#fff", true: "#fff" }}
                                                    thumbColor={isEnabled ? "#3F466F" : "#3F466F"}
                                                    ios_backgroundColor="#3e3e3e"
                                                    onValueChange={toggleSwitch}
                                                    value={isEnabled}
                                                ></Switch>
                                            </View>
                                        </View>
                                    </View>
                                    <TouchableOpacity
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
                    <View style={styles.switchBlock}>
                        <View style={styles.switchRow}>
                            <View style={styles.switchInner}>
                                <Image
                                    style={styles.memberImg}
                                    source={require("../../../assets/images/team-member.png")}
                                />
                                <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }} >
                                    <View style={styles.introCol}>
                                        <Text style={baseStyle.h4}>Sandra Smith</Text>
                                        <Text style={baseStyle.h6}>Owner</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                                            <Text style={[baseStyle.h6, styles.textColor]}>Activate</Text>
                                            <View style={styles.switchWrapper}>
                                                <Switch
                                                    style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
                                                    trackColor={{ false: "#fff", true: "#fff" }}
                                                    thumbColor={isEnabled ? "#3F466F" : "#3F466F"}
                                                    ios_backgroundColor="#3e3e3e"
                                                    onValueChange={toggleSwitch}
                                                    value={isEnabled}
                                                ></Switch>
                                            </View>
                                        </View>
                                    </View>
                                    <TouchableOpacity
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
                    <View style={styles.switchBlock}>
                        <View style={styles.switchRow}>
                            <View style={styles.switchInner}>
                                <Image
                                    style={styles.memberImg}
                                    source={require("../../../assets/images/team-member.png")}
                                />
                                <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }} >
                                    <View style={styles.introCol}>
                                        <Text style={baseStyle.h4}>Sandra Smith</Text>
                                        <Text style={baseStyle.h6}>Owner</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                                            <Text style={[baseStyle.h6, styles.textColor]}>Activate</Text>
                                            <View style={styles.switchWrapper}>
                                                <Switch
                                                    style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
                                                    trackColor={{ false: "#fff", true: "#fff" }}
                                                    thumbColor={isEnabled ? "#3F466F" : "#3F466F"}
                                                    ios_backgroundColor="#3e3e3e"
                                                    onValueChange={toggleSwitch}
                                                    value={isEnabled}
                                                ></Switch>
                                            </View>
                                        </View>
                                    </View>
                                    <TouchableOpacity
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
                </View>
            </ScrollView>
        </Card>
    );
};
const styles = StyleSheet.create({
    posContainer: {
        marginTop: 15,
        flex: 1,
    },
    topBar: {
        flexDirection: "row",
        position: "relative",
        justifyContent: "center",
        marginTop: "15%",
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
    switchBlock: {
        marginBottom: 10,
        flex: 1,
        width: "100%",
    },
    switchRow: {
        borderColor: "#D8E0F3",
        borderWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
    },
    switchInner: {
        flexDirection: "row",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 15,
        justifyContent: "center",
        alignItems: "center"
    },

    memberImg: {
        width: 90,
        height: 90,
        resizeMode: "cover",
        marginRight: 20,
        borderRadius: 50
    },

    switchWrapper: {
        borderColor: "#3F466F",
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: "#fff",
        marginLeft: 15,
        width: 50,
        height: 30,
    },
    dotsIcon: {
        width: 20,
        height: 8,
    },
    textColor: {
        color: "#49B7C4"
    }
});

export default TeamMembers;
