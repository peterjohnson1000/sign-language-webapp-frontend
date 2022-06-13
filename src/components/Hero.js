const Hero = () => {
  return (
    <div className="bg-backgroundC text-mainTextC pt-5">
      <div className="container h-screen">
        <div className="flex">
          <div className="">
            <img
              src="./images/Hello.png"
              className="animate-wiggle"
              style={{ width: "5000px" }}
            />
          </div>
          <div>
            <img src="./images/Rock.png" className="rotate-6" />
          </div>
          <div>
            <img
              src="./images/Victory.png"
              className="rotate-350" //animate-fade-in-down
              style={{ width: "3500px" }}
            />
          </div>
          <div>
            <img
              src="./images/Super.png"
              className="rotate-20"
              style={{ width: "4500px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
