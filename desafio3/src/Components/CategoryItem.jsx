import { StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";

const CategoryItem = ({ item }) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.textCard}>{item}</Text>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  textCard: {
    fontSize: 20,
  },
});
