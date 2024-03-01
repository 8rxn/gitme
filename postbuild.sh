#!/bin/bash

# Step 1: Pull the font
curl -L -O https://github.com/vercel/geist-font/releases/download/1.1.0/Geist.Mono.zip

# Step 2: Unzip the font archive
unzip Geist.Mono.zip

# Step 3: Create directory if not exists
mkdir -p ./vercel/output/functions/api/card.func/.next/server/app/api/card/fonts

# Step 4: Move the font file to the desired directory
mv Geist.Mono/GeistMonoVariableVF.ttf ./.vercel/output/functions/api/card.func/.next/server/app/api/card/fonts/

# Step 5: Cleanup
rm -rf Geist.Mono && rm Geist.Mono.zip
