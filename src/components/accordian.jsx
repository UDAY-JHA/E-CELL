import { useState } from "react";

const Accordion = () => {
  const items = [
    { question: "Chamber reached do he nothing be?", answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter." },
    { question: "At by pleasure of children be?", answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter." },
    { question: "Amounted repeated as believed in confined?", answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter." },
    { question: "In am do giving to afford parish settle easily garret?", answer: "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter." },
  ];

  return (
    <div>
      <div className="w-96 my-6">
        {items.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" mb-6 lg:my-10">
      <button
        className="flex justify-between items-center w-full p-3 text-left text-gray-700 font-medium bg-[#FAFAFA] rounded-sm border-1 border-[#E7EBEE] lg:scale-150"
        onClick={() => setIsOpen(!isOpen)}
      ><div>
        <i className={`fas ${isOpen ? "fa-minus text-red-600" : "fa-plus"}`}></i>
        <span className="mx-3 text-[18px] font-medium">{question}</span>
      </div>
        
      </button>
      {isOpen && <div className="p-3 text-gray-600 lg:text-[25px] ">{answer}</div>}
    </div>
  );
};

export default Accordion;
