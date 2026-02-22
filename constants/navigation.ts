export interface NavItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
    subItems?: { label: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
    { label: 'New Drops 🔥', href: '/products' },
    { 
        label: 'Men', 
        href: '/products?category=men', 
        hasDropdown: true,
        subItems: [
            { label: 'Shirts', href: '/products?category=shirts' },
            { label: 'Pants', href: '/products?category=pants' },
            { label: 'Shoes', href: '/products?category=shoes' },
        ]
    },
    { 
        label: 'Women', 
        href: '/products?category=women', 
        hasDropdown: true,
        subItems: [
            { label: 'Skirts', href: '/products?category=skirts' },
            { label: 'Jewelry', href: '/products?category=jewelry' },
            { label: 'Shoes', href: '/products?category=shoes' },
        ]
    },
];