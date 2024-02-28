import React from "react";
import { ThemeToggle } from "./theme-toggle";

import { GeistMono } from "geist/font/mono";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed top-0 w-full p-6">
      <div className="max-w-6xl mx-auto justify-between flex items-end">
        <div>
            <h1 className={"font-mono font-extrabold " + GeistMono.className}>
          <Link href={"/"}>
              gitme
          </Link>
            </h1>
        </div>

        <div>
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
