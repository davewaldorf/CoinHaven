import TransactionCard from './TransactionCard';
import { useContext } from 'react';
import  mockData  from '../utils/dummyData';
import { TransactionContext } from '../context/TransactionContext';

const Transactions = () => {
  const {transactions, currentAccount } = useContext(TransactionContext);

  return (
      <div className="flex items-center flex-col gradient-bg-transactions p-10 " id="Transactions">
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
          {[...mockData,...transactions].reverse().map((transaction, index) => (
            <TransactionCard key={index} {...transaction} />
          ))}
        </div>
      </div>
  );
};

export default Transactions;
