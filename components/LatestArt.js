import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const LatestArt = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/la.jpg")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 170,
    width: 170,
    position: "relative",
    borderRadius: 40,
  },
  container: {
    alignContent: "center",
    position: "relative",
    marginLeft: 20,
  },
});

export default LatestArt;
