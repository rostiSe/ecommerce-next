const config = {
    mockWatchesApi:"https://dummyjson.com/products/category/mens-watches",
    mockWatchesApiById: (id: string) => `https://dummyjson.com/products/${id}`,
}
export default config;