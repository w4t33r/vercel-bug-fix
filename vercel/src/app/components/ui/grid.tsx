"use client";
import { testStripe } from "@prisma/client";

import Link from "next/link";

export default function ProductGridTemplate({
                                                product,

                                            }: {
    product: testStripe[];
}) {
    return (
        <div className="bg-white py-6">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col gap-y-10 mb-8">
                    <div className="md:flex md:items-center md:justify-between mx-2">
                        <h2
                            id="favorites-heading"
                            className="text-2xl font-bold tracking-tight text-gray-900"
                        >
                           dd
                        </h2>
                    </div>
                </div>

                <main>
                    <section
                        aria-labelledby="products-heading"
                        className="overflow-hidden"
                    >
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-2 sm:mx-1 md:grid-cols-3 lg:grid-cols-5">
                            {product.map((item: testStripe) => (
                                <div
                                    key={item.id}
                                    className="p-2 group relative border-gray-200 border-1 m-2 md:p-3 rounded-lg"
                                    style={{
                                        boxShadow: " rgba(0, 0, 0, 0.04) 0px 3px 5px",
                                    }}
                                >
                                    {" "}
                                    <div className="text-start p-2 lg:p-0">
                                        <div className="mt-4 mb-1 flex flex-row justify-between">
                                            <p className=" text-gray-500 text-xs truncate font-medium">
                                                {item.orderNummer}
                                            </p>
                                            <p className=" text-gray-500 text-xs truncate font-medium">
                                               order {item.orderNummer}
                                            </p>
                                        </div>{" "}

                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
