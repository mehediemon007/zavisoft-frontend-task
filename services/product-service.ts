import axios from 'axios';
import { Product, Category } from '@/types/product';

export const fetchProducts = async (limit = 4): Promise<Product[]> => {
<<<<<<< Updated upstream
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?categorySlug=shoes&offset=0&limit=${limit}`);
=======
    const { data } = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?categorySlug=shoes&offset=0&limit=${limit}`);
>>>>>>> Stashed changes
    return data;
};

export const fetchCategories = async (): Promise<Category[]> => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`);
<<<<<<< Updated upstream
=======
    return data;
};

export const fetchProductBySlug = async (slug: string): Promise<Product> => {
    const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/slug/${slug}`);
    return data;
};

export const fetchRelatedProducts = async (slug: string): Promise<Product[]> => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/slug/${slug}/related`);
>>>>>>> Stashed changes
    return data;
};