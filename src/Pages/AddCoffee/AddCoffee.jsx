import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handelAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(name, quantity, supplier, taste, category, details, photo);
    console.log(newCoffee);
    //sending coffee from client site
    fetch("http://localhost:5006/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Added Successfully",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  return (
    <div className=" mt-12 mb-20 lg:mb-32 max-w-4xl mx-auto">
      <Link to={'/'}>
        <button className=" font-rancho flex text-3xl items-center pb-8 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.5 12H4.5M4.5 12L11.25 18.75M4.5 12L11.25 5.25"
              stroke="#331A15"
            />
          </svg>
          Back to home
        </button>
      </Link>
      <section className="max-w-4xl mx-auto bg-[#F4F3F0] p-4 md:p-8  rounded-md shadow-md dark:bg-gray-800">
        <h1 className=" text-center text-6xl font-bold text-[#374151] font-rancho  mb-6">
          Add a Coffee
        </h1>
        <h2 className="text-sm font-rale text-center text-gray-500 capitalize dark:text-white mb-6">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </h2>

        <form onSubmit={handelAddCoffee} className=" font-rale">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Name:</label>
              <input
                name="name"
                type="text"
                placeholder="Coffee Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Available Quantity:
              </label>
              <input
                name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Supplier:
              </label>
              <input
                name="supplier"
                type="text"
                placeholder="Supplier"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">Taste:</label>
              <input
                name="taste"
                type="text"
                placeholder="Taste"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Category:
              </label>
              <input
                name="category"
                type="text"
                placeholder="Category"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Details:
              </label>
              <input
                name="details"
                type="text"
                placeholder="Details"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className=" mt-4">
            <label className="text-gray-700 dark:text-gray-200">
              Photo URL:
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className=" w-full mt-6">
            <button
              type="submit"
              className=" w-full px-8 py-2.5 leading-5 bg-[#D2B48C] transition-colors duration-300 transform text-[#331A15] border-2 border-[#331A15] rounded-md hover:bg-white font-rancho focus:outline-none focus:bg-gray-600"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCoffee;
