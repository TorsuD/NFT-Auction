import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Search() {
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
        <Image
          source={{
            uri: "https://www.newsbtc.com/wp-content/uploads/2021/10/colorful-gb430c77bc_1920.jpg",
          }}
          style={{ height: 350, width: 370, borderRadius: 30 }}
        />
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
            }}
          >
            Pink Ocean
          </Text>

          <View style={{ flexDirection: "row", alignContent: "center" }}>
            <AntDesign
              name="arrowsalt"
              size={18}
              color="white"
              style={{ marginTop: 30 }}
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
    </View>
  );
}
