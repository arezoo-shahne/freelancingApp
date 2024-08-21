import { useQueries, useQuery } from "@tanstack/react-query";
import getCategoriesApi from "../services/categoryServices";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });
  const { categories = [] } = data || {};

  const newCategory = categories.map((category) => ({
    label: category.title,
    value: category._id,
  }));

  const transformedCategory = categories.map((category) => ({
    label: category.title,
    value: category.englishTitle,
  }));

  return { categories, newCategory, transformedCategory, isLoading };
}
