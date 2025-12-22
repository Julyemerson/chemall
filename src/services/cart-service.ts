import { MOCK_CART } from "@/api/mock-data"

export const cartService = () => {
    async function getCartItems() {
        await new Promise(r => setTimeout(r, 600));
        return MOCK_CART
    }

    return { getCartItems };
}