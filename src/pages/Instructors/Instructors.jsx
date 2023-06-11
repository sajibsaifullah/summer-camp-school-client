import { useEffect, useState } from "react";

const Instructors = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://summer-camp-school-server-orpin.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const instructors = users.filter((user) => user.role === "instructor");
  return (
    <div>
      <h2 className="text-xl font-bold text-center">
        Total Instructors: {instructors.length}
      </h2>
      <table className="table table-zebra w-full my-8">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <img src={user.image} alt="" className="w-10 h-10 rounded-sm" />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Instructors;
