import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddClass = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const inputClass = data;
    console.log(inputClass);
    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Added successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="ml-4 my-4">
      <h2 className="text-3xl text-center">Add Class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Class Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="text"
            {...register("image", { required: true })}
            placeholder="Class Image"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input
            type="text"
            {...register("instructorName", { required: true })}
            placeholder="Instructor Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input
            type="text"
            {...register("instructorEmail", { required: true })}
            placeholder="Instructor Email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available seats</span>
          </label>
          <input
            type="text"
            {...register("seats", { required: true })}
            placeholder="Available seats"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            {...register("price", { required: true })}
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input
          className="btn btn-sm btn-neutral bg-rose-500 text-white mt-4"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddClass;
