import { Books } from "@/hooks/useGetBooks";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

type Props = {
  books: Books[] | undefined;
};

const BooksList = ({ books }: Props) => {
  return (
    <FlatList
      data={books}
      renderItem={({ item }) => (
        <Link asChild href={`/books/${item.name}`}>
          <TouchableOpacity className="mx-5 rounded-lg border border-neutral-200 p-5 space-y-2">
            <View className="h-10 w-10 rounded-full bg-blue-100 items-center justify-center">
              <Feather name="book-open" size={20} color={"blue"} />
            </View>
            <Text className="text-lg font-semibold">{item.name}</Text>
            <Text className="text-neutral-500">{item.available} hadits</Text>
          </TouchableOpacity>
        </Link>
      )}
      contentContainerStyle={{ rowGap: 10 }}
    />
  );
};

export default BooksList;
