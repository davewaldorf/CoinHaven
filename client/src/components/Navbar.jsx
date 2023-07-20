import NavBarItem from './NavbarItem';

const navItems = ["Services", "Transactions"];

const Navbar = () => {

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
        <div className='text-primary font-bold text-2xl lg:text-3xl ml-5'>
          <span className='text-secondary'>Coin</span>
          Heaven
          </div>
        </div>
      <div className="navbar-end">
      <ul className="menu hidden lg:flex menu-horizontal px-1">
          {navItems.map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar