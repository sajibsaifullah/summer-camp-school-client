import { useEffect, useState } from "react";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  
  const handleMakeAdmin = user => {
    if (user.role === "instructor") {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `${user.name} is already an instructor`,
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount){
        location.reload();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Admin Now`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
  const handleMakeInstructor = user => {
    if (user.role === "admin") {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `${user.name} is already an admin`,
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }

    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount){
        location.reload();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Instructor Now`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  return (
    <div>
      <h2>all users : {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-600 text-white"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-ghost bg-orange-600 text-white"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    // onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
