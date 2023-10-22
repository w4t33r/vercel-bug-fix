import prisma from "@/app/db";
import ProductOverview from "../components/ui/grid";

interface ProductPageProps {
    params: {
        id: string;
    };
}

export default async function ProductPage({
                                              params: { id },
                                          }: ProductPageProps) {
    console.log(id)
    if (typeof id !== 'string' || id.trim() === '') {
        // Handle the case where id is not valid, e.g., return an error message or handle it as needed
        return <div>Error: Invalid product ID</div>;
    }
    const product = await prisma.testStripe.findUnique({
        where: {
            id: id,
        },
    });

    return <ProductOverview product={product ? [product] : []} />;
}
