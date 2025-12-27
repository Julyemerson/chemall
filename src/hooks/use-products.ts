import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { productService } from "@/services/product-service";

export const useProductsQuery = () => {
  const { getProducts } = productService();
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useProductDetailQuery = (id: string | number) => {
  const { getProductById } = productService();
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id, 
  });
};

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();
  const { createProduct } = productService();
  
  return useMutation({
    mutationFn: async (data: any) => createProduct(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });
};