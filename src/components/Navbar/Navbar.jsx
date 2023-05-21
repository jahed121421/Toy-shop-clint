import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link to="/alltoy">All Toys</Link>
            </li>
            <li>
              <Link to="myToy">My Toys</Link>
            </li>
            <li>
              <Link to="/addatoy">Add A Toys</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-bold">
          Toys <span className="text-red-500">World</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="/alltoy">All Toys</Link>
          </li>
          <li>
            <Link to="mytoy">My Toys</Link>
          </li>
          <li>
            <Link to="/addatoy">Add A Toys</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <div>
            <button onClick={logout} className=" btn btn-warning mr-5">
              Logout
            </button>
          </div>
          <div className=" avatar tooltip tooltip-left" data-tip={user.email}>
            <div
              className="cursor-pointer
         w-10 rounded-full "
            >
              <img className="" src={user.photoURL} />
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/login">
            <button className="cursor-pointer btn btn-square">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
