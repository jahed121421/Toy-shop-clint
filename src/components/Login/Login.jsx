import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTitle from "../Custom Title/CustomTitle";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  useTitle("Login");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  const { handlegooglesignin, loginuser } = useContext(AuthContext);

  // google signin

  const handlegooglelogin2 = () => {
    handlegooglesignin();
    navigate(from);
  };
  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if ((email, password)) {
      loginuser(email, password)
        .then((result) => {
          setSuccess(result.user);
          setError("");
          navigate(from, { replace: true });
          form.reset();
        })
        .catch((error) => {
          setError(error.message);
          setSuccess("");
        });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200 my-10">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div>
          <h2>
            {error}
            {success}
          </h2>
        </div>
        <form
          onSubmit={handlelogin}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label mt-5">
                <p className="label-text-alt">
                  Dont have an account?{" "}
                  <Link to="/register" className=" link link-hover">
                    register here!
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="login" />
            </div>
            <div className="text-center">
              sign in with
              <br />
              <span
                onClick={handlegooglelogin2}
                className="btn rounded-full btn-outline"
              >
                <FaGoogle />
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
