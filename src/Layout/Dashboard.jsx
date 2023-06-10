import { NavLink, Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Dashboard = () => {
  //   const [users, setUsers] = useState([]);
  //   const [isAdmin, setIsAdmin] = useState(true);
  const isAdmin = true;
  // const [isAdmin] = useAdmin();
  //   useEffect(() => {
  //     fetch("http://localhost:5000/users")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // setUsers(data);
  //         const A = data.find((d) => d?.role === "admin");
  //         if (A?.role === "admin") {
  //           setIsAdmin();
  //         }else{
  //             setIsAdmin(false)
  //         }
  //       });
  //   }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            {/* Sidebar content here */}
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/allusers">All Users</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addclass">Add Class</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
