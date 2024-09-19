import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const BookDetail = () => {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>{JSON.stringify(params)}</Text>
    </View>
  );
};

export default BookDetail;
