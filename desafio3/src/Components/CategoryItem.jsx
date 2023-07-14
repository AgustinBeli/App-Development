import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../Global/Colors";
import { Pressable } from "react-native";

const CategoryItem = ({ item, setCategorySelected }) => {
  return (
    <Pressable onPress={() => setCategorySelected(item)}>
      <Card>
        <Text>{item}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
