import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const ethereum = window.ethereum;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
  return transactionContract;
}


export const TransactionProvider = ({children}) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Make sure you have metamask!");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      accounts.length !== 0 ? setCurrentAccount(accounts[0]) : console.log("No authorized account found");

      console.log(accounts);
    } catch (error) {

      console.log(error);

      throw new Error("Error checking wallet connection");
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Make sure you have metamask!");

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      setCurrentAccount(accounts[0]);

    } catch (error) {
      console.log(error);

      throw new Error("Error connecting wallet");

    }
  }
  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
      </TransactionContext.Provider>
  );
}; 