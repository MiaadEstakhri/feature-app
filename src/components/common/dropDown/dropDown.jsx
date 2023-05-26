import { useState } from "react";

const DropDown = () => {
  const [isShow, SetIsShow] = useState(false);

  return (
    <section>
      <div>A</div>
      <div>B</div>
      <div>C</div>
      <div>D</div>
      <div>D</div>
    </section>
  );
};

export default DropDown;
