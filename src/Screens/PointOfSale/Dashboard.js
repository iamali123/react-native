import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import {
  LineChart,
} from 'react-native-chart-kit'
import baseStyle from "../../UI/BaseStyle/Style";
import Card from "../../UI/Card";
import color from "../../UI/BaseStyle/Colors";
import ResponsiveStylesheet from "react-native-responsive-stylesheet";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [ 20, 45, 28, 80, 99, 43 ],
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    strokeWidth: 2 // optional
  }]
}

const Dashboard = ({ navigation }) => {
  return (
    <Card>
      <View style={normalStyles.topBar}>
        <TouchableOpacity
          style={normalStyles.backbtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={normalStyles.backArrow}
            source={require("../../../assets/images/back-arrow.png")}
          />
        </TouchableOpacity>
        <Text style={baseStyle.h2}>Dashboard</Text>
      </View>
      <ScrollView>
        <View
          style={[
            baseStyle.row,
            {
              marginTop: "7%",
              flexWrap: "wrap",
              paddingLeft: 20,
              paddingRight: 20,
            },
          ]}
        >
          <View style={[normalStyles.card, normalStyles.totalOrderCard]}>
            <Image
              style={normalStyles.cardIcon}
              source={require("../../../assets/images/total-order.png")}
            />

            <Text style={[baseStyle.h6, normalStyles.textColor]}>
              Total Orders
            </Text>
            <Text style={[baseStyle.h1, normalStyles.textColor]}>15482</Text>
          </View>

          <View style={[normalStyles.card, normalStyles.cancelOrdersCard]}>
            <Image
              style={normalStyles.cardIcon}
              source={require("../../../assets/images/cancel-order.png")}
            />

            <Text style={[baseStyle.h6, normalStyles.textColor]}>
              Cancelled Orders
            </Text>
            <Text style={[baseStyle.h1, normalStyles.textColor]}>2441</Text>
          </View>

          <View style={[normalStyles.card, normalStyles.totalEarningCard]}>
            <Image
              style={normalStyles.cardIcon}
              source={require("../../../assets/images/dollar-icon.png")}
            />

            <Text style={[baseStyle.h6, normalStyles.textColor]}>
              Total Earning
            </Text>
            <Text style={[baseStyle.h1, normalStyles.textColor]}>15482</Text>
          </View>

          <View style={[normalStyles.card, normalStyles.pendingPayCard]}>
            <Image
              style={normalStyles.cardIcon}
              source={require("../../../assets/images/clock-icon.png")}
            />

            <Text style={[baseStyle.h6, normalStyles.textColor]}>
              Pending Payments
            </Text>
            <Text style={[baseStyle.h1, normalStyles.textColor]}>$345.45</Text>
          </View>
        </View>
        <View style={{ paddingLeft: 15, paddingRight: 15 }}>
        <LineChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
/>
          <Text style={[baseStyle.h2, { color: "#49B7C4", marginBottom: 10 }]}>
            Recent Transactions
          </Text>
          <View style={{ flexDirection: "row", paddingBottom: 20 }}>
            <View style={normalStyles.dollarImg}>
              <Image
                style={normalStyles.img}
                source={require("../../../assets/images/money-bag.png")}
              />
            </View>
            <View
              style={[
                baseStyle.row,
                { alignItems: "center", paddingLeft: 15, flex: 1 },
              ]}
            >
              <View>
                <Text style={baseStyle.h2}>ID: 2451438</Text>
                <View style={baseStyle.row}>
                  <Text style={baseStyle.h6}>08 June, 2021 </Text>
                  <Text style={baseStyle.h6}>| </Text>
                  <Text style={baseStyle.h6}> 11:00 </Text>
                </View>
              </View>
              <View>
                <Text style={[baseStyle.h6, normalStyles.amountColor]}>
                  $258.85
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", width: "100%", paddingBottom: 20 }}
          >
            <View style={normalStyles.dollarImg}>
              <Image
                style={normalStyles.img}
                source={require("../../../assets/images/money-bag.png")}
              />
            </View>
            <View
              style={[
                baseStyle.row,
                { alignItems: "center", paddingLeft: 15, flex: 1 },
              ]}
            >
              <View>
                <Text style={baseStyle.h2}>ID: 2451438</Text>
                <View style={baseStyle.row}>
                  <Text style={baseStyle.h6}>08 June, 2021 </Text>
                  <Text style={baseStyle.h6}>| </Text>
                  <Text style={baseStyle.h6}> 11:00 </Text>
                </View>
              </View>
              <Text style={[baseStyle.h6, normalStyles.amountColor]}>
                $258.85
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Card>
  );
};

//Normal styles:
const normalStyles = ResponsiveStylesheet.create({
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
  backArrow: {
    width: 20,
    height: 20,
  },
  card: {
    paddingTop: 60,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    width: "47%",
    borderRadius: 10,
    marginBottom: 20,
  },
  cardIcon: {
    position: "absolute",
    top: 15,
    right: 15,
    padding: 5,
    width: 28,
    height: 28,
  },
  textColor: {
    color: "#ffffff",
  },
  totalOrderCard: {
    backgroundColor: "green",
  },
  cancelOrdersCard: {
    backgroundColor: "blue",
  },
  totalEarningCard: {
    backgroundColor: "orange",
  },
  pendingPayCard: {
    backgroundColor: "red",
  },
  dollarImg: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 15,
  },
  img: {
    width: 28,
    height: 28,
  },
  amountColor: {
    color: "#E22020",
  },
});

export default Dashboard;
