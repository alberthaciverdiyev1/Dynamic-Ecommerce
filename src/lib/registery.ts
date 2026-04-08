import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export type ComponentMap = {
    [key: string]: () => Promise<{ default: AstroComponentFactory }>;
};

export const Navbars: ComponentMap = {
    "navbar-01": () => import('../components/shared/Navbar/Navbar01/Navbar.astro'),
    "navbar-02": () => import('../components/shared/Navbar/Navbar02/Navbar.astro'),
    "navbar-03": () => import('../components/shared/Navbar/Navbar03/Navbar.astro'),
};

export const Footers: ComponentMap = {
    "footer-01": () => import('../components/shared/Footer/Footer01/Footer.astro'),
    "footer-02": () => import('../components/shared/Footer/Footer02/Footer.astro'),
};

export const Heros: ComponentMap = {
    "hero-01": () => import('../components/sections/Hero/Hero01/Hero.astro'),
    "hero-02": () => import('../components/sections/Hero/Hero02/Hero.astro'),
};

export const Categories: ComponentMap = {
    "category-01": () => import('../components/sections/Category/Category01/Category.astro'),
    "category-02": () => import('../components/sections/Category/Category02/Category.astro'),
};

export const ProductCards: ComponentMap = {
    "card-01": () => import('../components/cards/products/Card01/Index.astro'),
    "card-02": () => import('../components/cards/products/Card02/Index.astro'),
    "card-03": () => import('../components/cards/products/Card03/Index.astro'),
};

export const ProductSections: ComponentMap = {
    "section-01":()=> import('../components/sections/Product/Product01/Product.astro'),
    "section-02":()=> import('../components/sections/Product/Product02/Product.astro'),
}
// export const Loaders: ComponentMap = {
//     "load-neon": () => import('../components/shared/Loaders/NeonLoader.astro'),
//     "load-minimal": () => import('../components/shared/Loaders/MinimalLoader.astro'),
// };