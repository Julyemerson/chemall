import {MOCK_CATEGORIES} from '../api/mock-data'

export const categoryService = () => {
    async function getCategories() {
        await new Promise(r => setTimeout(r, 600));
        return MOCK_CATEGORIES;
    };
    return { getCategories };

}