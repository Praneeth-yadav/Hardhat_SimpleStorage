const { task } = require("hardhat/config");

task("Block-Number", "Prints the current block number").setAction(
  async (taskArgs, hre) => {
    //anonymous function
    const blocknumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Block Number ${blocknumber}`);
  }
);
module.export = {};
