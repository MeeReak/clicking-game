import { Button, Buttons } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center flex-col h-[100vh] gap-5 ">
        <div className=" flex items-center border-blue-500 border-2">
          <Image alt="mouse" src={"/left-click.png"} width={100} height={100} />
          <p className="text-5xl font-black text-[#02a8f5] pr-7">
            Clicking <span className="text-white">Game</span>
          </p>
        </div>
        <p className="text-xl">Put your finger-clicking speed the test</p>
        <Buttons />
        <div>
          <p>number</p>
          <p>Time : 5s</p>
        </div>
        <Button>Click me as fast as you can!</Button>
      </main>
    </>
  );
}
