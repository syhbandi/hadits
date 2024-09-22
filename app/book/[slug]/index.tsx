import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import useGetHadiths from "@/hooks/useGetHadiths";
import { Stack, useLocalSearchParams } from "expo-router";
import HadithCard from "@/components/HadithCard";
import Loading from "@/components/Loading";

const BookDetail = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useGetHadiths(slug);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderFooter = () => {
    if (isFetchingNextPage)
      return <ActivityIndicator size={"large"} color={"blue"} />;

    return null;
  };

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerTitle: () => {
            if (isLoading) {
              return <ActivityIndicator size={"small"} color={"blue"} />;
            }

            return (
              <Text>
                <Text className="text-lg font-semibold">
                  {data?.pages[0].name}
                </Text>
                <Text className="text-neutral-500 text-lg ml-2">
                  ({data?.pages[0].total} hadits )
                </Text>
              </Text>
            );
          },
        }}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={data?.pages.flatMap((page) => page.items) || []}
          renderItem={({ item }) => <HadithCard slug={slug} hadith={item} />}
          ListFooterComponent={renderFooter}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{
            padding: 20,
            rowGap: 10,
          }}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={() => (
            <View className="px-5">
              <Text className=" text-neutral-600 text-center text-lg">
                Oops! Tidak menemukan hadits
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default BookDetail;
