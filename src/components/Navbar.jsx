import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const navItemsObj = [
  { path: '/', label: 'Furniture' },
  { path: '/shop', label: 'Shop' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
];

const NavItems = ({ handleMenuToggle }) => {
  return (
    <ul className='flex flex-col md:flex-row gap-8'>
      {navItemsObj.map((item, index) => (
        <li key={index} onClick={handleMenuToggle}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={'fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out text-white'}>
        <nav className='max-w-screen-2xl container flex justify-between items-center mx-auto py-6 px-4'>
          <div>
            <Link to="/" className='font-bold'>Panto</Link>
          </div>

          {/* Hamburger menu item */}
          <div onClick={handleMenuToggle} className='md:hidden cursor-pointer text-xl hover:text-primary'>
            {isMenuOpen ? null : <FaBars />}
          </div>

          {/* Desktop menu item */}
          <div className='hidden md:block'>
            <NavItems />
          </div>

          {/* Mobile menu item */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } md:hidden`}
          >
            <div className='absolute top-4 right-4 cursor-pointer' onClick={handleMenuToggle}>
              <FaTimes />
            </div>
            <NavItems handleMenuToggle={handleMenuToggle} />
          </div>

          {/* Cart icon */}
          <div className='hidden md:block cursor-pointer relative'>
            <FaShoppingCart className='text-xl' />
            <sup className='absolute top-0 -right-3 bg-primary text-white w-4 h-4 rounded-full flex items-center justify-center text-xs'>
              0
            </sup>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
