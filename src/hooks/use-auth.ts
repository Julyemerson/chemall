import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth-service";


export const useLoginMutation = () => {
    const { loginUser } = authService();
    return useMutation({
        mutationFn: async (data: any) => loginUser(data),
    })

}


export const useRegisterMutation = () => {
    const { registerUser} = authService();
    return useMutation({
        mutationFn: async (data: any) => registerUser(data),
    })
}