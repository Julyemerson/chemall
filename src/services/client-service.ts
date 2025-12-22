export const clientService = () => {
    async function createClient( data: any) {
        await new Promise(r => setTimeout(r, 600));
        return { success: true, data };
    };

    return { createClient };
}