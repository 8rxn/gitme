import React from "react";

import { GET as getUserData } from "@/app/api/card/route";

import Download from "@/components/download-button";
import { NextRequest } from "next/server";
import { AddImage } from "@/components/copy-code";
import ShareButton from "@/components/share";
import { Metadata, ResolvingMetadata } from "next";
import sharp from "sharp";
import Card from "@/components/card";

type Props = { params: { user: string } };

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const user = params.user;

  const image = `${process.env.API_URL}/preview?user=${user}`;

  return {
    title: `${user}'s Git Card`,
    openGraph: {
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      site: "@8rxn_",
      creator: "@8rxn_",
      images: [image],
    },
    description: `A simple tool to generate a card for your GitHub profile.`,
  };
}

const Page = async ({ params }: Props) => {
  const res = await getUserData(
    new NextRequest(`${process.env.API_URL}/card?user=${params.user}`)
  );
  const data = await res.json();

  // const pngBuffer = await sharp(Buffer.from(data.svg)).png().toBuffer();
  
  // console.log(data.imgSrc);

  // data.imgSrc = `data:image/png;base64,${pngBuffer.toString("base64")}`;

  const linkToImage = `${process.env.API_URL}/card?user=${params.user}`;

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">Your Git Card</h1>
        </div>
        {/* {data.svg} */}
        <Card imgSrc={data.svg} linkToImage={linkToImage}></Card>
      </div>
    </>
  );
};

export default Page;
