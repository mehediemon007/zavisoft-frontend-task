export interface NavItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
    subItems?: { label: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
    { label: 'New Drops 🔥', href: '/' },
    { 
        label: 'Men', 
        href: '#', 
        hasDropdown: true,
        subItems: [
            { label: 'Shirts', href: '#' },
            { label: 'Pants', href: '#' },
            { label: 'Shoes', href: '#' },
        ]
    },
    { 
        label: 'Women', 
        href: '#', 
        hasDropdown: true,
        subItems: [
            { label: 'Skirts', href: '#' },
            { label: 'Jewelry', href: '#' },
            { label: 'Shoes', href: '#' },
        ]
    },
];