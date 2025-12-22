import { useQuery } from "@tanstack/react-query";
import { categoryService } from "@/services/category-service";

export const useCategoriesQuery = () => {
  const { getCategories } = categoryService();
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};