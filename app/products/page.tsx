import ProductCard from "./components/ProductCard";

export default async function ProductsPage() {
    const data = await fetch('http://localhost:3000/api/products')
    const watches = await data.json();
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <p className="mb-4">This is the products page.</p>
        <p className="mb-4">You can add your products here.</p>
        <p className="mb-4">This page is currently under construction.</p>
        <p className="mb-4">Please check back later for updates.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {watches.products.map((watch: any) => (
                <ProductCard id={watch.id} key={watch.id} product={watch} />
                    ))}

        </div>
    </div>
  )
}
