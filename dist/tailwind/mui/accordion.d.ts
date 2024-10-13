import React from 'react';
import { Accordion as ShadcnAccordion, AccordionContent as ShadcnAccordionContent, AccordionItem as ShadcnAccordionItem, AccordionTrigger as ShadcnAccordionTrigger } from '../../shadcn/ui/accordion';
declare const Accordion: React.FC<React.ComponentProps<typeof ShadcnAccordion>>;
declare const AccordionSummary: React.FC<React.ComponentProps<typeof ShadcnAccordionTrigger> & {
    expandIcon?: React.ReactNode;
}>;
declare const AccordionDetails: React.FC<React.ComponentProps<typeof ShadcnAccordionContent>>;
declare const AccordionWrapper: React.FC<React.ComponentProps<typeof ShadcnAccordionItem>>;
export { Accordion, AccordionSummary, AccordionDetails, AccordionWrapper };
