import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 5,
  },
  itemImageContainer: {
    width: 98,
    height: 98,
    backgroundColor: "#2E30AD12",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    width: 56,
    height: 56,
    resizeMode: "contain",
  },
  time: {
    fontFamily: "DMSansRegular",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 23,
  },
  deg: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "DMSansRegular",
    lineHeight: 42,
    color: "#2E30AD",
  },
});
