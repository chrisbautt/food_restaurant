import {
    AccordionContainer,
    AccordionContent,
    AccordionIcon,
    AccordionPanel,
    AccordionTitle,
} from 'keep-react'  

export default function AccordionCard() {
    return (
        <>
            <AccordionPanel>
                <AccordionContainer className='py-[30px]'>
                    <AccordionTitle className='text-blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae?</AccordionTitle>
                    <AccordionIcon className='ml-[15px]' />
                </AccordionContainer>
                <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum perferendis fugiat exercitationem labore architecto at ad ducimus corrupti, minus accusamus rem, ab tempora amet laboriosam assumenda officiis iure voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, voluptatem?
                </AccordionContent>
            </AccordionPanel>
        </>
    )
}
