'use client'
import { useState } from "react";
import OrderFilter from "@/components/order-filter";
import OrderCard from "@/components/order-card";
import orders from '@/data/orders.json'

export default function Order() {
  const [filter, setFilter] = useState<string>('full-menu');

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredItems =
    filter === 'full-menu'
      ? orders.flatMap((category) => category.items)
      : orders.find((category) => category.category === filter)?.items || [];

    return (
        <>
            <main>
                <section className="h-[75vh] w-full flex justify-center items-center">
                    <h1 className="text-6xl text-center max-w-[750px] mx-auto"><b>Get your food <span className="text-blue">delivered</span>, or <span className="text-blue">pick-up</span> in store.</b></h1>
                    <div></div>
                </section>
                <section className="py-[50px] px-[25px] lg:px-[50px]">
                  <OrderFilter onFilterChange={handleFilterChange} showFullMenuButton={true} />
        
                  <div className="flex flex-wrap justify-center items-center gap-[15px] my-[50px]">
                    {filteredItems.map((item) => (
                      <OrderCard
                        key={item.name}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        content={item.content}
                      />
                    ))}
                  </div>
                </section>
            </main>
        </>
    )
}
