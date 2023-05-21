import { Link } from "react-router-dom";

const AlltoyRow = ({ alldata }) => {
  const { image, sub_category, category, price, name, rating, quantity } =
    alldata;

  return (
    <tr>
      <th>
        <label>{alldata.saller ? alldata.seller : "No salller name"}</label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{quantity}</div>
          </div>
        </div>
      </td>
      <td>
        {alldata.sub_category ? sub_category : category}
        <br />
        <span className="badge badge-ghost badge-sm">price: {price}</span>
      </td>
      <td>
        <p>{rating}</p>
      </td>
      <th>
        <Link to={`/showdetails/${alldata._id}`}>
          <div className="btn btn-ghost btn-xs">Shoe Details</div>
        </Link>
      </th>
    </tr>
  );
};

export default AlltoyRow;
