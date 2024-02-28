import { ImageResponse } from "next/og";
// import { GET as getUserData } from "@/app/api/card/route";
// import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req) {
  const searchParams = new URLSearchParams(req.nextUrl.searchParams);
  username = searchParams.get("user") || "8rxn";
  const res = await fetch(`${process.env.API_URL}/card?user=${username}`);
  const data = await res.json();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={data.imgSrc} />
      </div>
    )
  );
}
