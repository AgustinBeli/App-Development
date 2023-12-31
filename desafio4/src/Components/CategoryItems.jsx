import {
  StyleSheet,
  Text,
  Pressable,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Card from "./Card";

const CategoryItem = ({ item, navigation }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ width: width, alignItems: "center" }}>
      <Pressable
        onPress={() =>
          navigation.navigate("ItemListCategory", { category: item })
        }
      >
        <Card>
          <Text style={styles.textCard}>{item}</Text>
        </Card>
      </Pressable>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  textCard: {
    fontSize: 20,
  },
});
