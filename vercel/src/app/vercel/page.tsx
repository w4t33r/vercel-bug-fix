import prisma from "@/app/db";
import { notFound } from "next/navigation";
import ProductOverview from "../components/ui/grid";

interface ProductPageProps {
    params: {
        id: string;
    };
}

export default async function ProductPage({
                                              params: { id },
                                          }: ProductPageProps) {
    const product = await prisma.testStripe.findMany();

    if (!product) {
        return notFound();
    }
    return <ProductOverview product={product} />;
}
