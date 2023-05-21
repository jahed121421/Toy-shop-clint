import { Link } from "react-router-dom";

const MyToyRow = ({ mytoy, handleDelete }) => {
  const {
    _id,
    name,
    description,
    image,
    price,
    quantity,
    email,

    saller_name,
  } = mytoy;

  return (
    <>
      <tr>
        <th>#</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">Price $ {price}</div>
            </div>
          </div>
        </td>
        <td>
          {description}
          <br />
          <span className="badge badge-ghost badge-sm">
            Quantity : {quantity}
          </span>
        </td>
        <td>
          <Link to={`/update/${_id}`}>
            <button className="btn-xs btn btn-outline">Update</button>
          </Link>
        </td>
        <th>
          <button
            className="btn btn-outline btn-xs"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </th>
        <th>
          <p className="text-xs">{saller_name}</p>
        </th>
        <th>
          <p className="text-sm">{email}</p>
        </th>
      </tr>
    </>
  );
};

export default MyToyRow;
