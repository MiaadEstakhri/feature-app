import { useState } from "react";

const data = [
  { name: "ali" },
  { name: "miaad" },
  { name: "fozhan" },
  { name: "milad" },
];

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center border-1 border-black">
      {data.map((item, key) => {
        return (
          <div key={key}>
            <div>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;
