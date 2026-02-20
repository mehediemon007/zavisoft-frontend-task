import axios from 'axios';
import { Product, Category } from '@/types/product';

export const fetchProducts = async (limit = 4): Promise<Product[]> => {
    const { data } = await axios.get(`${process.env.API_BASE_URL}/products?categorySlug=shoes&offset=0&limit=${limit}`);
    return data;
};

export const fetchCategories = async (): Promise<Category[]> => {
    const { data } = await axios.get(`${process.env.API_BASE_URL}/categories`);
    return data;
};