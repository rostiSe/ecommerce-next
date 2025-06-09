export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Cart API is not implemented yet.",
    }),
    {
      status: 501, // Not Implemented
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}