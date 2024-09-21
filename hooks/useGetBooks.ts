import { hadithAPI } from "@/axios";
import { useQuery } from "@tanstack/react-query";

export type Books = {
  name: string;
  slug: string;
  total: string;
};

const getBooks = async () => {
  const { data } = await hadithAPI.get("/hadith");
  return data;
};

export default function useGetBooks() {
  return useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
    select: (data): Books[] => data,
  });
}
