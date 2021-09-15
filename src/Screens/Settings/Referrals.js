import * as React from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    Dimensions,
    TextInput
} from "react-native";
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Referrals extends React.Component {
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
                        <Text style={baseStyle.h2}>Referrals</Text>
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
                <View style={styles.formContainer}>
                    <Image
                        style={styles.loginVector}
                        source={require("../../../assets/images/referrals-banner.png")}
                    />
                    <Text style={baseStyle.h2}>Share with your friends</Text>
                    <Text style={baseStyle.text}>
                        Share with your friends. If they sign up, you and your friend will get special offers for free!
                    </Text>
                    <View style={styles.referralForm}>
                        <TextInput
                            style={baseStyle.input}
                            placeholder="http://facepay.com/share/32..."
                            keyboardType="default"
                        />
                        <TouchableOpacity
                            style={styles.copyButton}
                        >
                            <Text style={baseStyle.blueBtnText}>Copy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                        <TouchableOpacity
                            style={[baseStyle.blueButton, styles.innerStyle]}
                            onPress={() => this.props.navigation.navigate("Login")}
                        >
                            <Text style={baseStyle.blueBtnText}>Invite Friends</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        );
    }
}

export default Referrals;

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        marginTop: "10%",
        marginBottom: "10%",
        paddingLeft: 20,
        paddingRight: 20,
    },
    topBar: {
        flexDirection: "row",
        position: "relative",
        justifyContent: "center",
        width: "100%",
        marginTop: "10%",
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
    loginVector: {
        width: windowWidth - 40,
        height: windowHeight / 3,
        resizeMode: "contain",
        marginBottom: "7%",
    },
    referralForm: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "row"
    },
    copyButton: {
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 10,
        paddingBottom: 8,
        borderRadius: 50,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: "#6C63FF",
        position: "absolute",
        right: 0,
        top: 0
    }
});
