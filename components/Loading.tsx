import { ActivityIndicator, View } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size={"large"} color={"blue"} />
    </View>
  );
};

export default Loading;
