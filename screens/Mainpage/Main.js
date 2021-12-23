import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../Mainpage/style";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Art from "../../components/Art";
import LatestArt from "../../components/LatestArt";

export default function Main({ navigation }) {
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
          <Text style={styles.innerSearch}> Search </Text>
        </View>
      </TouchableOpacity>

      {/**Heading */}
      <ScrollView>
        <View style={styles.subHeading}>
          <Text style={styles.popular}>Popular</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        {/**NFT Popular picture */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details");
          }}
        >
          <Art
            title="Monkey fever"
            image={require("../../assets/cm.jpg")}
            pricing="140"
          />
        </TouchableOpacity>

        {/**Latest NFT Arts in a horizontal scrollview */}
        <View style={styles.subHeading}>
          <Text style={styles.latest}>Latest</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.latestArt}>
            <LatestArt
              image={require("../../assets/artistic.jpg")}
              title="Orange"
              pricing="12"
            />

            <LatestArt
              image={require("../../assets/hehe.jpeg")}
              title="Purple eye"
              pricing="4"
            />
            <LatestArt
              image={require("../../assets/colorful.jpg")}
              title="Colorful"
              pricing="8"
            />
            <LatestArt
              image={require("../../assets/powder.jpeg")}
              title="Powder"
              pricing="90"
            />
            <LatestArt
              image={require("../../assets/jordan.jpg")}
              title="Jordan"
              pricing="8"
            />
          </View>
        </ScrollView>
        {/* Below the Latest Arts*/}
      </ScrollView>
    </View>
  );
}
