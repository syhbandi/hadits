import Loading from "@/components/Loading";
import useGetHadith from "@/hooks/useGetHadith";
import { Feather } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const HadithDetail = () => {
  const { slug, id, total } = useLocalSearchParams<{
    slug: string;
    id: string;
    total?: string;
  }>();
  const { data, isLoading } = useGetHadith(slug, id);

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{
          title: "",
          headerShadowVisible: false,
        }}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <View className="flex-1">
          <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
            <View className="px-5">
              <Text className="font-semibold text-lg text-neutral-800 text-center">
                {data?.name}
              </Text>
              <Text className="text-neutral-500 text-center">
                Hadits nomor: {data?.number}
              </Text>
              <Text className="text-neutral-500 text-center">
                dari: {total}
              </Text>
              <Text className="text-xl mt-5">{data?.arab}</Text>
              <Text className="mt-5 font-semibold">Terjemahan:</Text>
              <Text className="text-neutral-800 text-justify">{data?.id}</Text>
            </View>
          </ScrollView>
          <View className="flex-row items-center space-x-3 px-5 py-3">
            <TouchableOpacity
              className={`flex-1 flex-row space-x-3 items-center justify-center rounded-lg bg-neutral-100 border border-neutral-200 h-11  ${
                Number(data?.number) === 1 ? "opacity-50" : ""
              }`}
              disabled={Number(data?.number) === 1}
              onPress={() =>
                router.replace(
                  `/book/${slug}/hadith/${
                    Number(data?.number) - 1
                  }?total=${total}`
                )
              }
            >
              <Feather name="arrow-left" size={24} color={"#262626"} />
              <Text className="text-neutral-800 font-semibold">Sebelumnya</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 flex-row space-x-3 items-center justify-center rounded-lg bg-blue-600 border border-blue-600 h-11 ${
                Number(data?.number) === Number(total) ? "opacity-50" : ""
              }`}
              onPress={() =>
                router.replace(
                  `/book/${slug}/hadith/${
                    Number(data?.number) + 1
                  }?total=${total}`
                )
              }
              disabled={Number(data?.number) === Number(total)}
            >
              <Text className="text-white font-semibold">Selanjutnya</Text>
              <Feather name="arrow-right" size={24} color={"#fff"} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default HadithDetail;
