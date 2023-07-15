import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../Global/Colors";

const Search = ({ onSearch, error = "", goBack }) => {
  const [keyword, setKeyword] = useState("");
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={width > 400 ? styles.containerSearch : styles.containerSearchSm}
    >
      <TextInput
        style={styles.containerTextInput}
        placeholder="Search..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <View
        style={
          width < 400
            ? styles.containerSearchBar
            : styles.containerSearchBarLandscape
        }
      >
        <Pressable onPress={() => onSearch(keyword)}>
          <FontAwesome name="search" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => setKeyword("")}>
          <Entypo name="erase" size={28} color="black" />
        </Pressable>
        <Pressable onPress={goBack}>
          <Ionicons name="arrow-back-circle-sharp" size={28} color="black" />
        </Pressable>
      </View>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: "row",
    height: "20%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.rose,
  },
  containerSearchSm: {
    flexDirection: "column",
    height: "30%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.rose,
  },
  containerSearchBar: {
    width: 250,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  containerSearchBarLandscape: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  containerTextInput: {
    width: 280,
    padding: 5,
    fontSize: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
});
