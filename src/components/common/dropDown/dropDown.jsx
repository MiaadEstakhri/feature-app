import { useState } from "react";

const data = [
  { name: "ali" },
  { name: "miaad" },
  { name: "fozhan" },
  { name: "milad" },
];

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openClickHandle = () => {
    setIsOpen((prev) => !prev.isOpen);
  };
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center border-1 border-black"
      onClick={openClickHandle}>
      {data.map((item, key) => {
        return (
          <div key={key} className={`${isOpen ? "d-flex" : "d-none"}`}>
            <div>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;
