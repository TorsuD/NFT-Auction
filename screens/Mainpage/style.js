import react from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contain: {
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

  ionicon: {
    marginRight: 5,
  },

  subHeading: {
    justifyContent: "space-between",
    alignItems: "baseline",
    flexDirection: "row",
    marginBottom: 20,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    padding: 20,
    backgroundColor: "#343146",
    margin: 20,
    borderRadius: 20,
  },
  innerSearch: {
    color: "grey",
    fontSize: 20,
    marginLeft: 10,
  },
  popular: {
    color: "white",
    fontSize: 40,
    marginLeft: 20,
  },
  seeAll: {
    color: "grey",
    fontSize: 20,
    marginRight: 15,
    textDecorationLine: "underline",
  },
  latest: {
    color: "white",
    fontSize: 40,
    marginLeft: 20,
    marginTop: 20,
  },
});
