import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarCollapseBtn, NavbarContainer, NavbarItem, NavbarList } from 'keep-react'
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Restaurant",
  description: "Food restaurant created for small corporations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="h-[45px] bg-blue text-light-gray p-[10px] text-center"><small>We're open and available for takeaway & delivery. <Link href="/order" className="text-white">Order Now</Link></small></div>
        <Navbar  className="h-[105px] py-[25px] px-[25px]">
          <NavbarContainer>
            <NavbarBrand>
              <Link href="/">
                <Image 
                  src="/icon-wv.svg" 
                  alt="icon" 
                  className="max-w-[40px]" 
                  width={40}
                  height={40}
                />
              </Link>
            </NavbarBrand>
            <NavbarList>
              <NavbarItem><Link href="/">Home</Link></NavbarItem>
              <NavbarItem><Link href="/order">Order</Link></NavbarItem>
              <NavbarItem><Link href="/company">Company</Link></NavbarItem>
              <NavbarItem><Link href="/faq">FAQ</Link></NavbarItem>
              <NavbarItem><Link href="https://web.whatsapp.com/" target="_blank">Contact</Link></NavbarItem>
            </NavbarList>
            <NavbarCollapseBtn />
            <NavbarCollapse>
              <NavbarItem><Link href="/">Home</Link></NavbarItem>
              <NavbarItem><Link href="/order">Order</Link></NavbarItem>
              <NavbarItem><Link href="/company">Company</Link></NavbarItem>
              <NavbarItem><Link href="/faq">FAQ</Link></NavbarItem>
              <NavbarItem><Link href="https://web.whatsapp.com/">Contact</Link></NavbarItem>
            </NavbarCollapse>
          </NavbarContainer>
        </Navbar>
        {children}
        <footer className="bg-[#eeeeee] pt-[75px] pb-[50px] px-[25px] flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-[50px]">
          <div>
            <p className="text-lg text-center leading-10"><b>CONPANY</b></p>
            <ul className="flex flex-row justify-center items-center lg:items-start gap-[25px] text-gray">
              <li><Link href="/" className="lg:hover:text-black">Home</Link></li>
              <li><Link href="/order" className="lg:hover:text-black">Order</Link></li>
              <li><Link href="/faq" className="lg:hover:text-black">FAQ</Link></li>
              <li><Link href="https://web.whatsapp.com/" target="_blank" className="lg:hover:text-black">Contact</Link></li>
            </ul>
          </div>
          <div className="flex justify-between items-center gap-[25px]">
            <Link href="https://www.instagram.com" target="_blank"  className="p-[10px] border-[1px] border-gray lg:hover:border-black rounded-full">
              <Image 
                src="/social-instagram.svg" 
                alt="social icon" 
                className="w-[20px] h-[20px]"
                sizes="fill"
                width={20}
                height={20}
              />
            </Link>
            <Link href="https://www.x.com" target="_blank"  className="p-[10px] border-[1px] border-gray lg:hover:border-black rounded-full">
              <Image 
                src="/social-x.svg" 
                alt="social icon" 
                className="w-[20px] h-[20px]"
                sizes="fill"
                width={20}
                height={20}
              />
            </Link>
            <Link href="https://www.youtube.com" target="_blank"  className="p-[10px] border-[1px] border-gray lg:hover:border-black rounded-full">
              <Image 
                src="/social-youtube.svg" 
                alt="social icon" 
                className="w-[20px] h-[20px]"
                sizes="fill"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
