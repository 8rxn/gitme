import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

function ShareButton({}: Props) {
  return (
    <Link
      href={
        "https://twitter.com/intent/tweet?text=Hey%2C%20Check%20Out%20Git-Me.%20%E2%99%A1%0AYour%20very%20own%20GitHub%20Card%20Generator%0A%0ATry%20out%20here%20at%0A%0Ahttps%3A%2F%2Fgitme.rajaryan.work"
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant={"outline"} className="text-xl">
        𝕏
      </Button>
    </Link>
  );
}

export default ShareButton;
