import { useQuery } from "@tanstack/react-query";
import { cartService } from "@/services/cart-service";

export const useCartQuery = () => {
  const { getCartItems } = cartService();
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCartItems,
  });
};