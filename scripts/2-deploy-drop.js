// import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xA6E3C6e01A638Fa9F8e559447769eE6e67B8ac2C");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "CoffeeDAO Membership",
      description: "A DAO for fans of coffee",
      image: readFileSync("scripts/assets/coffee.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      // primarySaleRecipientAddress: ethers.constants.AddressZero,
      primarySaleRecipientAddress: process.env.WALLET_ADDRESS,
    })
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})();

// Note: You may know ERC-721 where every NFT is unique, 
// even if they have the same image, name, and properties. 
// With an ERC-1155, multiple people can be the holder of the same NFT. 
// In this case, our "membership NFT" is the same for everyone, 
// so instead of making a new NFT every time we can simply assign the same NFT 
// to all our members. 
// This is also more gas efficient! 
// This is a pretty common approach for cases where the NFT 
// is the same for all holders.

// bundleDrop metadata: {
//   metadata: {
//     name: 'CoffeeDAO Membership',
//     description: 'A DAO for fans of coffee',
//     image: 'https://cloudflare-ipfs.com/ipfs/bafkreigpf2cmw32fxqwlmyijoksk2kwiqudb4sjzjhls5vrdk5kpjbmtry',
//     primary_sale_recipient_address: '0x8613d0ECa789A26C41624C1FC50A0745Af5800cF',
//     uri: 'ipfs://bafkreifaldg6a5ha74mbmfxj5ong5fabnghli3cnzzonfnmerrpd3zt26e'
//   },
//   address: '0x85FE621f95Ba6306eb84E2f9E5849158B236d728',
//   type: 11
// }