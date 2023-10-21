import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
export async function GET() {

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