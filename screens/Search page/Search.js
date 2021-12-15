import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  RotationGestureHandler,
  ScrollView,
} from "react-native-gesture-handler";

export default function Search() {
  {
    /**Creating a Flatlist of the Colors Data
     */
  }

  {
    /**Beginning of The Code */
  }
  return (
    <View
      style={{
        backgroundColor: "#060921",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      {/**Navigation bar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="vector-triangle"
            size={30}
            color="white"
          />

          <Text
            style={{
              fontWeight: "600",
              marginLeft: 5,
              color: "white",
              fontSize: 45,
            }}
          >
            NFT Auction
          </Text>
        </View>
        <TouchableOpacity>
          <FontAwesome5 name="bell" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/**Search Bar */}
      <View
        style={{
          marginTop: 30,
          borderRadius: 18,
          padding: 20,
          backgroundColor: "#222029",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="search" size={24} color="#494557" />
            <Text style={{ color: "#494557", fontSize: 21, marginLeft: 15 }}>
              Search
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/**Popular and See All Text */}
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 35 }}>Popular</Text>
          <TouchableOpacity>
            <Text
              style={{
                color: "#494557",
                fontSize: 20,
                textDecorationLine: "underline",
              }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View>

        {/** Image and Extra info */}
        <View
          style={{
            marginTop: 30,
          }}
        >
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60f6dfff00eb2e87a008e4ba%2F0x0.jpg",
              }}
              style={{ height: 350, width: 370, borderRadius: 30 }}
            />
          </TouchableOpacity>
          <View
            style={{
              position: "absolute",
              top: 270,
              left: 0,
              right: 3.3,
              bottom: 0,
              backgroundColor: "rgba(53, 49, 69, 0.8)",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: "white",
                marginTop: 30,
                marginLeft: 20,
                fontSize: 20,
                fontFamily: "Helvetica Neue",
              }}
            >
              Pink Ocean
            </Text>

            <View style={{ flexDirection: "row", alignContent: "center" }}>
              <AntDesign
                name="arrowsalt"
                size={15}
                color="white"
                style={{
                  marginTop: 30,
                  marginRight: 10,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  marginTop: 30,
                  marginRight: 20,
                }}
              >
                0.15
              </Text>
            </View>
          </View>
        </View>

        {/**Latest and See All */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 35 }}>Latest</Text>
          <TouchableOpacity>
            <Text
              style={{
                color: "#494557",
                fontSize: 20,
                textDecorationLine: "underline",
              }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View>

        {/**Components for the Latest Colors */}
        <ScrollView>
          <View style={{ flexDirection: "row" }}></View>
        </ScrollView>
        <View>
          <Text>You can code right?</Text>
        </View>
      </ScrollView>
    </View>
  );
}
