import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window;

const createEthereumContract = async () => {
  const provider = new ethers.BrowserProvider(ethereum);
  const signer = await provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionContract;
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);

  const handleChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      ...value
    }));
  }

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionContract = await createEthereumContract();
        const allTransactions = await transactionContract.getAllTransactions();
        const structuredTransactions = allTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.from,
          timestamp: new Date(Number(transaction.timestamp) * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: ethers.formatEther(transaction.amount)
        }));
        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Error getting transactions");
    }
  };


  const handleTransactionCount = async () => {
    try {
      const transactionContract = await createEthereumContract();
      const currentTransactionCount = await transactionContract.getTransactionCount();

      window.localStorage.setItem("transactionCount", currentTransactionCount);
    } catch (error) {
      console.log(error);
      throw new Error("Error getting transaction count");
    }
  }


  const checkWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Make sure you have metamask!");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      accounts.length !== 0 ? setCurrentAccount(accounts[0], getAllTransactions()) : console.log("No authorized account found");

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
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("Error connecting wallet");

    }
  }

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData;
        const transactionContract = await createEthereumContract();
        const parsedAmount = ethers.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: ethers.toBeHex(parsedAmount)
          }],
        });

        const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
        setIsLoading(true);
        console.log(transactionHash);
        await transactionHash.wait();
        setIsLoading(false);
        const transactionCount = await transactionContract.getTransactionCount();
        setTransactionCount(transactionCount);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      throw new Error("Error sending transaction");
    }
  }

  useEffect(() => {
    checkWalletIsConnected();
    handleTransactionCount();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        handleChange,
        formData,
        sendTransaction,
        transactions,
        transactionCount,
        isLoading
      }}>
      {children}
    </TransactionContext.Provider>
  );
}; 