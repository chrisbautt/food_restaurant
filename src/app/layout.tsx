import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarCollapseBtn, NavbarContainer, NavbarItem, NavbarList } from 'keep-react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corporate Page",
  description: "corporate page created for small corporations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="h-[45px] bg-blue text-light-gray p-[10px] text-center">We're open and available for takeaway & delivery. <a href="/order" className="text-white">Order Now</a></div>      
        <Navbar  className="h-[105px] py-[25px] px-[25px]">
          <NavbarContainer>
            <NavbarBrand>
              <a href="/">
                <img src="/icon.svg" alt="icon" className="max-w-[40px]" />
              </a>
            </NavbarBrand>
            <NavbarList>
              <NavbarItem><a href="/">Home</a></NavbarItem>
              <NavbarItem><a href="/order">Order</a></NavbarItem>
              <NavbarItem><a href="/company">Company</a></NavbarItem>
              <NavbarItem><a href="/faq">FAQ</a></NavbarItem>
              <NavbarItem><a href="https://web.whatsapp.com/" target="_blank">Contact</a></NavbarItem>
            </NavbarList>
            <NavbarCollapseBtn />
            <NavbarCollapse>
              <NavbarItem><a href="/">Home</a></NavbarItem>
              <NavbarItem><a href="/order">Order</a></NavbarItem>
              <NavbarItem><a href="/company">Company</a></NavbarItem>
              <NavbarItem><a href="/faq">FAQ</a></NavbarItem>
              <NavbarItem><a href="https://web.whatsapp.com/">Contact</a></NavbarItem>
            </NavbarCollapse>
          </NavbarContainer>
        </Navbar>
        {children}
        <footer className="h-[150px] bg-light-gray py-[25px] px-[25px] flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-[50px]">
          <div>
            <h3 className="text-center leading-10"><b>CONPANY</b></h3>
            <ul className="flex flex-row justify-center items-center lg:items-start gap-[25px] text-gray">
              <li><a href="/" className="lg:hover:text-black">Home</a></li>
              <li><a href="/order" className="lg:hover:text-black">Order</a></li>
              <li><a href="/faq" className="lg:hover:text-black">FAQ</a></li>
              <li><a href="https://web.whatsapp.com/" target="_blank" className="lg:hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div className="flex justify-between items-center gap-[25px]">
            <a href="https://www.instagram.com" target="_blank"  className="p-[10px] border-[1px] border-gray lg:hover:border-black rounded-full">
              <img src="/social-instagram.svg" alt="social icon" />
            </a>
            <a href="https://www.x.com" target="_blank"  className="p-[10px] border-[1px] border-gray lg:hover:border-black rounded-full">
              <img src="/social-x.svg" alt="social icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank"  className="p-[10px] border-[1px] border-gray lg:hover:border-black rounded-full">
              <img src="/social-youtube.svg" alt="social icon" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
