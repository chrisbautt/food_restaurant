import OrderCard from "@/components/order-card";

export default function Order() {
    return (
        <>
            <main>
                <section className="h-[75vh] w-full flex justify-center items-center">
                    <h1 className="text-6xl text-center max-w-[750px] mx-auto"><b>Get your food <span className="text-blue">delivered</span>, or <span className="text-blue">pick-up</span> in store.</b></h1>
                    <div></div>
                </section>
                <section>
                    <div className="py-[25px] flex flex-wrap justify-center items-center gap-[25px] mt-[50px]">
                      <button className="bg-blue text-white py-4 px-10 rounded-md">Full Menu</button>
                      <button className="border-[1px] border-gray py-4 px-10 rounded-md">Burgers</button>
                      <button className="border-[1px] border-gray py-4 px-10 rounded-md">Sides</button>
                      <button className="border-[1px] border-gray py-4 px-10 rounded-md">Drinks</button>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-[15px] my-[50px]">
                      <OrderCard image="/burgers/burger-dreams.png" name="Burger Dreams" price={9.20} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                      <OrderCard image="/burgers/burger-waldo.png" name="Burger Waldo" price={10.00} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                      <OrderCard image="/burgers/burger-cali.png" name="Burger Cali" price={8.00} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                      <OrderCard image="/burgers/burger-bacon-buddy.png" name="Burger Bacon Buddy" price={9.99} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                      <OrderCard image="/burgers/burger-spicy.png" name="Burger Spicy" price={9.20} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                      <OrderCard image="/burgers/burger-classic.png" name="Burger Classic" price={8.00} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-[15px] my-[50px]">
                      <OrderCard image="/sides/salad-ceaser.png" name="Salad Ceaser" price={6.00} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                      <OrderCard image="/sides/beans-slow-cooked.png" name="Beans Slow Cooked" price={4.00} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                      <OrderCard image="/sides/fries-cheese.png" name="Fries Cheese" price={5.00} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                      <OrderCard image="/sides/fries-rustic.png" name="Fries Rustic" price={4.00} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-[15px] my-[50px]">
                      <OrderCard image="/drinks/drink-fig-lime.png" name="Drink Fig & Lime" price={4.00} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                      <OrderCard image="/drinks/drink-liquor.png" name="Drink Liquor" price={7.00} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                      <OrderCard image="/drinks/drink-lime.png" name="Drink Lime" price={4.00} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                      <OrderCard image="/drinks/drink-cola.png" name="Drink Cola" price={3.00} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    </div>
                </section>
            </main>
        </>
    )
}