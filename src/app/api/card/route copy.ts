import { NextRequest, NextResponse } from "next/server";

import { createCanvas, loadImage } from "canvas";

export const runtime = "edge";

export const GET = async (req?: NextRequest) => {
  const token = process.env.GITHUB_TOKEN;
  const username = "8rxn";
  const userDataUrl = `https://api.github.com/users/${username}`;
  const starredUrl = `https://api.github.com/users/${username}/starred`;
  const prUrl = `https://api.github.com/search/issues?q=is:pr+author:${username}`;
  const issuesUrl = `https://api.github.com/search/issues?q=is:issue+author:${username}`;

  const headers = {
    Authorization: `token ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
  };

  try {
    const [userDataResponse, starredResponse, prResponse, issueResponse] =
      await Promise.all([
        fetch(userDataUrl, { method: "GET", headers: headers }),
        fetch(starredUrl, { method: "GET", headers: headers }),
        fetch(prUrl, { method: "GET", headers: headers }),
        fetch(issuesUrl, { method: "GET", headers: headers }),
      ]);

    if (!userDataResponse.ok || !starredResponse.ok) {
      throw new Error(
        `HTTP error! User: ${userDataResponse.status}, Starred: ${starredResponse.status}`
      );
    }

    const userData = await userDataResponse.json();
    const starredData = await starredResponse.json();
    const prData = await prResponse.json();
    const issueData = await issueResponse.json();

    const canvas = createCanvas(640, 320);
    const ctx = canvas.getContext("2d");

    const image = await loadImage("https://cdn.rajaryan.work/card.png");

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    const fontBold = 'bold 25px "Lexend", sans-serif';

    const fontRegular = '20px "Courier New", Courier, monospace';
    ctx.font = fontBold;
    ctx.fillStyle = "white";

    const texts = [
      userData.name,
      userData.login,
      userData.public_repos,
      userData.public_gists,
      userData.followers,
      starredData.length,
      prData.total_count,
      issueData.total_count,
    ];

    ctx.fillText(userData.name, 50, 50);

    ctx.font = fontRegular;

    const buffer = canvas.toBuffer("image/jpeg");

    const base64Data = buffer.toString("base64");

    const dataURI = "data:image/jpeg;base64," + base64Data;

    return NextResponse.json({ imgSrc: dataURI }, { status: 200 });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ error: "Fetch error" }, { status: 500 });
  }
};
