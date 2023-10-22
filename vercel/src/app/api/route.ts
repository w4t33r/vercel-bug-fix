import prisma from "@/app/db";
import {NextResponse} from "next/server";
import {stripe} from "@/types";

export async function GET() {
    try {
        const payment: stripe[] = await prisma.testStripe.findMany();
        // Set the Cache-Control header to no-store to prevent caching
        return NextResponse.json(payment, { headers: { 'Cache-Control': 'no-store' } });
    } catch (error) {
        return NextResponse.json({message:'500'});
    } finally {
        await prisma.$disconnect();
    }
}