const { ethers, run, network } = require("hardhat");
require("@nomiclabs/hardhat-etherscan");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying...");
  const simpleStorage = await SimpleStorageFactory.deploy(); // for deploying
  await simpleStorage.deployed(); // will wait for block confirmations
  console.log("Deployed...");
  console.log(`deployed contact to ${simpleStorage.address}`);
  //console.log(network.config);
  if (network.config.chainId === 11155111 && process.env.EtherScan_API_Key) {
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }
  const currentvalue = await simpleStorage.review();
  console.log(`current number: ${currentvalue}`);
  const transactionresponse = await simpleStorage.allocate(15);
  await transactionresponse.wait(1);

  const updatedValue = await simpleStorage.review();
  console.log(`current number: ${updatedValue}`);
}

async function verify(contractAddress, args) {
  console.log("verifying contract ...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified");
    } else {
      console.log(e);
    }
  }
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
