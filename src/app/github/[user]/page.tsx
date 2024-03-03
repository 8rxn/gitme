import React from "react";

import { GET as getUserData } from "@/app/api/card/route";

import Download from "@/components/download-button";
import { NextRequest } from "next/server";
import { AddImage } from "@/components/copy-code";
import ShareButton from "@/components/share";
import { Metadata, ResolvingMetadata } from "next";

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

  console.log(data.imgSrc, "data.imgSrc")
  const linkToImage = `${process.env.API_URL}/card?user=${params.user}`;

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">Your Git Card</h1>
        </div>
        <img src={data.imgSrc} width={640} height={320} alt="" />
        <div className="flex gap-4  max-w-[640px] w-full mx-auto mt-0 ; justify-between">
          <div className=" flex gap-4">
            <Download img={data.imgSrc}> Download Image</Download>

            <AddImage
              link={`![github-readme-banner]({${linkToImage}})`}
            ></AddImage>
          </div>
          <div className="self-end justify-self-end">
            <ShareButton></ShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
