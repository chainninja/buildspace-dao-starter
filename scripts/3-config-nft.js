import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule("0x85FE621f95Ba6306eb84E2f9E5849158B236d728");

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Coffee Bean",
        description: "This NFT will give you access to CoffeeDAO!",
        image: readFileSync("scripts/assets/coffeebean.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
