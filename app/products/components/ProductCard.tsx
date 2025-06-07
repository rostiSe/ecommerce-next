"use client"

import { Card } from "@/components/ui/card";
import { Product } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ product, id }: { product: Product, id: number }) {
    const router = useRouter();
  return (
    <Card onClick={() => router.push(`/products/${id}`)} className="border hover:bg-neutral-900 bg-neutral-800 group p-4 shadow-md hover:shadow-lg transition-all rounded-xl border-teal-500 duration-300  cursor-pointer">
      <Image
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded-t-lg group-hover:translate-x-5 group-hover:-translate-y-10 transition-transform ease-in-out duration-500"
      />
      <h3 className="text-lg  text-teal-600 font-semibold mt-2">{product.title}</h3>
      <p className="text-teal-700 group-hover:max-h-[35rem] max-h-0 ease-in-out duration-500 group-hover:opacity-100 opacity-0 overflow-hidden animate-in transition-all">{product.description}</p>
      <div className="flex justify-between items-center ">
        <span className="text-xl text-amber-600 font-bold">{product.price.toLocaleString("DE")}€</span>
        <span className="text-sm text-amber-900">
          {product.rating} ★ ({product.stock} in stock)
        </span>
      </div>
    </Card>
  );
}