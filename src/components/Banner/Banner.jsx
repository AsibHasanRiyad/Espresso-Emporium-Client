

const Banner = () => {
  return (
    <div
      className="hero h-[80vh]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/2d08mnj/3.png)",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition:'bottom',
      }}
    >
      <div className=""></div>
      <div className=" md:grid md:grid-cols-2 text-white px-2 lg:px-20">
        <div></div>
        <div className="">
          <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-base font-rancho">Would you like a Cup of Delicious Coffee?</h1>
          <p className="mb-5 font-rale text-base text-justify font-normal">
          It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="px-6 text-black text-2xl py-2 font-rancho bg-[#E3B577]">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
