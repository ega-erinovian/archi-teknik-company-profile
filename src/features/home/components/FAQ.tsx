import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questionAnswers } from "../constants";

const FAQ = () => {
  return (
    <div className="container mx-auto mt-24 px-5 md:px-20 xl:px-0 mb-48 xl:mb-96">
      <h1 className="text-4xl xl:text-7xl text-center lg:text-start font-bold mb-20 xl:mb-24 capitalize">
        Things You May <span className="text-blue-600">Wonder</span>
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {questionAnswers.map((item, idx) => (
          <AccordionItem value={String(idx)} key={idx}>
            <AccordionTrigger className="font-semibold text-xl xl:text-2xl my-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
