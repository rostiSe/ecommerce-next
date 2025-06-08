// app/api/products/[id]/route.ts
import { NextResponse } from "next/server";
import config from "@/lib/config";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);

  try {
    const res = await fetch(config.mockWatchesApiById(id));
    if (!res.ok) throw new Error("Failed to fetch product");

    const product = await res.json();
    return NextResponse.json(product);
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
