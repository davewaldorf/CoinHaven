// https://eth-sepolia.g.alchemy.com/v2/NQLDP5tsIrHIyX6jYx25D5zVGvf1UKmp

require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/NQLDP5tsIrHIyX6jYx25D5zVGvf1UKmp",
      accounts: ["2efe273898b5e077bba2e7031cbc0b2c1c49a5dba9f09bcb976ef125f2faf3f9"]
    }
  }
};

