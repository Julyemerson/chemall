import { useMutation } from "@tanstack/react-query";
import { clientService } from "@/services/client-service";

export const useCreateClientMutation = () => {
  const { createClient } = clientService();
  return useMutation({
    mutationFn: async (data: any) => createClient(data),
  });
};