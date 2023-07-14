import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Search = ({ onSearch, error = "", goBack }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <View>
      <TextInput />
      <Pressable onPress={() => onSearch(keyword)}></Pressable>
      <Pressable onPress={() => setKeyword("")}></Pressable>
      <Pressable onPress={goBack}></Pressable>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
