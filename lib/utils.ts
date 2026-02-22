import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatImageUrl = (url: string, fallbackSrc: string): string => {
    try {
        const cleaned = url.replace(/[\[\]"]/g, "");

        if (cleaned.startsWith('http') || cleaned.startsWith('/assets')) {
            return cleaned;
        }
        
        return fallbackSrc;

    } catch (error) {
        console.error(error);
        return fallbackSrc;
    }
};