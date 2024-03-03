"use client";

import React, { useEffect, useState } from "react";
import { AddImage } from "./copy-code";
import Download from "./download-button";
import ShareButton from "./share";

type Props = { imgSrc: string; linkToImage: string };

const Card = ({ imgSrc, linkToImage }: Props) => {
  const [img, setImg] = useState<string>("");

  let v;

  //   async function convertToSvg() {
  //     const canvas = document.querySelector("canvas");
  //     if (!canvas) return;
  //     const ctx = canvas.getContext("2d");

  //     if (!ctx) return;
  //     v = await Canvg.from(ctx, imgSrc);

  //     v.start();
  //     // return pngImageData;
  //   }

  //   useEffect(() => {
  //     // console.log(imgSrc)
  //     convertToSvg();

  //   }, [imgSrc]);

  const svgToPng = async () => {
    // Serialize the SVG to a string
    var encodedSvgString = btoa(unescape(encodeURIComponent(imgSrc)));

    // Create the Data URI string
    var dataUri = "data:image/svg+xml;base64," + encodedSvgString;

    setImg(dataUri);
  };

  useEffect(() => {
    svgToPng();
  }, [imgSrc]);

  return (
    <>
      <img src={img} width={640} height={320} className="max-w-[90vw] mx-auto" alt="" />

      <div className="flex gap-4  max-w-[90vw] flex-wrap w-full mx-auto mt-0 ; justify-between">
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
