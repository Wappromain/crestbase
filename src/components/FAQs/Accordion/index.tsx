import React, { useState, useEffect, FC } from 'react';
import {
  AccordionCards,
  AccordionCardsLayout,
  AccordionDiv,
  AccordionTextAnswer,
  AccordionTextContainer,
  AccordionTextQuestion,
} from './Accordion.styled';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (index === activeIndex) {
      // If the clicked accordion is already active, close it
      setActiveIndex(null);
    } else {
      // Open the clicked accordion
      setActiveIndex(index);
    }
  };

  return (
    <AccordionDiv>
      {items.map((item, index) => (
        <AccordionCards key={index}>
          <AccordionCardsLayout>
            <AccordionTextContainer isActive={activeIndex === index}>
              <AccordionTextQuestion
                className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
              >
                {item.question}
              </AccordionTextQuestion>
              {activeIndex === index && <AccordionTextAnswer>{item.answer}</AccordionTextAnswer>}
            </AccordionTextContainer>
          </AccordionCardsLayout>
        </AccordionCards>
      ))}
    </AccordionDiv>
  );
};

export default Accordion;
