import config from "@/lib/config";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id[0]);
    try {
        const res = await fetch(`${config.mockWatchesApiById(id)}`);
        if (!res.ok) {
            throw new Error('Failed to fetch product details');
        }
        const product = await res.json();
        return new Response(JSON.stringify(product), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching product details:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}