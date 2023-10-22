import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    const prisma = new PrismaClient();
    const products = await prisma.testStripe.findMany();
    await prisma.$disconnect();
    return NextResponse.json(products);
}
