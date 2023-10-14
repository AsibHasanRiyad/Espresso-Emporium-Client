const Footer = () => {
  return (
    <footer
    style={{
        backgroundImage: `url("https://i.ibb.co/Hgc7FYV/13.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize:'cover',
    }}
    className=" grid grid-cols-1 md:grid-cols-2 px-8 md:px-20 lg:px-48 pt-12 pb-5 font-rale">
      <div className=" space-y-4">
          <img className=" w-20" src="https://i.ibb.co/GJCB7SJ/logo1.png" alt="" />
          <h1 className=" text-5xl font-rancho tet-[#331A15]">Espresso Emporium</h1>
          <p className=" font-rale text-[#1B1A1A]">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
          <p className=" text-5xl font-rancho tet-[#331A15]">Get in Touch</p>
          <p className=" font-rale text-[#1B1A1A]" >+88 01533 333 333</p>
          <p>info@gmail.com</p>
          <p>72, Wall street, King Road, Dhaka</p>
      </div>
      {/*  */}
      <div>
        <form className="mt-12">
            <h1 className=" mb-6 font-rancho text-4xl ">Contact With Us</h1>
          <div className="">
            <input
              type="text"
              placeholder="Name"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white   rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white   rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="w-full mt-4">
            <textarea
              className="block h-32 w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-md  dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Message"
            ></textarea>
          </div>

          <button className=" px-5 py-3 mt-4 bg-transparent border-2 border-[#331A15] rounded-full font-rancho text-2xl text-[#331A15]">
            Send Message
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
