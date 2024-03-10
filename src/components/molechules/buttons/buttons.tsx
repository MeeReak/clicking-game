import { Button } from "@/components/atoms";
import React from "react";

const Buttons = () => {
  return (
    <>
      <div className="flex gap-5">
        <Button>10s</Button>
        <Button>15s</Button>
        <Button>30s</Button>
      </div>
    </>
  );
};

export default Buttons;
