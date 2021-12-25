import React from "react";
import { View, Text, Image } from "react-native";
import style, { styles } from "../Detailspage/style";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ImageBackground } from "react-native-web";

export default function Details({ navigation }) {
  return (
    //the Upper Container
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Main");
            }}
          >
            <AntDesign
              name="left"
              size={24}
              color="white"
              style={styles.space}
            />
          </TouchableOpacity>
          <Text style={styles.headerDetail}>Details</Text>
          <AntDesign
            name="hearto"
            size={24}
            color="white"
            style={styles.space}
          />
        </View>

        {/**The Image */}
        <View style={styles.imageViewer}>
          <Image source={require("../../assets/cm.jpg")} style={styles.image} />
        </View>
      </View>

      {/**Lower Container */}
      {/**The 1st Lower Header */}
      <View style={styles.lowerContainer}>
        <View style={styles.lowerHeader}>
          <Text style={styles.title}>Monkey Fever</Text>

          <View style={styles.lowerHeaderRight}>
            <EvilIcons
              name="share-apple"
              size={32}
              color="white"
              style={styles.space}
            />
            <AntDesign
              name="sharealt"
              size={24}
              color="white"
              style={styles.space}
            />
            <SimpleLineIcons
              name="options-vertical"
              size={24}
              color="white"
              style={styles.space}
            />
          </View>
        </View>
        {/**The 2nd Lower Header With Verification */}
        <View style={styles.verification}>
          <Text style={styles.verificationTitle}>ABSTRACT World</Text>
          <MaterialIcons
            name="verified"
            size={20}
            color="#03a9fc"
            style={{ marginLeft: 3 }}
          />
        </View>

        {/** Art Description  */}
        <View>
          <Text style={styles.description}>
            Welcome to the abstract world of NFT.Unforgettable patterns and
            color combinations will remain in your head for a long time. Power
            is in the beauty!{" "}
          </Text>
        </View>

        {/**The Bidding Option And Highest Bidding */}
        <View style={styles.bidContainer}>
          <View>
            <Text style={styles.bid}>Highest Bid</Text>
            <Text style={styles.bidNumber}>140</Text>
          </View>

          {/**Button */}
          <TouchableOpacity
            onPress={() => {
              alert("Nice bid for this NFT Art! ♥️ Explore more wonders!");
            }}
          >
            <View style={styles.bidButton}>
              <Text style={styles.placeABid}>Place a bid</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
