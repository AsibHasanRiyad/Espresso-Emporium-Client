/* eslint-disable react/prop-types */
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Coffee = ({ coffee }) => {
  const { _id, name, quantity, supplier, photo } =
    coffee;
  const handelDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D2B48C",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5006/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", `${name} has been deleted.`, "success");
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-[#F5F4F1] p-3 lg:p-7">
      <figure>
        <img className=" h-42" src={photo} alt="Movie" />
      </figure>
      <div className=" flex items-center justify-evenly w-full">
        <div className=" text-xs lg:text-base space-y-2 text-start font-rale">
          <h2 className="">
            <span className=" font-semibold text-[#1B1A1A]">Name: </span>{" "}
            <span className="  font-normal ml-1 text-[#5C5B5B]"> {name} </span>
          </h2>
          <h2 className="">
            <span className=" font-semibold text-[#1B1A1A]">Supplier: </span>{" "}
            <span className="  font-normal ml-1 text-[#5C5B5B]">
              {" "}
              {supplier}{" "}
            </span>
          </h2>
          <h2 className="">
            <span className=" font-semibold text-[#1B1A1A]">Quantity: </span>{" "}
            <span className="  font-normal ml-1 text-[#5C5B5B]">
              {" "}
              {quantity}{" "}
            </span>
          </h2>
        </div>
        <div>
          <div className=" flex flex-col gap-3 w-10">
            <button className="bg-[#D2B48C] p-3 flex rounded-full lg:rounded text-white justify-center items-center ">
              <FaEye></FaEye>
            </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="bg-gray-700 p-3 flex rounded-full lg:rounded text-white justify-center items-center ">
                <FaEdit></FaEdit>
              </button>
            </Link>
            <button
              onClick={() => handelDelete(_id)}
              className="bg-red-500 p-3 flex rounded-full lg:rounded text-white justify-center items-center "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.33333 17.7778C3.33333 19.0056 4.32776 20 5.55557 20H14.4445C15.6722 20 16.6667 19.0056 16.6667 17.7778V4.44446H3.33333V17.7778Z"
                  fill="white"
                />
                <path
                  d="M13.8889 1.11109L12.7778 0H7.22224L6.11109 1.11109H2.22224V3.33333H17.7778V1.11109H13.8889Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
