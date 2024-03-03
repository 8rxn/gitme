// import { createCanvas, loadImage, registerFont } from "canvas";
import { NextRequest, NextResponse } from "next/server";
// import QRCode from "qrcode";

// import sharp from "sharp";

export const GET = async (req: NextRequest) => {
  let username;

  const searchParams = new URLSearchParams(req.nextUrl.searchParams);
  username = searchParams.get("user") || "8rxn";
  // const token = process.env.GITHUB_TOKEN;
  // // const username = "8rxn";
  // const userDataUrl = `https://api.github.com/users/${username}`;
  // const starredUrl = `https://api.github.com/users/${username}/starred`;
  // const prUrl = `https://api.github.com/search/issues?q=is:pr+author:${username}`;
  // const issuesUrl = `https://api.github.com/search/issues?q=is:issue+author:${username}`;

  // const headers = {
  //   Authorization: `token ${token}`,
  //   "X-GitHub-Api-Version": "2022-11-28",
  // };

  // try {
  //   const [userDataResponse, starredResponse, prResponse, issueResponse] =
  //     await Promise.all([
  //       fetch(userDataUrl, { method: "GET", headers: headers }),
  //       fetch(starredUrl, { method: "GET", headers: headers }),
  //       fetch(prUrl, { method: "GET", headers: headers }),
  //       fetch(issuesUrl, { method: "GET", headers: headers }),
  //     ]);

  //   if (!userDataResponse.ok || !starredResponse.ok) {
  //     throw new Error(
  //       `HTTP error! User: ${userDataResponse.status}, Starred: ${starredResponse.status}`
  //     );
  //   }

  //   const userData = await userDataResponse.json();
  //   const starredData = await starredResponse.json();
  //   const prData = await prResponse.json();
  //   const issueData = await issueResponse.json();

  // const canvas = createCanvas(1280, 640);
  // const ctx = canvas.getContext("2d");

  // ctx.fillStyle = "#232323";

  // // await loadAndRegisterFont(
  // //   "https://cdn.rajaryan.work/fonts%2FGeistMonoVariableVF.ttf",
  // //   "Geist"
  // // );

  // const scale = 2;
  // ctx.scale(scale, scale);

  // let x = 0;
  // let y = 0;
  // let width = 640;
  // let height = 320;
  // let radius = 16;

  // ctx.beginPath();
  // ctx.moveTo(x / scale + radius, y / scale);
  // ctx.lineTo(x / scale + width - radius, y / scale);
  // ctx.quadraticCurveTo(
  //   x / scale + width,
  //   y / scale,
  //   x / scale + width,
  //   y / scale + radius
  // );
  // ctx.lineTo(x / scale + width, y / scale + height - radius);
  // ctx.quadraticCurveTo(
  //   x / scale + width,
  //   y / scale + height,
  //   x / scale + width - radius,
  //   y / scale + height
  // );
  // ctx.lineTo(x / scale + radius, y / scale + height);
  // ctx.quadraticCurveTo(
  //   x / scale,
  //   y / scale + height,
  //   x / scale,
  //   y / scale + height - radius
  // );
  // ctx.lineTo(x / scale, y / scale + radius);
  // ctx.quadraticCurveTo(x / scale, y / scale, x / scale + radius, y / scale);
  // ctx.closePath();
  // ctx.fill();

  // x = canvas.width;

  // y = canvas.height / 4;

  // radius = canvas.width / 4;

  // ctx.globalAlpha = 0.15;
  // // Create radial gradient

  // const glowColor = "#059669";

  // let gradient = ctx.createRadialGradient(
  //   x / scale,
  //   y / scale,
  //   0,
  //   x / scale,
  //   y / scale,
  //   radius
  // );
  // gradient.addColorStop(0, glowColor);
  // gradient.addColorStop(0.5, "#232323"); // Tailwind green-200 equivalent
  // gradient.addColorStop(1, "#232323"); // Tailwind green-200 equivalent
  // // Tailwind green-200 equivalent

  // // Set the gradient as fill style
  // ctx.fillStyle = gradient;

  // // Apply shadow (blur) settings
  // ctx.shadowBlur = 100; // Adjust for desired blur size
  // ctx.shadowColor = glowColor;

  // // Draw the circle
  // ctx.beginPath();
  // ctx.arc(x / scale, y / scale, radius, 0, 2 * Math.PI);
  // ctx.fill();

  // // Reset global alpha and shadow blur
  // ctx.globalAlpha = 1.0;
  // ctx.shadowBlur = 0;

  // ctx.beginPath();
  // ctx.moveTo(x / scale + radius, y / scale);
  // ctx.lineTo(x / scale + width - radius, y / scale);
  // ctx.quadraticCurveTo(
  //   x / scale + width,
  //   y / scale,
  //   x / scale + width,
  //   y / scale + radius
  // );
  // ctx.lineTo(x / scale + width, y / scale + height - radius);
  // ctx.quadraticCurveTo(
  //   x / scale + width,
  //   y / scale + height,
  //   x / scale + width - radius,
  //   y / scale + height
  // );
  // ctx.lineTo(x / scale + radius, y / scale + height);
  // ctx.quadraticCurveTo(
  //   x / scale,
  //   y / scale + height,
  //   x / scale,
  //   y / scale + height - radius
  // );
  // ctx.lineTo(x / scale, y / scale + radius);
  // ctx.quadraticCurveTo(x / scale, y / scale, x / scale + radius, y / scale);
  // ctx.closePath();
  // ctx.fill();

  // ctx.font = "bold 25px Giest";

  // try {
  //   const image = await loadImage("https://git-me.vercel.app/github.png");
  //   const imageWidth = (640 * 2) / 5;
  //   ctx.drawImage(image, -20, 80, imageWidth, imageWidth);

  //   x = (canvas.width * 3) / 6 + 20;
  //   y = 50 * scale;
  //   let lineHeight = 30 * scale;

  //   ctx.fillStyle = "#fafafa";

  //   ctx.font = "bold 30px Giest";
  //   ctx.fillText(`${userData.name}`, x / scale, y / scale);

  //   // Draw username (less bold)
  //   ctx.font = "bold 16px Giest";

  //   ctx.save();

  //   const textwidth = ctx.measureText(userData.login).width;

  //   // Translate to the text position
  //   ctx.translate(620, 160 - textwidth / 2);

  //   // Rotate around this point
  //   ctx.rotate(Math.PI / 2);

  //   ctx.fillText(userData.login, 0, 0);

  //   ctx.restore();

  //   y += lineHeight;
  //   ctx.fillText(
  //     `${userData.public_gists} gists    ${userData.followers} followers`,
  //     x / scale,
  //     y / scale
  //   );
  //   y += lineHeight * 3;

  //   // Draw other details (normal)
  //   ctx.font = "20px Giest";
  //   ctx.fillText(
  //     `${userData.public_repos} repos   ${starredData.length} stars  `,
  //     x / scale,
  //     y / scale
  //   );
  //   y += lineHeight;
  //   y += lineHeight;
  //   ctx.fillText(`${prData.total_count} PRs raised`, x / scale, y / scale);
  //   y += lineHeight;
  //   ctx.fillText(
  //     `${issueData.total_count} issues created`,
  //     x / scale,
  //     y / scale
  //   );
  //   y += lineHeight;

  //   if (userData.site) {
  //     ctx.fillText(`Website: ${userData.site}`, x / scale, y / scale);
  //   }
  // } catch (error) {
  //   console.error("Failed to load the image", error);
  // }

  // if (userData.blog) {
  //   const qrCanvas = createCanvas(1000, 1000);
  //   QRCode.toCanvas(qrCanvas, userData.blog, function (error) {
  //     if (error) console.error(error);

  //     const qrCtx = qrCanvas.getContext("2d");

  //     const imageData = qrCtx.getImageData(
  //       0,
  //       0,
  //       qrCanvas.width,
  //       qrCanvas.height
  //     );
  //     for (let i = 0; i < imageData.data.length; i += 4) {
  //       // If pixel is white (background), make it transparent
  //       if (
  //         imageData.data[i] === 255 &&
  //         imageData.data[i + 1] === 255 &&
  //         imageData.data[i + 2] === 255
  //       ) {
  //         imageData.data[i + 3] = 0; // Set alpha to 0 (fully transparent)
  //       } else {
  //         // Invert color for QR code pixels
  //         imageData.data[i] = 255 - imageData.data[i]; // Red
  //         imageData.data[i + 1] = 255 - imageData.data[i + 1]; // Green
  //         imageData.data[i + 2] = 255 - imageData.data[i + 2]; // Blue
  //       }
  //     }
  //     qrCtx.putImageData(imageData, 0, 0);

  //     const qrSize = 80;
  //     ctx.drawImage(
  //       qrCanvas,
  //       0,
  //       0,
  //       qrCanvas.width,
  //       qrCanvas.height,
  //       10,
  //       10,
  //       qrSize,
  //       qrSize
  //     );
  //   });
  // }

  // ctx.imageSmoothingEnabled = false; // For images
  // ctx.textBaseline = "middle"; // For text

  // const buffer = canvas.toBuffer("image/png");

  // const data = `data:image/png;base64,${buffer.toString("base64")}`;
  try {
    const resData = await fetch(
      `https://githubcard.rajaryan.work/user/${username}`
    );

    if (!resData.ok) {
      throw new Error(`HTTP error! User: ${resData.status}`);
    }

    const data = await resData.text();

    // const pngBuffer = await sharp(Buffer.from(data)).toFormat("png").toBuffer();

    return NextResponse.json(
      { svg: data },

      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ error: "Fetch error" }, { status: 500 });
  }
};
