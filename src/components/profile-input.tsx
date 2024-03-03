"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Props = {};

const ProfileInput = (props: Props) => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = url.includes("/") ? url.split("/").pop() : url;
    router.push(`/${user}`);
  };

  return (
    <div className=" w-fit">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center w-full gap-4"
      >
        <Input
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          placeholder="github.com/8rxn"
          className="bg-black/10 dark:bg-white/10 placeholder:italic placeholder:text-xs"
        ></Input>
        <Input hidden className="hidden" type="submit">
        </Input>
          <Button className="w-fit mx-auto"> Create My Card</Button>
      </form>
    </div>
  );
};

export default ProfileInput;
