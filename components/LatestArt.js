import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LatestArt = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <View style={styles.titleView}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity>
          <AntDesign
            name="upcircleo"
            size={16}
            color="black"
            style={styles.up}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="downcircleo"
            size={16}
            color="black"
            style={styles.down}
          />
        </TouchableOpacity>
        <Text style={styles.pricing}>{props.pricing}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  up: { marginTop: 10, marginLeft: 20 },
  down: { marginTop: 10 },
  titleView: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    top: 130,
    backgroundColor: "rgba(162, 193, 245, 0.6)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: 170,
    height: 40,
  },
  title: {
    fontWeight: "700",
    marginTop: 10,
    fontSize: 18,
    marginLeft: 10,
  },
  image: {
    height: 170,
    width: 170,
    position: "relative",
    borderRadius: 20,
  },
  container: {
    alignContent: "center",
    position: "relative",
    marginLeft: 20,
    marginBottom: 50,
  },
  pricing: {
    fontSize: 20,
    marginRight: 10,
    marginTop: 10,
  },
});

export default LatestArt;
