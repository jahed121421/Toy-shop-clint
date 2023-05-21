import { useEffect, useState } from "react";
import AlltoyRow from "../AlltoyRow/AlltoyRow";
import useTitle from "../Custom Title/CustomTitle";

const AllToy = () => {
  useTitle("ALLTOY");
  const [alldatas, setAlldatas] = useState([]);
  const [sort, setSort] = useState([]);
  const { input, setInput } = useState("");
  useEffect(() => {
    fetch("https://assignment-11-server-jahed121421.vercel.app/alldata")
      .then((res) => res.json())
      .then((data) => {
        setAlldatas(data);
      });
  }, [sort, input]);
  const fetchtoys = async (sort) => {
    try {
      const resp = await fetch(
        `https://assignment-11-server-jahed121421.vercel.app/alldata?sort=${sort}`
      );
      const data = await resp.json();
      setAlldatas(data);
    } catch (err) {
      console.log(err);
    }
  };
  const sorted = (sortype) => {
    setSort(sortype);
  };
  const handleseach = () => {
    fetch(
      `https://assignment-11-server-jahed121421.vercel.app/datasearch/${input}`
    )
      .then((res) => res.json())
      .then((data) => setAlldatas(data));
  };

  return (
    <>
      <ul className="flex">
        <li>
          <button onClick={() => sorted("asc")} className="btn btn-square">
            sort by Asc
          </button>
        </li>
        <li>
          <button onClick={() => sorted("dsc")} className="btn btn-square">
            sort by Dsc
          </button>
        </li>
      </ul>
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
