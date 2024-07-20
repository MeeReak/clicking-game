"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./button";
import { AlertDialogDemo } from "./alert";

export const Main = () => {
  const [time, setTime] = useState<number>(0);
  const [click, setClick] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false); // To trigger button animation
  const [isCounting, setIsCounting] = useState<boolean>(false); // To trigger click count animation
  const [finalTime, setFinalTime] = useState<number | null>(null); // Store the final time for the alert dialog
  const [finalClicks, setFinalClicks] = useState<number | null>(null); // Store the final click count for the alert dialog

  function handleNumber(e: React.ChangeEvent<HTMLInputElement>) {
    setTime(parseInt(e.target.innerText));
    setFinalTime(parseInt(e.target.innerText));
  }

  function handleClick() {
    setClick((prevClick) => {
      setIsCounting(true); // Trigger click count animation
      return prevClick + 1;
    });

    if (!status && time > 0) {
      setStatus(true);
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (status && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0 && status) {
      console.log(time, click);
      setStatus(false);

      setFinalClicks(click);
      setClick(0);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [status, time]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCounting(false); // Reset click count animation state after duration
    }, 300); // Match this duration with the animation duration

    return () => clearTimeout(timer); // Cleanup
  }, [isCounting]);

  return (
    <>
      <AlertDialogDemo
        isOpen={click && status && time === 0 ? true : false}
        time={finalTime!} // Pass final time directly
        click={finalClicks!} // Pass final clicks directly
      />
      <main className="h-screen flex flex-col items-center justify-center relative bg-black">
        <div className="flex items-center gap-2 pr-4">
          <Image alt="mouse" src={"/left-click.png"} width={50} height={50} />
          <p className="text-4xl sm:text-5xl font-extrabold text-[#02a8f5]">
            Clicking <span className="text-white">Game</span>
          </p>
        </div>
        <p className="text-lg text-white sm:text-xl py-4">
          Put your finger-clicking speed to the test
        </p>
        <div className="sm:gap-8 gap-2 flex px-2">
          <Button
            onClick={handleNumber}
            disabled={time === 5}
            className="bg-[#02a8f5] text-white hover:bg-[#0086d2] active:bg-[#006baa]"
          >
            5s
          </Button>
          <Button
            onClick={handleNumber}
            disabled={time === 10}
            className="bg-[#02a8f5] text-white hover:bg-[#0086d2] active:bg-[#006baa]"
          >
            10s
          </Button>
          <Button
            onClick={handleNumber}
            disabled={time === 20}
            className="bg-[#02a8f5] text-white hover:bg-[#0086d2] active:bg-[#006baa]"
          >
            20s
          </Button>
        </div>
        <div className="h-[350px] bg-[#04304d] sm:w-[430px] w-[380px] rounded-[5px] my-5 flex items-center justify-center relative">
          <p className="text-[#eff9ff] absolute top-3 right-4 ">
            Time: {time}s
          </p>
          <p
            className={`text-[#def2ff] text-6xl ${isCounting ? "bounce" : ""}`}
          >
            {click}
          </p>
        </div>
        <Button
          disabled={time === 0}
          onClick={handleClick}
          className={`absolute sm:bottom-14 bottom-16 bg-[#02a8f5] text-white hover:bg-[#0086d2] active:bg-[#006baa] duration-100 ease-in-out active:scale-95 ${
            isClicked ? "clicked" : ""
          }`} // Button click animation
        >
          Click me as fast as you can!
        </Button>
      </main>
    </>
  );
};
