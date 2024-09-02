'use client'
import { useState } from "react";

interface FilterProps {
    onFilterChange: (filter: string) => void;
    showFullMenuButton?: boolean;
  }
  
  function OrderFilter({ onFilterChange, showFullMenuButton = false }: FilterProps) {
    const [filter, setFilter] = useState<string>(showFullMenuButton ? 'full-menu' : 'burgers');
  
    const handleFilterChange = (newFilter: string) => {
      setFilter(newFilter);
      onFilterChange(newFilter);
    };
  
    return (
      <div className="py-[25px] flex flex-wrap justify-center items-center gap-[25px] mt-[50px]">
        {showFullMenuButton && (
          <button
            className={`${
              filter === 'full-menu' ? 'bg-blue text-white' : 'border-[1px] border-gray'
            } py-4 px-10 rounded-md`}
            onClick={() => handleFilterChange('full-menu')}
          >
            Full Menu
          </button>
        )}
        <button
          className={`${
            filter === 'burgers' ? 'bg-blue text-white' : 'border-[1px] border-gray'
          } py-4 px-10 rounded-md`}
          onClick={() => handleFilterChange('burgers')}
        >
          Burgers
        </button>
        <button
          className={`${
            filter === 'sides' ? 'bg-blue text-white' : 'border-[1px] border-gray'
          } py-4 px-10 rounded-md`}
          onClick={() => handleFilterChange('sides')}
        >
          Sides
        </button>
        <button
          className={`${
            filter === 'drinks' ? 'bg-blue text-white' : 'border-[1px] border-gray'
          } py-4 px-10 rounded-md`}
          onClick={() => handleFilterChange('drinks')}
        >
          Drinks
        </button>
      </div>
    );
}
  
export default OrderFilter;
