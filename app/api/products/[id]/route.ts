import { NextResponse } from "next/server";
import config from "@/lib/config";

export async function GET(
  request: Request,                             // ← Web’s Request, NOT NextRequest
  { params }: { params: { id: string } }        // ← inferred from [id] filename
): Promise<Response> {
  const id = parseInt(params.id, 10);

  try {
    const res = await fetch(config.mockWatchesApiById(id));

    if (!res.ok) {
      throw new Error("Failed to fetch product details");
    }

    const product = await res.json();
    return NextResponse.json(product);
  } catch (err) {
    console.error("Error fetching product details:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
