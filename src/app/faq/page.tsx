'use client'
import { useState } from 'react';
import { Accordion, AccordionPanel, AccordionContainer, AccordionTitle, AccordionIcon, AccordionContent } from 'keep-react';
import FaqFilter from '@/components/faq-filter';
import faqs from '@/data/faqs.json';

export default function FAQ() {
    const [section, setSection] = useState<string>('our-food');

    const handleSectionChange = (newSection: string) => {
        setSection(newSection);
    };

    const filteredFaqs = faqs.find(faq => faq.category === section);

    return (
        <>
            <main>
                <section className="h-[75vh] w-full flex justify-center items-center">
                    <h1 className="text-6xl text-center max-w-[750px] mx-auto">
                        <b>Frequently Asked <span className="text-blue">Questions</span></b>
                    </h1>
                </section>
                <section className="py-[50px] px-[50px] lg:px-[100px]">
                    <FaqFilter onSectionChange={handleSectionChange} />
                    <Accordion flush={true} className="max-w-[900px] mx-auto">
                        {filteredFaqs?.items.map((faq, index) => (
                            <AccordionPanel key={index}>
                                <AccordionContainer className="py-[30px] flex justify-between items-center cursor-pointer">
                                    <AccordionTitle className="text-blue">{faq.question}</AccordionTitle>
                                    <AccordionIcon className="ml-[15px]" />
                                </AccordionContainer>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionPanel>
                        ))}
                    </Accordion>
                </section>
            </main>
        </>
    );
}
