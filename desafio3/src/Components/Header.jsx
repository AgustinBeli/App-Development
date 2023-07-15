import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>Nozomi</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    height: 80,
    backgroundColor: colors.turquoise,
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: 45,
    fontFamily: "Montserrat",
    color: colors.black,
  },
});
