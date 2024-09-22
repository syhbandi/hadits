import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Hadith } from "@/hooks/useGetHadith";

type Props = {
  slug: string;
  hadith: Hadith;
  total: string;
};

const HadithCard = ({ slug, hadith, total }: Props) => {
  const router = useRouter();
  const handlePress = () => {
    router.replace(`/book/${slug}/hadith/${hadith.number}?total=${total}`);
  };

  return (
    <TouchableOpacity
      className="bg-white rounded-lg p-5 space-y-3 border border-neutral-200"
      onPress={handlePress}
    >
      <View className="flex-row items-center justify-between mb-3">
        <Text className="font-semibold text-lg">{hadith.number}.</Text>
        <Entypo name="dots-two-vertical" size={20} color="black" />
      </View>
      <Text className="text-lg">{hadith.arab}</Text>
      <Text>Terjemahan:</Text>
      <Text className="text-justify text-neutral-800">{hadith.id}</Text>
    </TouchableOpacity>
  );
};

export default HadithCard;
