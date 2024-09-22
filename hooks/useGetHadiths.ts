import { hadithAPI } from "@/axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const getHadiths = async (slug: string, pageParam: any) => {
  const response = await hadithAPI.get(`/hadith/${slug}?page=${pageParam}`);
  return response.data;
};

const useGetHadiths = (slug: string) => {
  return useInfiniteQuery({
    queryKey: ["hadiths", slug],
    queryFn: ({ pageParam }) => getHadiths(slug, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pagination.currentPage < lastPage.pagination.totalPages
        ? lastPage.pagination.currentPage + 1
        : undefined,
  });
};

export default useGetHadiths;
