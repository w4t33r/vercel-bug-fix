import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
import {stripe} from "../../../types"

export async function GET() {
    const prisma = new PrismaClient()
    const payment: stripe[] = await prisma.testStripe.findMany();
    return NextResponse.json(payment)
}

//fetch('https://...', { next: { revalidate: 3600 } })