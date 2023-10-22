import prisma from "@/app/db";
import ProductOverview from "../components/ui/grid";

export const revalidate = 0;
const HomePage = async () => {


  const allProducts = await prisma.testStripe.findMany();


  return (
    <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="my-16">
        <ProductOverview product={allProducts} />
      </div>
    </div>
  );
};

export default HomePage;
