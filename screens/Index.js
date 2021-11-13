import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Index({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#060921",
        flex: 1,
        paddingTop: 155,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ color: "white", fontSize: 80, fontWeight: "100" }}>
        Welcome to the
        <Text style={{ color: "#cf2971", fontWeight: "600" }}>
          {" "}
          NFT Auction
        </Text>
      </Text>

      <View>
        <Text
          style={{
            color: "white",
            fontSize: 45,
            marginTop: 30,
            fontWeight: "100",
            justifyContent: "center",
          }}
        >
          Explore The Wonders Of Numerous
          <Text style={{ color: "red" }}> C</Text>
          <Text style={{ color: "yellow" }}>O</Text>
          <Text style={{ color: "orange" }}>L</Text>
          <Text style={{ color: "#4407eb" }}>O</Text>
          <Text style={{ color: "green" }}>R</Text>
          <Text style={{ color: "purple" }}>S</Text>
        </Text>
      </View>

      <View
        style={{
          marginTop: 100,
          backgroundColor: "#cf2971",
          borderRadius: 30,
          padding: 25,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 35,
              textAlign: "center",
            }}
          >
            Jump right into it!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
