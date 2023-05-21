import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateData = () => {
  const loaddata = useLoaderData();
  const { description, image, price, quantity, _id } = loaddata;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/mytoy/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire("Updated!", "Updated data successfully!", "success");
        }
        console.log(result);
      });
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center text-xl font-medium uppercase">
        Update product
      </h1>
      <form
        className="bg-slate-300 w-1/2 p-10 m-auto text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Price"
          className="w-3/4 m-2 p-2 rounded "
          defaultValue={price}
          {...register("price")}
        />
        <br />
        <input
          placeholder="Quantity"
          defaultValue={quantity}
          className="w-3/4 m-2 p-2 rounded"
          {...register("quantity")}
        />
        <br />
        <input
          placeholder="Description"
          defaultValue={description}
          className="w-3/4 m-2 p-2 rounded"
          {...register("description")}
        />
        <input
          placeholder="Photo Url"
          defaultValue={image}
          className="w-3/4 m-2 p-2 rounded"
          {...register("image")}
        />
        <br />
        <input className="w-3/4 bg-red-400 m-2 p-2 rounded" type="submit" />
      </form>
    </>
  );
};

export default UpdateData;
