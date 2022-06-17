import { Link } from "react-router-dom";

const Hand = () => {
  return (
    <div className="text-mainTextC h-screen">
      <div className="flex justify-center">
        <img
          src="./images/Hello.png"
          className="none"
          style={{ width: "350px" }}
        />
        <img
          src="./images/HelloFlip.png"
          className="none"
          style={{ width: "350px" }}
        />
      </div>
      <div className="text-center pt-20">
        <h1 className="text-7xl pb-5">Are you left or right handed?</h1>
      </div>
      <div className="text-center pt-10">
        <button className="bg-mainTextC text-backgroundC py-5 px-20 rounded-full mr-20  hover:bg-white">
          Left
        </button>
        {/* <button className="bg-mainTextC text-backgroundC py-5 px-20 rounded-full  hover:bg-white">
        </button> */}
        <Link
          to="/Main"
          className="bg-mainTextC text-backgroundC py-5 px-20 rounded-full  hover:bg-white"
        >
          Right
        </Link>
      </div>
    </div>
  );
};

export default Hand;
