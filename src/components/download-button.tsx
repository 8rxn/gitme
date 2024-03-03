"use client"

import React from "react";
import { Button } from "./ui/button";

type Props = {
  children: React.ReactNode;
  img: string;
};

const Download = ({ children, img }: Props) => {
  const downloadHandler = () => {
    const a = document.createElement("a");
    a.href = img;
    a.download = "gitme.svg";
    a.click();
  };
  return (
    <Button onClick={downloadHandler} variant={"outline"}>
      {children}
    </Button>
  );
};

export default Download;
