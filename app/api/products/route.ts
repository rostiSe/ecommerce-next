import config from "@/lib/config";
import { NextResponse } from "next/server";

export async function GET() {
    try{    
    const res = await fetch(config.mockWatchesApi)
    if( !res.ok){
        throw new Error('Failed to fetch watches from dummy API');
    }

    const watches = await res.json();
    return new NextResponse(JSON.stringify(watches), {
        status: 200,
    }
    );
    }catch (error) {
        console.error('Error fetching watches:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }

}