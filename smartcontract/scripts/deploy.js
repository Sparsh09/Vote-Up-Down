const hre = require("hardhat");

async function main() {
  const PricePredict = await hre.ethers.getContractFactory("PricePredict");
  const pricepredict = await PricePredict.deploy();

  await pricepredict.deployed();

  console.log("PricePredict deployed to:", pricepredict.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
