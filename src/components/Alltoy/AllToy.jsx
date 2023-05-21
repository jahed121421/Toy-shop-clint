import { useEffect, useState } from "react";
import AlltoyRow from "../AlltoyRow/AlltoyRow";
import useTitle from "../Custom Title/CustomTitle";

const AllToy = () => {
  useTitle("ALLTOY");
  const [alldatas, setAlldatas] = useState([]);
  const { input, setInput } = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/alldata")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlldatas(data);
      });
  }, []);

  const handleseach = () => {
    fetch(`http://localhost:5000/datasearch/${input}`)
      .then((res) => res.json())
      .then((data) => setAlldatas(data));
  };

  return (
    <>
      <div className="text-center my-5 ">
        <input
          onClick={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button onClick={handleseach} className="btn">
          seach
        </button>
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
              {alldatas.map((alldata, index) => (
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
