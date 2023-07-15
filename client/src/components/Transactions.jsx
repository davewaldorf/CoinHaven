import TransactionCard from './TransactionCard';
import { useContext } from 'react';
import  mockData  from '../utils/mockData';
import { TransactionContext } from '../context/TransactionContext';

const Transactions = () => {
  const {transactions, currentAccount } = useContext(TransactionContext);

  return (
      <div className="container mx-auto gradient-bg-transactions p-10 ">
        {currentAccount ? (
          <h1 className="text-white font-bold text-3xl sm:text-5xl py-2 text-gradient">
          TRANSACTIONS
        </h1>
        ) : (
          <h1 className="text-white font-bold text-3xl sm:text-2xl py-2 text-gradient uppercase">
            Connect your account to see the latest transactions
          </h1>
        )}
        <div className="flex flex-wrap items-center justify-center relative shadow-2xl">
          {[...mockData,...transactions].reverse().map((transaction) => (
            <TransactionCard key={transaction.id} {...transaction} />
          ))}
        </div>
      </div>
  );
};

export default Transactions;
