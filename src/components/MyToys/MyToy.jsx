import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyToyRow from "./MyToyRow/MyToyRow";
import Swal from "sweetalert2";

const MyToy = () => {
  const { user } = useContext(AuthContext);

  const [mytoys, setMytoys] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaing = mytoys.filter((mytoy) => mytoy._id !== id);
              setMytoys(remaing);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/mytoy?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMytoys(data));
  }, [user, mytoys]);

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>
                Name <br />
                Price
              </th>
              <th>
                Description <br />
                Quantity
              </th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Saller Name</th>
              <th> Saller Email</th>
            </tr>
          </thead>
          <tbody>
            {mytoys.map((mytoy) => (
              <MyToyRow
                mytoy={mytoy}
                handleDelete={handleDelete}
                key={mytoy._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToy;
