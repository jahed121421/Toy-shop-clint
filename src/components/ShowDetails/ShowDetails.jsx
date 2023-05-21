import { FaArrowLeft, FaShoppingBag } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const toydetails = useLoaderData();
  const {
    name,
    rating,
    saller_name,
    price,
    description,
    image,
    quantity,
    email,
  } = toydetails;
  return (
    <>
      <h1 className="text-4xl text-center font-bold">Details</h1>
      <div className="m-10">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-1/2">
            <img src={image} className="w-full h-full" alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-36">
              <p className="badge badge-secondary">Rating : {rating}</p>
              <p className="badge badge-secondary">Price : {price}</p>
              <p className="badge badge-secondary">Quantity : {quantity}</p>
              <p className="badge badge-secondary">Email : {email}</p>
              <p className="badge badge-secondary">
                Saller Name :
                {toydetails.saller_name ? saller_name : "No saller name"}
              </p>
            </div>
            <div className="card-actions justify-end ">
              <Link to="/">
                <button className="btn btn-primary mr-2">
                  <FaArrowLeft className="mr-4" />
                  Back
                </button>
              </Link>
              <button className="btn btn-primary">
                <FaShoppingBag className="mr-2" />
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
