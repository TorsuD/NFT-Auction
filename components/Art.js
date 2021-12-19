import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

//Component Art
const Art = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/cm.jpg")} style={styles.image} />
      <View style={styles.titleView}>
        <Text style={styles.title}>Pink Ocean</Text>
        <AntDesign name="upcircleo" size={24} color="black" style={styles.up} />
        <AntDesign
          name="downcircleo"
          size={24}
          color="black"
          style={styles.down}
        />
        <Text style={styles.pricing}>015</Text>
      </View>
    </View>
  );
};

//Styling of the NFT ART
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    position: "relative",
    marginTop: 30,
    alignSelf: "center",
  },

  image: {
    height: 350,
    width: 350,
    position: "relative",
    borderRadius: 40,
  },

  titleView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 290,
    height: 60,
    width: 350,
    backgroundColor: "rgba(162, 193, 245, 0.85)",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  title: {
    color: "white",
    fontSize: 25,

    marginTop: 4,
    marginLeft: 20,
    fontWeight: "700",
  },
  pricing: {
    color: "white",
    fontSize: 20,
    marginRight: 10,
  },
  up: {
    color: "white",
    marginLeft: 100,
  },
  down: {
    color: "white",
  },
});

export default Art;
