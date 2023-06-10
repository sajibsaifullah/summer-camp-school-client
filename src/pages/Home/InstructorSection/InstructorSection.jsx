import { useEffect, useState } from "react";

const InstructorSection = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const instructors = users.filter((user) => user.role === "instructor");
  return (
    <>
    <h2 className="text-3xl font-bold text-center my-8 uppercase">Instructors</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {instructors.slice(0, 6).map((user, i) => (
          <div key={i}>
            <div className="card w-full h-[300px] bg-base-100 shadow-xl">
              <figure>
                <img src={user?.image} alt="" className="w-1/2"/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{user?.name}</h2>
                <p>{user?.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InstructorSection;
