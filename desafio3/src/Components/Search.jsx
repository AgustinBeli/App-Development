import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../Global/Colors";

const Search = ({ onSearch, error = "", goBack }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.containerSearch}>
      <TextInput
        style={styles.containerTextInput}
        placeholder="Search..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome name="search" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => setKeyword("")}>
        <Entypo name="erase" size={28} color="black" />
      </Pressable>
      <Pressable onPress={goBack}>
        <Ionicons name="arrow-back-circle-sharp" size={28} color="black" />
      </Pressable>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: "row",
    height: "10%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.rose,
  },
  containerTextInput: {
    width: 280,
    padding: 5,
    fontSize: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
});
