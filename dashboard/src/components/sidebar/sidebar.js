import { useState } from "react";
import { UilAngleRightB, UilAngleLeftB } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [button, setButton] = useState(false);
  return (
    <div
      style={{
        "background-color": "red",
        width: button ? "50px" : "300px",
        transition: "0.5s",
      }}
    >
      <button onClick={() => setButton(!button)}>
        {button ? <UilAngleRightB /> : <UilAngleLeftB />}
      </button>
    </div>
  );
};

export default Sidebar;
