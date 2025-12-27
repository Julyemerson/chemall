import {MOCK_PRODUCTS} from '../api/mock-data'

export const productService = () => {
    async function getProducts() {
        await new Promise(r => setTimeout(r, 600));
        return MOCK_PRODUCTS;
    }

    
    async function getProductById(id: string | number) {
        await new Promise(r => setTimeout(r, 500));
        const product = MOCK_PRODUCTS.find(p => p.id === Number(id));
        return product || null;
    }

    async function createProduct( data: any) {
        await new Promise(r => setTimeout(r, 600));
        console.log("API: Produto cadastrado", data);
        return { success: true, data };
    };

    return { createProduct, getProducts, getProductById };
}