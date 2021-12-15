import React from "react";
import { View, Text, Image } from "react-native";
import style, { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  return (
    //heading
    <View style={styles.body}>
      <View style={styles.nft}>
        <Image
          source={require("../../assets/thenftlogo.png")}
          style={styles.image}
        />
        <Text style={styles.heading}>NFT Auction</Text>
        <Ionicons
          name="notifications"
          size={24}
          color="white"
          style={styles.ionicon}
        />
      </View>
    </View> //body
  );
}
