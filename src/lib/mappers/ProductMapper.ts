import type {ProductListDTO} from "../DTOs/Product/ProductListDTO.ts";
import formatAZN from "../../helpers/FormatHelper.ts";
import type {ProductDetailsDTO} from "../DTOs/Product/ProductDetailsDTO.ts";

export const mapToListVM = (dto: ProductListDTO) => ({
    id: dto.id,
    name: dto.title || "Adsız Məhsul",
    price: formatAZN(dto.price || 0),
    image: dto.images?.[0]?.image_path || "/placeholder.png",
});

export const mapToDetailsVM = (dto: ProductDetailsDTO) => {
    const base = mapToListVM(dto);

    return {
        ...base,
        fullDescription: dto.description || "",
        videoUrl: dto.videos?.[0]?.video_path || "",
        stats: `Baxış: ${dto.views || 0} | Satış: ${dto.sales_count || 0}`
    };
};