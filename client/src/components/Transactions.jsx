import TransactionCard from './TransactionCard';
import { useContext } from 'react';
import  mockData  from '../utils/dummyData';
import { TransactionContext } from '../context/TransactionContext';

const Transactions = () => {
  const {transactions, currentAccount } = useContext(TransactionContext);

  return (
      <div className="flex  flex-wrap items-center uppercase flex-col p-20" id="Transactions">
        {currentAccount ? (
          <h1 className="text-white font-bold text-uppercase silver-text text-3xl sm:text-5xl py-2 text-gradient ">
          Transactions
        </h1>
        ) : (
          <h1 className="text-white font-bold text-3xl sm:text-5xl py-2 text-gradient">
            Connect your account to see the latest transactions
          </h1>
        )}
        <div className="flex flex-wrap items-center justify-center relative shadow-2xl mt-10">
          {[...mockData,...transactions].reverse().map((transaction, index) => (
            <TransactionCard key={index} {...transaction} />
          ))}
        </div>
      </div>
  );
};

export default Transactions;
