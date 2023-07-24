import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "../Global/Colors";

const Search = ({ onSearch, error = "" }) => {
  const [keyword, setKeyword] = useState("");

  const onErase = () => {
    setKeyword("");
    onSearch("");
  };

  return (
    <View style={styles.containerSearch}>
      <TextInput
        style={styles.containerTextInput}
        placeholder="Search..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <View style={styles.containerSearchButtons}>
        <Pressable onPress={() => onSearch(keyword)}>
          <Feather name="search" size={30} color="black" />
        </Pressable>
        <Pressable onPress={onErase}>
          <Feather name="delete" size={30} color="black" />
        </Pressable>
      </View>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: "column",
    height: 100,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.rose,
  },
  containerSearchButtons: {
    width: 250,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  containerTextInput: {
    width: 280,
    padding: 5,
    fontSize: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
});
