import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useState } from "react";

const SignUp = () => {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data) => {
    if (password === confirmPassword) {
      console.log(data);
    } else {
      setPasswordMatch(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen my-4">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to Sportique</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600">Name is required</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Photo URL
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Enter Your Photo URL Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.photoURL?.type === "required" && (
                <p className="text-red-600">Photo URL is required</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*?[#?!@$%^&*-])/,
                })}
                placeholder="Enter Your password Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  Password must be 6 characters or more
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have One UpperCase & Special Character
                </p>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", { required: true })}
                placeholder="Confirm Your password Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-600">Please confirm your password</p>
              )}
              {!passwordMatch && (
                <p className="text-red-600">
                  Password and confirm password do not match
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!passwordMatch}
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              Continue
            </button>
          </div>
        </form>
        <SocialLogin></SocialLogin>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
