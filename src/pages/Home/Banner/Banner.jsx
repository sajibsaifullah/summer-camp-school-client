const Banner = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://i.ibb.co/fxTdbVm/banner.png"
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <h3 className="text-center text-3xl font-bold">
          Overpower, Overtake, Overcome. 
          <br />
          <span className="italic text-xl">— Serena Williams</span>
        </h3>
      </div>
    </>
  );
};

export default Banner;
