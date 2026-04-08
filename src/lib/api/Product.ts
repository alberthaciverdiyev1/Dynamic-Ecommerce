let cachedProducts: any = null;

export async function getAllProducts() {
    if (cachedProducts) return cachedProducts;

    const response = await fetch('https://teymurstore.az/api/product');
    const { data } = await response.json();

    cachedProducts = data;
    return data;
}