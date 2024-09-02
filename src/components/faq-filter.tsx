'use client'
import { useState } from "react";

interface FilterProps {
  onSectionChange: (section: string) => void;
}

function FaqFilter({ onSectionChange }: FilterProps) {
  const [section, setSection] = useState<string>('our-food');

  const handleSectionChange = (newSection: string) => {
    setSection(newSection);
    onSectionChange(newSection);
  };

  return (
    <div className="py-[25px] flex flex-wrap justify-center items-center gap-[25px] mt-[50px]">
      <button
        className={`${
          section === 'our-food' ? 'bg-blue text-white' : 'border-[1px] border-gray'
        } py-4 px-10 rounded-md`}
        onClick={() => handleSectionChange('our-food')}
      >
        Our Food
      </button>
      <button
        className={`${
          section === 'our-delivery' ? 'bg-blue text-white' : 'border-[1px] border-gray'
        } py-4 px-10 rounded-md`}
        onClick={() => handleSectionChange('our-delivery')}
      >
        Our Delivery
      </button>
      <button
        className={`${
          section === 'our-company' ? 'bg-blue text-white' : 'border-[1px] border-gray'
        } py-4 px-10 rounded-md`}
        onClick={() => handleSectionChange('our-company')}
      >
        Our Company
      </button>
    </div>
  );
}

export default FaqFilter;
