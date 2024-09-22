import { hadithAPI } from "@/axios";
import { useQuery } from "@tanstack/react-query";

export type Hadith = {
  name: string;
  slug: string;
  number: string;
  arab: string;
  id: string;
};

const getHadith = async (slug: string, id: string) => {
  const response = await hadithAPI.get(`/hadith/${slug}/${id}`);
  return response.data;
};

const useGetHadith = (slug: string, id: string) => {
  return useQuery({
    queryKey: ["hadith", slug, id],
    queryFn: () => getHadith(slug, id),
    select: (data): Hadith => data,
  });
};

export default useGetHadith;
