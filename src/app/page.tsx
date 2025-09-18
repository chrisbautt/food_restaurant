'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OrderFilter from "@/components/order-filter";
import OrderCard from "@/components/order-card";
import orders from '@/data/orders.json'

export default function Home() {
  const [filter, setFilter] = useState<string>('burgers');

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredItems =
    filter === 'full-menu'
      ? orders.flatMap((category) => category.items)
      : orders.find((category) => category.category === filter)?.items || [];

  return (
    <main>
      <section className="flex flex-col lg:flex-row justify-between items-center py-[50px] px-[25px] lg:px-[80px] gap-[50px]">
        <div className="w-full text-center lg:text-start">
          <h1 className="text-5xl"><b>Beautiful food & takeaway, <span className="text-blue">delivered</span> to your door.</b></h1>
          <p className="text-gray my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
          <Link href="/order" className="bg-blue text-white py-5 px-10 rounded-md hover:bg-blue-hover mx-auto lg:mx-0">Place an Order</Link>
        </div>
        <div className="w-full">
          <Image 
            src='/hero-image.png'
            alt='Hero'
            width={576}
            height={557}
            sizes="fill"
            priority
            className="mx-auto"
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between items-center py-[50px] px-[25px] lg:px-[80px] gap-[50px]">
        <div className="w-full text-center lg:text-start">
          <h2 className="text-5xl text-blue"><b>The home of
          fresh products</b></h2>
          <p className="text-gray my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
          <Link href="/company" className="bg-blue text-white py-5 px-10 rounded-md hover:bg-blue-hover mx-auto lg:mx-0">Learn About us</Link>
        </div>
        <div className="w-full">
          <Image 
            src='/group-33.png'
            alt='Group 33'
            width={523}
            height={614}
            sizes="fill"
            className="mx-auto"
          />
        </div>
      </section>
      <section className="py-[50px] px-[25px] lg:px-[80px] gap-[50px] text-center">
        <h2 className="text-5xl text-blue"><b>How it works.</b></h2>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-[60px] max-w-[400px] md:max-w-full mt-[50px] mx-auto text-lg">
          <div className="w-full">
            <div className="mb-[50px]">
              <Image 
                src='/step-01.png'
                alt='Step'
                width={454}
                height={364}
                sizes="fill"
                className="mx-auto"
              />
            </div>
            <h3><b>Adapt your menu items</b></h3>
            <p className="text-gray">Easily adapt your menu using the webflow CMS and allow customers to browse your items.</p>
          </div>
          <div className="w-full">
            <div className="mb-[50px]">
              <Image 
                src='/step-02.png'
                alt='Step'
                width={454}
                height={364}
                sizes="fill"
                className="mx-auto"
              />
            </div>
            <h3><b>Accept online orders & takeout</b></h3>
            <p className="text-gray">Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</p>
          </div>
          <div className="w-full">
            <div className="mb-[50px]">
              <Image 
                src='/step-03.png'
                alt='Step'
                width={454}
                height={364}
                sizes="fill"
                className="mx-auto"
              />
            </div>
            <h3><b>Manage delivery or takeout</b></h3>
            <p className="text-gray">Manage your own logistics and take orders simply through the ecommerce system.</p>
          </div>
        </div>
      </section>
      <section className="text-center py-[50px] px-[25px] lg:px-[50px]">
        <h2 className="text-5xl text-blue"><b>Browse our menu</b></h2>
        <p className="text-gray text-lg max-w-[750px] mx-auto">Use our menu to place an order online, or phone our store to
        place a pickup order. Fast and fresh food.</p>
        <OrderFilter onFilterChange={handleFilterChange} />
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
        <Link href="/order" className="bg-blue text-white py-5 px-10 rounded-md lg:hover:bg-blue-hover mx-auto lg:mx-0">See Full Menu</Link>
      </section>
      <section className="flex flex-col lg:flex-row justify-between items-center py-[50px] px-[25px] lg:px-[80px] gap-[50px]">
        <div className="w-full">
          <Image 
            src='/phones.png'
            alt='Phones'
            width={2103}
            height={2132}
            sizes="fill"
            className="mx-auto"
          />
        </div>
        <div className="w-full text-center lg:text-start">
          <h2 className="text-5xl text-blue"><b>Order online with our simple checkout.</b></h2>
          <p className="text-gray my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
          <Link href="/faq" className="bg-blue text-white py-5 px-10 rounded-md hover:bg-blue-hover mx-auto lg:mx-0">See our FAQ</Link>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between items-center py-[50px] px-[25px] lg:px-[80px] gap-[50px]">
        <div className="w-full text-center lg:text-start">
          <h2 className="text-5xl text-blue"><b>Call our store and takeaway when it suits you best.</b></h2>
          <p className="text-gray my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
          <Link href="https://web.whatsapp.com/" className="bg-blue text-white py-5 px-10 rounded-md hover:bg-blue-hover mx-auto lg:mx-0">Ph. +61 233 2333</Link>
        </div>
        <div className="w-full">
          <Image 
            src='/food-takeaway.png'
            alt='Food Takeaway'
            width={527}
            height={567}
            sizes="fill"
            className="mx-auto"
          />
        </div>
      </section>
    </main>
  );
}
