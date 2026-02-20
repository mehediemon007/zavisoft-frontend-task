import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Product } from '@/types/product';

const PRODUCTS_URL = 'https://api.escuelajs.co/api/v1/products';

export const useProducts = (limit = 4) => {
    return useQuery<Product[]>({
        queryKey: ['products', limit],
        queryFn: async () => {
            const response = await axios.get(`${PRODUCTS_URL}?categorySlug=shoes&offset=0&limit=${limit}`);
            return response.data;
        },
    });
};