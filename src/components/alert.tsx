"use client";

import React, { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AlertProps {
  isOpen?: boolean;
  click?: number;
  time?: number;
}

export const AlertDialogDemo: React.FC<AlertProps> = ({
  isOpen,
  click,
  time,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    isOpen && setIsDialogOpen(true);
  }, [isOpen]);

  console.log(click, time);
  return (
    <>
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogTrigger asChild>
          {/* <Button variant="outline">Show Dialog</Button> */}
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#eff9ff]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold text-[#04304d]">
              Congratulations
            </AlertDialogTitle>
            <AlertDialogDescription className="text-xl text-[#074a73]">
              You made {click} Clicks in {time} Seconds
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {/* <AlertDialogCancel>Cancel</AlertDialogCancel>s */}
            <AlertDialogAction className="bg-[#04304d] text-white hover:bg-[#0086d2] active:bg-[#006baa]">
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
