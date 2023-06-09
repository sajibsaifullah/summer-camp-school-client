import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Instructors</Link>
      </li>
      <li>
        <Link to="/">Classes</Link>
      </li>
      {user && <li>
        <Link to="/">Dashboard</Link>
      </li>}
    </>
  );

  return (
    <div className="navbar bg-base-200">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl font-bold">
          <img src={logo} alt="" className="w-12" />
          SPORTIQUE
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img
              src={user?.photoURL}
              alt="https://img.freepik.com/free-icon/user_318-159711.jpg"
              title={user?.displayName}
              className="w-10 h-10 rounded-full mr-2"
            />

            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-neutral bg-rose-500 text-white"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link
              className="btn btn-sm btn-neutral bg-rose-500 text-white"
              to="/login"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
