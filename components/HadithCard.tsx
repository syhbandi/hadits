import { Hadith } from "@/hooks/useGetHadiths";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  slug: string;
  hadith: Hadith;
};

const HadithCard = ({ slug, hadith }: Props) => {
  return (
    <Link href={`/book/${slug}/hadith/${hadith.number}`} asChild>
      <TouchableOpacity className="bg-white rounded-lg p-5 space-y-3 border border-neutral-200">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="font-semibold text-lg">{hadith.number}.</Text>
          <Entypo name="dots-two-vertical" size={20} color="black" />
        </View>
        <Text className="text-lg">{hadith.arab}</Text>
        <Text>Terjemahan:</Text>
        <Text className="text-justify text-neutral-800">{hadith.id}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default HadithCard;
