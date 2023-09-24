import { useState,useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(()=>{
    const handler = (event)=>{
        // console.log(divEl.current);
        if( !divEl.current ){
            return;
        }
        if( !divEl.current.contains(event.target) ){
            setIsOpen(false);
        }
    };
    document.addEventListener('click',handler,true);
    return ()=>{
        document.removeEventListener('click',handler);
    };
  },[]);

  const handleOptionClick = (option) => {
    console.log("I should close");
    setIsOpen(false);
    console.log(option);
    onChange(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1 border-amber-400"
        key={option.id}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={divEl} className="w-48 relative ">
      <Panel
        className="flex justify-between items-center cursor-pointer  "
        onClick={handleClick}
      >
        {value?.value || "select..."}
        <GoChevronDown className="text-lg " />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
