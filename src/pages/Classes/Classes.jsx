import { useEffect, useState } from "react";

const Classes = () => {
  const [cls, setCls] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setCls(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-bold text-center">
        Total Classes: {cls.length}
      </h2>
      <table className="table table-zebra w-full my-8">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Seats</th>
            <th>Prices</th>
          </tr>
        </thead>
        <tbody>
          {cls.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <img src={user.image} alt="" className="w-10 h-10 rounded-sm" />
              </td>
              <td>{user.name}</td>
              <td>{user.seats}</td>
              <td>${user.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Classes;
