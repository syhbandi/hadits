import { hadithAPI } from "@/axios";
import { useQuery } from "@tanstack/react-query";

export type Books = {
  name: string;
  id: string;
  available: string;
};

const getBooks = async () => {
  const { data } = await hadithAPI.get("/books");
  return data;
};

export default function useGetBooks() {
  return useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
    select: ({ data }): Books[] => data,
  });
}
