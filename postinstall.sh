#!/bin/bash

# Step 1: Pull the font
curl -L -O https://github.com/vercel/geist-font/archive/refs/tags/1.1.0.tar.gz

# Step 2: Unpack the font archive
tar -xzvf 1.1.0.tar.gz

# Step 3: Install the font
mkdir -p ~/.fonts
mv geist-font-1.1.0/*.ttf ~/.fonts/

# Step 4: Clear and regenerate font cache
fc-cache -f -v

# Step 5: Verify the installation
fc-list | grep "Geist"

# Step 6: Cleanup
rm -rf geist-font-1.1.0 && rm 1.1.0.tar.gz
