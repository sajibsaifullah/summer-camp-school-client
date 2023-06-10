import { useForm } from "react-hook-form";

const AddClass = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="ml-4">
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
          type="file"
          {...register("image", { required: true })}
          className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
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
