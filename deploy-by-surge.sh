#!/bin/bash

# Step 1: Build the React project
echo "Building React project..."
npm run build

# Check if the build succeeded
if [ $? -eq 0 ]; then
    echo "Build successful!"
else
    echo "Build failed. Exiting."
    exit 1
fi

# Step 2: Deploy using Surge
echo "Deploying using Surge..."
cd build # Navigate to the build directory
surge

# Check if deployment succeeded
if [ $? -eq 0 ]; then
    echo "Deployment successful!"
else
    echo "Deployment failed. Exiting."
    exit 1
fi

echo "Deployment process completed."
