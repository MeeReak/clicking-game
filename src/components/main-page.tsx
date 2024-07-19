"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./button";

export const Main = () => {
  const [time, setTime] = useState<number>(0);
  const [click, setClick] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);

  function handleNumber(e: React.ChangeEvent<HTMLInputElement>) {
    setTime(parseInt(e.target.innerText));
  }

  function handleClick() {
    setClick(click + 1);
  }

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (status && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 500);
    } else if (time === 0 && status) {
      setStatus(false);
      setClick(0);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [status, time]);

  time === 0 && status && alert(`Your score is ${click}`);

  return (
    <>
      <main className="h-screen flex flex-col items-center justify-center relative">
        <div className="flex items-center gap-2 pr-4">
          <Image alt="mouse" src={"/left-click.png"} width={50} height={50} />
          <p className="text-5xl font-extrabold text-[#02a8f5]">
            Clicking <span className="text-white">Game</span>
          </p>
        </div>
        <p className="text-2xl py-4">Put your finger-clicking speed the test</p>
        <div className="gap-8 flex">
          <Button
            onClick={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleNumber(e)
            }
            disabled={time === 5 && true}
            className="bg-[#02a8f5] text-white hover:bg-[#0086d2] active:bg-[#006baa]"
          >
            5s
          </Button>
          <Button
            onClick={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleNumber(e)
            }
            disabled={time === 10 && true}
            className="bg-[#02a8f5] text-white hover:bg-[#0086d2] active:bg-[#006baa]"
          >
            10s
          </Button>
          <Button
            onClick={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleNumber(e)
            }
            disabled={time === 20 && true}
            className="bg-[#02a8f5] text-white hover:bg-[#0086d2] active:bg-[#006baa]"
          >
            20s
          </Button>
        </div>
        <div className="h-[350px] bg-[#04304d] w-[430px] rounded-[5px] my-5 flex items-center justify-center relative">
          <p className="text-[#eff9ff] absolute top-3 right-4">Time: {time}s</p>
          <p className="text-[#def2ff] text-6xl">{click}</p>
        </div>
        <Button
          disabled={time === 0 && true}
          onClick={() => {
            handleClick();
            if (!status && time > 0) {
              setStatus(true);
            }
            console.log("ji");
          }}
          className="absolute bottom-12 bg-[#02a8f5] text-white hover:bg-[#0086d2] active:bg-[#006baa]  duration-50 ease-in-out active:scale-95"
        >
          Click me as fast as you can!
        </Button>
      </main>
    </>
  );
};
