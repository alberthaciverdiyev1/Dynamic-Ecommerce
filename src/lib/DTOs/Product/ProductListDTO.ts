// src/lib/dtos/product-list.dto.ts
import type { CategoryDTO, ProductImageDTO } from './Base.ts';

export interface ProductListDTO {
    id: number;
    title: string;
    price: number;
    discount: number;
    sku: string;
    is_pinned: boolean;
    stock_count: number;
    images: ProductImageDTO[];
    category: CategoryDTO;
}