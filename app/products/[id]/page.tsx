// app/products/[id]/page.tsx
export const dynamic = 'force-dynamic'
export const fetchCache = 'default-cache'

import config from '@/lib/config'
import Image from 'next/image'
import { Suspense } from 'react'
type Review = {
    rating: number;
    comment: string;
    reviewerName: string;
};
export default async function ProductPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const res = await fetch(`${config.mockWatchesApi}/${id}`, {
    next: { revalidate: 3600, tags: ['Watches'] }
  })
  if (!res.ok) {
    const text = await res.text()
    console.error(`📦 Product API error ${res.status}: ${text}`)
    throw new Error(`Could not load product ${id}`)
  }
  const watchData = await res.json()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{watchData.title}</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <Suspense fallback={
          <div className="animate-pulse bg-gray-700 w-full aspect-[4/3] rounded-lg" />
        }>
          {watchData.images.map((src: string, i: number) => (
            <Image
              key={i}
              src={src}
              alt={watchData.title}
              width={400}
              height={300}
              placeholder="blur"
              blurDataURL="/blur.png"
              priority={i < 2}
              className="object-cover rounded-lg"
            />
          ))}
        </Suspense>
      </div>
 <p className="text-lg mb-4">{watchData.description}</p>
            <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-amber-600">
                    {watchData.price.toLocaleString("DE")}€
                </span>
                <span className="text-sm text-amber-700">
                    {watchData.rating} ★ ({watchData.stock} in stock)
                </span>
                </div>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Add to Cart
            </button>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                <p className="text-gray-300 mb-2">Category: {watchData.category}</p>
                <p className="text-gray-300 mb-2">Brand: {watchData.brand}</p>
                <p className="text-gray-300 mb-2">Release Date: {new Date(watchData.meta.createdAt).toLocaleDateString("DE")}</p>
                <p className="text-gray-300">Warranty: {watchData.warrantyInformation}</p>
                </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Customer Reviews                            <span className="text-yellow-700">{'★' + watchData.rating}</span>
</h2>
                {watchData.reviews.length > 0 ? (
                    watchData.reviews.map((review: Review, index: number) => (
                        <div key={index} className="mb-4 p-4 bg-neutral-800 rounded-lg">
                            <p className="text-gray-300 mb-2">{review.comment}</p>
                            <span className="text-yellow-700">{'★'.repeat(review.rating)}</span>
                            <span className="text-gray-500 ml-2 text-sm">by {review.reviewerName}</span>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No reviews yet.</p>
                )}
                </div>   
                 </div>
                
  )
}
