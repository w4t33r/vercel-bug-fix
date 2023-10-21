import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"

export async function GET() {


    const prisma = new PrismaClient()
    const payment = await prisma.testStripe.findMany();

    return NextResponse.json(payment)
}

