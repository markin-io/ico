// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const NFT_HOLDERS_ADDRESS = "0x5843d514562F0ebccd00f9F284BC1720d9d14F1e";

  const cryptoDevsTokenContract = await hre.ethers.getContractFactory("CryptoDevsToken");

  const deployedContract = await cryptoDevsTokenContract.deploy(NFT_HOLDERS_ADDRESS)

  await deployedContract.deployed();

  console.log('Deployed', deployedContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
