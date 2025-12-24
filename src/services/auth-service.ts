
export const authService = () => {
    async function registerUser(data: any){
        await new Promise(r => setTimeout(r, 600));
        console.log("API: Usuário registrado", data);
        return { success: true, data };
    }

    async function loginUser(data: any){
        await new Promise(r => setTimeout(r, 600));
        console.log("API: Usuário logado", data);
        return { success: true, data };
    }

    return { registerUser, loginUser };
}