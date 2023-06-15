require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./task/Block-Number");
require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */
const sepolia_rpc_url = process.env.Sepolia_RPC_URL;
const sepolica_private_key = process.env.Sepolia_Private_Key;
const etherscan_api_key = process.env.EtherScan_API_Key;
const coinMarketCap_API_KEY = process.env.Coin_Market_Cap_API_KEY;
module.exports = {
  defaultNetowrk: "hardhat", // exist by default
  // else we have to run using test net
  //command: "npx hardhat run scripts/deploy.js --network sepolia"
  networks: {
    sepolia: {
      url: sepolia_rpc_url,
      accounts: [sepolica_private_key],
      chainId: 11155111,
    },
  },
  solidity: "0.8.18",
  etherscan: {
    apiKey: etherscan_api_key,
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-reporter.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: coinMarketCap_API_KEY,
  },
};
