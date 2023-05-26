import { useState } from "react";

const DropDown = () => {
  const [isShow, SetIsShow] = useState(false);
  const handleClick = (e) => {
    SetIsShow(isShow === true ? false : true);
  };

  return (
    <section className="" onClick={handleClick}>
      {isShow === true ? "<" : ">"}
      <div className={`${isShow ? "d-flex flex-column" : "d-none"}`}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>D</div>
      </div>
    </section>
  );
};

export default DropDown;
