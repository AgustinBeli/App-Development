import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "../Global/Colors";

const Header = ({ route, navigation }) => {
  let title;
  if (route.name === "Home") title = "Nozomi";
  else if (route.name === "ItemListCategory") title = route.params.category;
  else if (route.name === "Detail") title = route.params.title;
  else title = route.name;

  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>{title}</Text>
      {route.name !== "Home" && route.name !== "Detail" ? (
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Feather name="home" size={30} color="black" />
        </Pressable>
      ) : route.name !== "Home" ? (
        <View style={styles.backItemDetail}>
          <Pressable onPress={() => navigation.goBack()}>
            <Feather name="arrow-left-circle" size={32} color="black" />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Feather name="home" size={30} color="black" />
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: colors.turquoise,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 10,
  },
  textHeader: {
    fontSize: 45,
    fontFamily: "Montserrat",
    color: colors.black,
  },
  backItemDetail: {
    flexDirection: "row",
    gap: 25,
  },
});
