// SPDX-License-Identifier: Unlicense

pragma solidity^0.8.0;

import "hardhat/console.sol";

contract Transactions {
  uint256 transactionCount;

  event Transfer(address from, address to, uint256 amount, string message, uint256 timestamp, string keyword);

  struct TransferStruct {
    address sender;
    address receiver;
    uint256 amount;
    string message;
    uint256 timestamp;
    string keyword;
  }

  TransferStruct[] public transactions;

  function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public payable {
    transactionCount++;
    TransferStruct memory transaction = TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword);
    transactions.push(transaction);
    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
  }

  function getTransactionCount() public view returns (uint256) {
    return transactionCount;
  }

  function getAllTransactions() public view returns (TransferStruct[] memory) {
    return transactions;
  }
}