import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#cbd2da]">
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold text-slate-600">Oops!</h2>
        <img src="https://i.ibb.co/LPC3Kk4/404.png" alt="" className="w-[50%]" />
        <h3 className="text-4xl font-bold text-slate-500">Page Not Found</h3>
        <Link to="/">
          <button className="mt-8 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;