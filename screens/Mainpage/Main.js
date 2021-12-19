import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../Mainpage/style";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Art from "../../components/Art";

export default function Main() {
  return (
    //NFT Status Bar
    <View style={styles.contain}>
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

      {/**Search Box */}
      <TouchableOpacity>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color="grey" />
          <Text style={styles.innerSearch}> Search</Text>
        </View>
      </TouchableOpacity>

      {/**Heading */}
      <View style={styles.subHeading}>
        <Text style={styles.popular}>Popular</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      {/**NFT picture */}
      <ScrollView>
        <Art />
      </ScrollView>
    </View>
  );
}
