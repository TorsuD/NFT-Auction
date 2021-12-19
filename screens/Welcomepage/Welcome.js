import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../Welcomepage/style";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Welcome to the
        <Text style={styles.innerHeader}> NFT Auction</Text>
      </Text>

      <View>
        <Text style={styles.midText}>
          Explore The Wonders Of Numerous
          <Text style={styles.red}> C</Text>
          <Text style={styles.yellow}>O</Text>
          <Text style={styles.orange}>L</Text>
          <Text style={styles.indigo}>O</Text>
          <Text style={styles.green}>R</Text>
          <Text style={styles.purple}>S</Text>
        </Text>
      </View>

      <View style={styles.outerTextDesign}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Text style={styles.textDesign}>Jump right into it!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
