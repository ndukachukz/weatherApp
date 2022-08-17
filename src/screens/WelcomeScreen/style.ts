import { StyleSheet } from "react-native";

export default StyleSheet.create({
  stats: {
    borderTopColor: "#4F4F4F",
    borderBottomColor: "#4F4F4F",
    paddingHorizontal: 15,
    marginVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  statsTextContainer: {
    paddingVertical: 45,
  },
  statsText: {
    fontFamily: "DMSansRegular",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 23,
  },
  statsDevider: { backgroundColor: "#4F4F4F", width: 2, height: "100%" },
});
