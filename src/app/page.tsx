import OrderCard from "@/components/order-card";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col lg:flex-row justify-between items-center py-[50px] px-[50px] lg:px-[100px] gap-[50px]">
        <div className="w-full text-center lg:text-start">
          <h2 className="text-5xl"><b>Beautiful food & takeaway, <span className="text-blue">delivered</span> to your door.</b></h2>
          <p className="text-gray my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
          <button className="bg-blue text-white py-5 px-10 rounded-md hover:bg-blue-hover mx-auto lg:mx-0">Place an Order</button>
        </div>
        <div className="w-full">
          <img src="/Hero Image.png" alt="" className="mx-auto" />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between items-center py-[50px] px-[50px] lg:px-[100px] gap-[50px]">
        <div className="w-full text-center lg:text-start">
          <h2 className="text-5xl text-blue"><b>The home of
          fresh products</b></h2>
          <p className="text-gray my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
          <button className="bg-blue text-white py-5 px-10 rounded-md hover:bg-blue-hover mx-auto lg:mx-0">Learn About us</button>
        </div>
        <div className="w-full">
          <img src="/Group 33.png" alt="" className="mx-auto" />
        </div>
      </section>
      <section className="py-[50px] px-[50px] lg:px-[100px] gap-[50px] text-center">
        <h2 className="text-5xl text-blue"><b>How it works.</b></h2>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-[60px] max-w-[400px] md:max-w-full mt-[50px] mx-auto text-lg">
          <div className="w-full">
            <div className="mb-[50px]">
              <img src="/step 01.png" alt="" className="mx-auto" />
            </div>
            <h3><b>Adapt your menu items</b></h3>
            <p className="text-gray">Easily adapt your menu using the webflow CMS and allow customers to browse your items.</p>
          </div>
          <div className="w-full">
            <div className="mb-[50px]">
              <img src="/step 02.png" alt="" className="mx-auto" />
            </div>
            <h3><b>Accept online orders & takeout</b></h3>
            <p className="text-gray">Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</p>
          </div>
          <div className="w-full">
            <div className="mb-[50px]">
              <img src="/step 03.png" alt="" className="mx-auto" />
            </div>
            <h3><b>Manage delivery or takeout</b></h3>
            <p className="text-gray">Manage your own logistics and take orders simply through the ecommerce system.</p>
          </div>
        </div>
      </section>
      <section className="text-center">
        <h2 className="text-5xl text-blue"><b>Browse our menu</b></h2>
        <p className="text-gray text-lg max-w-[750px] mx-auto">Use our menu to place an order online, or phone our store to
        place a pickup order. Fast and fresh food.</p>
        <div className="py-[25px] flex flex-wrap justify-center items-center gap-[25px] mt-[50px]">
          <button className="bg-blue text-white py-4 px-10 rounded-md">Burguers</button>
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
        <button className="bg-blue text-white py-5 px-10 rounded-md lg:hover:bg-blue-hover mx-auto lg:mx-0">See Full Menu</button>
      </section>
      <section className="flex flex-col lg:flex-row justify-between items-center py-[50px] px-[50px] lg:px-[100px] gap-[50px]">
        <div className="w-full">
          <img src="/Phones.png" alt="" className="mx-auto" />
        </div>
        <div className="w-full text-center lg:text-start">
          <h2 className="text-5xl text-blue"><b>Order online with our simple checkout.</b></h2>
          <p className="text-gray my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
          <button className="bg-blue text-white py-5 px-10 rounded-md hover:bg-blue-hover mx-auto lg:mx-0">See our FAQ</button>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between items-center py-[50px] px-[50px] lg:px-[100px] gap-[50px]">
        <div className="w-full text-center lg:text-start">
          <h2 className="text-5xl text-blue"><b>Call our store and takeaway when it suits you best.</b></h2>
          <p className="text-gray my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
          <button className="bg-blue text-white py-5 px-10 rounded-md hover:bg-blue-hover mx-auto lg:mx-0">Ph. +61 233 2333</button>
        </div>
        <div className="w-full">
          <img src="/Food Takeaway.png" alt="" className="mx-auto" />
        </div>
      </section>
    </main>
  );
}
