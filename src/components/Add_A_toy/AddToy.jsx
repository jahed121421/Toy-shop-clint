import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../Custom Title/CustomTitle";

const AddToy = () => {
  useTitle("ADDTOY");
  const { user } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to add this product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Added it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/sendtoydata", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            Swal.fire("Added!", "Your Product has been added.", "success");
          });
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:w-1/2 m-10  h-full mx-auto rounded-xl bg-slate-200 p-5 space-y-2 space-x-1
    "
    >
      <input
        required
        className="w-full"
        placeholder="Toy Name"
        {...register("name")}
      />
      <br />
      <input
        required
        className="w-full"
        placeholder="Saller Name"
        {...register("saller_name")}
      />
      <br />
      <input
        required
        className="w-full"
        type="email"
        placeholder="Saller Email"
        value={user.email}
        {...register("email")}
      />
      <br />
      <label htmlFor="Category" className="mr-3">
        Sub Category :
      </label>
      <select {...register("category")}>
        <br />
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Unicorn">Unicorn</option>
        <option value="Horse">Horse</option>
        <option value="Dinosaur">Dinosaur</option>
        <option value="Cow">Cow</option>
        <option value="Monkey">Monkey</option>
        <option value="Dragon">Dragon</option>
        <option value="Wolf">Wolf</option>
      </select>
      <label htmlFor="Sub Category" className="mr-3">
        Category :
      </label>
      <select>
        <br />
        <option value="PetAnimalToy">Pet Animal Toy</option>
        <option value="AncientAniamlToy">Ancient Aniaml Toy</option>
        <option value="ForestAnimalToy">Forest Animal Toy</option>
      </select>
      <br />
      <input
        required
        className="w-full"
        type="url"
        placeholder="Photo Url"
        {...register("image")}
      />
      <br />
      <input
        required
        className="w-full"
        type="Number"
        placeholder="Price"
        {...register("price")}
      />
      <br />
      <input
        required
        className="w-full"
        type="number"
        placeholder="Rating"
        max={5}
        min={1}
        {...register("rating")}
      />
      <br />
      <input
        required
        className="w-full"
        type="number"
        placeholder="Quantity"
        {...register("quantity")}
      />
      <input
        required
        className="w-full"
        type="text"
        placeholder="Description"
        {...register("description")}
      />
      <br />
      <input className="w-full bg-blue-400" type="Submit" />
    </form>
  );
};

export default AddToy;
