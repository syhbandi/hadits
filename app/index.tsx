import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useGetBooks from "@/hooks/useGetBooks";

const HomePage = () => {
  const {
    isLoading,
    data: { data: books },
  } = useGetBooks();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen
        options={{
          header: (props) => {
            return (
              <SafeAreaView>
                <View className="flex-row items-center py-4 px-5">
                  <Text className="text-2xl">My Hadith</Text>
                </View>
              </SafeAreaView>
            );
          },
        }}
      />
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={"large"} color={"blue"} />
        </View>
      ) : (
        <Text>{JSON.stringify(books)}</Text>
      )}
    </SafeAreaView>
  );
};

export default HomePage;
