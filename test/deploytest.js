const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", function () { 
  let simpleStorageFactory, simpleStorage;
  this.beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start with a favourite number as 0", async function () {
    const currentValue = await simpleStorage.review();
    const expectedValue = "0";
    //assert
    //expect
    assert.equal(currentValue.toString(), expectedValue);
  });
  it("Should update when we call allocate", async function () {
    const expectedValue = "15";
    const transactionResponse = await simpleStorage.allocate(expectedValue);
    await transactionResponse.wait(1);

    const currentValue = await simpleStorage.review();
    assert.equal(currentValue.toString(), expectedValue);
  });
});
