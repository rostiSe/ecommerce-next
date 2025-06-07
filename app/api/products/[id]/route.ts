// app/api/products/[id]/route.ts
import { NextResponse, NextRequest } from "next/server";
import config from "@/lib/config";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  // context.params.id is already a string
  const id = parseInt(context.params.id, 10);

  try {
    const res = await fetch(config.mockWatchesApiById(id));
    if (!res.ok) throw new Error("Failed to fetch product details");

    const product = await res.json();
    return NextResponse.json(product);
  } catch (err) {
    console.error("Error fetching product details:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
