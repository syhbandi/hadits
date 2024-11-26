import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useGetBooks from "@/hooks/useGetBooks";
import BooksList from "@/components/BooksList";
import Loading from "@/components/Loading";

const HomePage = () => {
  const { isLoading, data } = useGetBooks();

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{
          header: () => {
            return (
              <SafeAreaView className="bg-white">
                <View className="flex-row items-center py-4 px-5">
                  <Text className="text-3xl font-semibold">Hadits</Text>
                </View>
              </SafeAreaView>
            );
          },
        }}
      />
      {isLoading ? <Loading /> : <BooksList books={data} />}
    </View>
  );
};

export default HomePage;
