// src/lib/dtos/product-details.dto.ts
import type { CategoryDTO, ProductImageDTO } from './Base.ts';

export interface ProductVideoDTO {
    id: number;
    video_path: string;
}

export interface ProductDetailsDTO {
    id: number;
    title: string;
    description: string;
    sku: string;
    price: number;
    discount: number;
    stock_count: number;
    purchase_limit: number;
    views: number;
    sales_count: number;
    is_favorite: boolean;
    images: ProductImageDTO[];
    videos: ProductVideoDTO[];
    category: CategoryDTO & {
        description: string | null;
        parent_id: number;
    };
    created_at: string;
}