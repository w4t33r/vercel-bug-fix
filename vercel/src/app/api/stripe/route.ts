import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function GET() {
    const prisma = new PrismaClient();

    try {
        const payment = await prisma.testStripe.findMany({
            where: {
                orderNummer: {
                    not:0
                }
            }
        });

        return NextResponse.json(payment);
    } catch (error) {
        console.error(error);
        return NextResponse.json({message:'Internal server error'});
    } finally {
        await prisma.$disconnect();
    }
}