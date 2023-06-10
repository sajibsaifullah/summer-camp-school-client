import { useEffect, useState } from "react";

const ClassSection = () => {
  const [cls, setCls] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setCls(data));
  }, []);
  return (
    <>
      <h2 className="text-3xl font-bold text-center my-8 uppercase">
        Classes
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {cls.slice(0, 6).map((cl, i) => (
          <div key={i}>
            <div className="card w-full h-[300px] bg-base-100 shadow-xl">
              <figure>
                <img src={cl?.image} alt="" className="w-1/2" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cl?.name}</h2>
                <p>{cl?.instructorName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClassSection;
