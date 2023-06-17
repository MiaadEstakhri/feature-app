import { useState } from "react";
import "./dropDown.scss";

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
    <div className="d-flex justify-content-center">
      <div
        className={`w-100 h-100 position-absolute ${isOpen ? "closed" : ""}`}
        onClick={() => setIsOpen(false)}></div>
      <div className="col-2 position-relative">
        <div
          className="d-flex justify-content-start align-items-center p-2 ps-3 border border-1 "
          onClick={openClickHandle}>
          miaad
        </div>
        <div className="border border-1 bg-light">
          {isOpen &&
            data.map((item, key) => {
              return (
                <ul
                  key={key}
                  className="list list-unstyled d-flex flex-column ">
                  <li>{item.name}</li>
                </ul>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
