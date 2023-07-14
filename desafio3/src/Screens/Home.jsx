import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import categories from "../Data/categories.json";
import CategoryItem from "../Components/CategoryItem";

const Home = () => {
  return (
    <View style={styles.containerHome}>
      <FlatList
        data={categories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => CategoryItem({ item })}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: colors.rose,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
});
