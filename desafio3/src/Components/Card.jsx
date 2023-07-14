import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";

const Card = ({ children }) => {
  return <View style={styles.containerCard}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  containerCard: {
    width: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.turquoise3,
    marginVertical: 10,
    borderRadius: 10,
  },
});
