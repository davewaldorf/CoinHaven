// https://eth-sepolia.g.alchemy.com/v2/1wKfq2T9I0TIBUNQhwbeA2MasWzFyEP9

require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/iQ3kNN97tQ2PjXqaYvzy-wne2nHIs_yy",
      accounts: ["33a8357b47d3985f22ce40f2ac924210ecd59c8df1da8958d30b4aa7ddb79a4e"]
    }
  }
};

