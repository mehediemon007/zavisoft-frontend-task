export interface Category {
    id: number;
    name: string;
    slug: string;
    image: string;
}

export interface Product {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
    creationAt?: string;
    updatedAt?: string;
}

export interface CartItem {
    id: number;
    title: string;
    slug: string;
    description: string,
    price: number;
    image: string;
    color: string;
    size: number;
    quantity: number;
}