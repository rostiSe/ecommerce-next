// app/api/products/[id]/route.ts
import { NextResponse } from "next/server";
import config from "@/lib/config";

export default async function GET(request: Request, ctx: any) {
  // Next.js will populate ctx.params.id for you
  const id = parseInt(ctx.params.id, 10);

  try {
    const res = await fetch(config.mockWatchesApiById(id));
    if (!res.ok) throw new Error("Failed to fetch product");

    const product = await res.json();
    return NextResponse.json(product);
  } catch (err) {
    console.error("Error fetching product details:", err);
    return NextResponse.error();
  }
}
