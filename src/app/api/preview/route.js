import { ImageResponse } from "next/og";
// import { GET as getUserData } from "@/app/api/card/route";
// import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req) {
  const searchParams = new URLSearchParams(req.nextUrl.searchParams);
  const username = searchParams.get("user") || "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          fontSize: "90",
          background: "url('https://cdn.rajaryan.work/git-card-worker/bg.png')",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ color: "whitesmoke" }}>🌎 GitMe.</span>
          <span style={{ color: "gray" }}>rajaryan.work/</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          {username && (
            <h2 style={{ textAlign: "end", color: "whitesmoke" }}>
              {username}
            </h2>
          )}
        </div>
      </div>
    )
  );
}
