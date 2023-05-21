import { Link } from "react-router-dom";
import useTitle from "../Custom Title/CustomTitle";

const ErrorPage = () => {
  useTitle("ErrorPage");
  return (
    <div className=" flex justify-center items-center gap-7">
      <div className="w-1/2">
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&ga=GA1.2.1444904730.1682597627&semt=ais"
          alt="Error"
        />
      </div>
      <div className="space-y-8">
        <h1 className="text-5xl font-bold text-red-500">
          Oops! Something went wrong.
        </h1>
        <p className="error-message">
          We apologize for the inconvenience. <br /> The page you are looking
          for cannot be found.
        </p>
        <Link
          to="/
        "
        >
          <button className="btn-link">Go to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
