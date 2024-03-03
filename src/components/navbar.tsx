import React from "react";
import { ThemeToggle } from "./theme-toggle";

import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { Button } from "./ui/button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed top-0 w-full p-6">
      <div className="max-w-6xl mx-auto justify-between flex items-end">
        <div>
          <h1 className={"font-mono font-extrabold " + GeistMono.className}>
            <Link href={"/"}>gitme</Link>
          </h1>
        </div>

        <div className="flex gap-2">
          <Button variant={"outline"}>𝕏 / <TwitterLogoIcon></TwitterLogoIcon></Button>
          <Button variant={"outline"}>
            <GitHubLogoIcon ></GitHubLogoIcon>
          </Button>

          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
