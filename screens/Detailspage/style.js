import react from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Upper Container
  container: {
    flex: 1,
    backgroundColor: "#42cbf5",
  },

  upperContainer: {
    flex: 0.65,
    backgroundColor: "rgba(108, 213, 245,0.4)",
  },

  header: {
    marginTop: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },

  headerDetail: {
    color: "white",
    fontSize: 30,
  },

  image: {
    height: 350,
    width: 350,
    borderRadius: 40,
  },

  imageViewer: {
    alignSelf: "center",
  },

  //Lower Container
  lowerContainer: {
    backgroundColor: "#1e1a31",
    flex: 0.4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  lowerHeader: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },

  lowerHeaderRight: {
    flexDirection: "row",
  },

  title: {
    marginLeft: 20,
    color: "white",
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "700",
  },

  space: {
    marginLeft: 10,
    marginRight: 10,
  },

  verification: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  verificationTitle: {
    marginLeft: 20,
    fontSize: 18,
    color: "grey",
    fontWeight: "500",
  },

  description: {
    marginLeft: 20,
    fontSize: 18,
    color: "grey",
    fontWeight: "500",
    marginBottom: 20,
  },

  bidContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bid: {
    marginLeft: 20,
    fontSize: 18,
    color: "grey",
    fontWeight: "700",
  },

  bidNumber: {
    marginLeft: 40,
    fontSize: 18,
    color: "grey",
    fontWeight: "700",
    marginTop: 5,
  },

  bidButton: {
    padding: 30,
    marginRight: 10,
    backgroundColor: "#03a9fc",
    borderRadius: 20,
    width: 260,
  },
  placeABid: {
    color: "white",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500",
  },
});
