import { Accordion } from 'keep-react'
import AccordionCard from '@/components/accordion'

export default function faq() {
    return (
        <>
            <main>
                <section className="h-[75vh] w-full flex justify-center items-center">
                    <h1 className="text-6xl text-center max-w-[750px] mx-auto"><b>Frequently Asked <span className="text-blue">Questions</span></b></h1>
                    <div></div>
                </section>
                <section className='py-[50px] px-[50px] lg:px-[100px]'>
                    <div className="py-[25px] flex flex-wrap justify-center items-center gap-[25px] mt-[50px]">
                      <button className="bg-blue text-white py-4 px-10 rounded-md">Our Food</button>
                      <button className="border-[1px] border-gray py-4 px-10 rounded-md">Our Delivery</button>
                      <button className="border-[1px] border-gray py-4 px-10 rounded-md">Our Company</button>
                    </div>
                    <Accordion flush={true} className='max-w-[900px] mx-auto'>
                        <AccordionCard />
                        <AccordionCard />
                        <AccordionCard />
                        <AccordionCard />
                        <AccordionCard />
                        <AccordionCard />
                    </Accordion>
                </section>
            </main>
        </>
    )
}