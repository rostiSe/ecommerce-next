const config = {
    mockWatchesApi:"https://dummyjson.com/products/category/mens-watches",
    mockWatchesApiById: (id: number) => `https://dummyjson.com/products/${id}`,
}
export default config;