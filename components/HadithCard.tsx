import { Hadith } from "@/hooks/useGetHadiths";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  slug: string;
  hadith: Hadith;
};

const HadithCard = ({ slug, hadith }: Props) => {
  return (
    <Link href={`/book/${slug}/hadith/${hadith.number}`} asChild>
      <TouchableOpacity className="bg-white p-5 space-y-3 border-b border-neutral-200">
        <Text className="font-semibold">{hadith.number}.</Text>
        <Text>{hadith.arab}</Text>
        <Text className="text-justify">{hadith.id}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default HadithCard;
