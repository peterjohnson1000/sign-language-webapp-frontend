import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className=" text-mainTextC h-screen">
      <div className="flex">
        <div className="">
          <img
            src="./images/Hello.png"
            className=""
            style={{ width: "5000px" }}
          />
        </div>
        <div>
          <img src="./images/Rock.png" className="rotate-6" />
        </div>
        <div>
          <img
            src="./images/Victory.png"
            className="rotate-350"
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
      <div className="text-center">
        <h1 className="text-8xl pb-5">Fingerspelling</h1>
        <p className="text-lg">
          Learn the Americal Sign Language With machine Learning
        </p>
      </div>
      <div className="text-center pt-10">
        {/* <button className="bg-mainTextC text-backgroundC py-5 px-20 rounded-full  hover:bg-white">
          </button> */}
        <Link
          to="/Hand"
          className="bg-mainTextC text-backgroundC py-5 px-20 rounded-full  hover:bg-white"
        >
          Let’s go
        </Link>
      </div>
    </div>
  );
};

export default Hero;
