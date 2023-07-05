import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import NavBarItem from './NavbarItem';
const navItems = ["Market", "Exchange", "Tutorials", "Wallets"];

const Navbar = () => {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-primary lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems.map((item, index) => (
              <NavBarItem key={item + index} title={item} />
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">CoinHaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {currentAccount? null : <a className="btn btn-primary font-bold mr-5">Login</a>}
      </div>
    </div>
  );
};

export default Navbar