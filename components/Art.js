import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//Component Art
const Art = (props) => {
  const { container } = styles;
  return (
    <View style={styles.container}>
      <Image source={require("../assets/cm.jpg")} style={styles.image} />
      <View style={styles.titleView}>
        <Text style={styles.title}>Pink Ocean</Text>
        <Text>015</Text>
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
    backgroundColor: "rgba(162, 193, 245, 0.85)",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  title: {
    color: "white",
    fontSize: 25,
    width: 330,
    marginTop: 10,
    marginLeft: 20,
    fontWeight: "700",
  },
});

export default Art;
