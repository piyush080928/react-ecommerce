import { FaUser, FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import logo3 from '../assets/logo3.png';
import { NavLink } from "react-router-dom";

function Navbar({
  onUserClick,
  onCartClick,
  onLikeClick,
  onSearchClick,
  isAuthenticated,
  userName,
  onLogout,
  cartCount,
  likedCount
}) {
  return (
    <div className="w-full bg-gradient-to-r from-neutral-100 to-red-500 rounded-[3px] px-4 py-2 flex flex-wrap items-center justify-between">
      
      {/* Logo & Heading */}
      <div className="flex items-center gap-2">
        <img src={logo3} alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold underline">BTB PRESENTS</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-2 sm:mt-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white underline font-bold"
              : "text-black transition-colors duration-300 cursor-pointer hover:text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white underline font-bold"
              : "text-black transition-colors duration-300 cursor-pointer hover:text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white underline font-bold"
              : "text-black transition-colors duration-300 cursor-pointer hover:text-white"
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Icons & Auth */}
      <div className="flex items-center gap-3 mt-2 sm:mt-0 text-[16px] sm:text-[18px] md:text-[20px] relative">
        {/* Auth Section */}
        {isAuthenticated ? (
          <>
            <span className="text-black font-semibold hidden sm:inline">Hi, {userName}</span>
            <button
              onClick={onLogout}
              className="text-xs sm:text-sm bg-white text-black transition-colors duration-500 cursor-pointer px-2 sm:px-3 py-1 rounded hover:bg-red-400"
            >
              Logout
            </button>
          </>
        ) : (
          <FaUser
            onClick={onUserClick}
            className="transition-colors duration-300 cursor-pointer hover:text-white"
          />
        )}

        {/* Search */}
        <FaSearch
          onClick={onSearchClick}
          className="transition-colors duration-300 cursor-pointer hover:text-white"
        />

        {/* Cart */}
        <div className="relative">
          <FaShoppingCart
            onClick={onCartClick}
            className="transition-colors duration-300 cursor-pointer hover:text-white"
          />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        {/* Liked */}
        <div className="relative">
          <FaHeart
            onClick={onLikeClick}
            className="transition-colors duration-300 cursor-pointer hover:text-white"
          />
          {likedCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {likedCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
