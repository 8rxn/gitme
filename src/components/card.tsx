"use client";

import React, { useEffect, useState } from "react";
import { AddImage } from "./copy-code";
import Download from "./download-button";
import ShareButton from "./share";

type Props = { imgSrc: string; linkToImage: string };

const Card = ({ imgSrc, linkToImage }: Props) => {
  const [img, setImg] = useState<string>("");

  function convertToSvg() {
    const canvas = document.createElement("canvas");

    canvas.width = 1280;
    canvas.height = 640;

    const svgImage = document.createElement("img");

    svgImage.src = imgSrc;
    // if (canvas.getContext("2d") == null) return;
    if (!canvas.getContext("2d")) return "";
    //@ts-ignore
    canvas.getContext("2d").drawImage(svgImage, 0, 0);

    const pngImageData = canvas.toDataURL("image/png");

    return pngImageData;
  }

  useEffect(() => {
    setImg(convertToSvg());
  }, []);

  return (
    <>
      <img src={img} width={640} height={320} alt="" />

      <div className="flex gap-4  max-w-[640px] w-full mx-auto mt-0 ; justify-between">
        <div className=" flex gap-4">
          <Download img={img}> Download Image</Download>

          <AddImage link={`![github-readme-banner](${linkToImage})`}></AddImage>
        </div>
        <div className="self-end justify-self-end">
          <ShareButton></ShareButton>
        </div>
      </div>
    </>
  );
};

export default Card;
