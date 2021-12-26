import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0xA6E3C6e01A638Fa9F8e559447769eE6e67B8ac2C");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "CoffeeDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "COFFEE",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();


// Successfully deployed token module, address: 0xFd151ef8e9980d109C5E4D21158ed1d0554F9D85