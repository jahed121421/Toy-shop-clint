import { useEffect, useState } from "react";
import AlltoyRow from "../AlltoyRow/AlltoyRow";

const AllToy = () => {
  const [alldatas, setAlldatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alldata")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlldatas(data);
      });
  }, []);

  return (
    <>
      <div className="text-center my-5 ">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <p>Saller name</p>
                  </label>
                </th>
                <th>
                  Name <br /> Quantity
                </th>
                <th>
                  Category / Sub_Category <br /> Price
                </th>
                <th>Rating</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {alldatas.slice(0, 20).map((alldata, index) => (
                <AlltoyRow key={alldata._id} alldata={alldata} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllToy;
