import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const { name, quantity, supplier, taste, category, photo } = coffee;
  return (
    <div
    style={{
        backgroundImage: `url("https://i.ibb.co/C1r8ZhH/11.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize:'cover',
    }}>
      <div className=" pt-12 pb-20 lg:pb-32 max-w-4xl mx-auto">
        <Link to={"/"}>
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
        <div className=" bg-[#F4F3F0] py-10  rounded">
          <div className="flex flex-col justify-center items-center gap-10 md:flex-row">
            <img src={photo} className=" w-72 " />
            <div className=" font-rale space-y-2">
              <h2 className="">
                <span className=" font-semibold text-[#1B1A1A]">Name: </span>{" "}
                <span className="  font-normal ml-1 text-[#5C5B5B]">
                  {" "}
                  {name}{" "}
                </span>
              </h2>
              <h2 className="">
                <span className=" font-semibold text-[#1B1A1A]">
                  Supplier:{" "}
                </span>{" "}
                <span className="  font-normal ml-1 text-[#5C5B5B]">
                  {" "}
                  {supplier}{" "}
                </span>
              </h2>
              <h2 className="">
                <span className=" font-semibold text-[#1B1A1A]">
                  Quantity:{" "}
                </span>{" "}
                <span className="  font-normal ml-1 text-[#5C5B5B]">
                  {" "}
                  {quantity}{" "}
                </span>
              </h2>
              <h2 className="">
                <span className=" font-semibold text-[#1B1A1A]">Taste: </span>{" "}
                <span className="  font-normal ml-1 text-[#5C5B5B]">
                  {" "}
                  {taste}{" "}
                </span>
              </h2>
              <h2 className="">
                <span className=" font-semibold text-[#1B1A1A]">
                  Category:{" "}
                </span>{" "}
                <span className="  font-normal ml-1 text-[#5C5B5B]">
                  {" "}
                  {category}{" "}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
