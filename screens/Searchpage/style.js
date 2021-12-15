import react from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body: {
    backgroundColor: "#1e1a31",
    flex: 1,
  },
  head: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  header: {
    justifyContent: "center",
  },
  heading: {
    color: "white",
    fontSize: 50,
    marginRight: 100,
  },
  image: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderRadius: 100,
    marginLeft: 10,
  },
  nft: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 80,
    justifyContent: "space-between",
  },
  ionicon: { marginRight: 5 },
});
