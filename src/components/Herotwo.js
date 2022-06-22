const Herotwo = () => {
  return (
    <div className="h-screen flex items-center justify-center px-16 flex-col">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 z-50 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob z-50 animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob z-50 animation-delay-4000"></div>
        <div className="m-8 relative space-y-4">
          <div className="text-center">
            <div className="pb-10">
              <h1 className="font-extrabold text-7xl">Gestify.</h1>
              <p className="pt-5">
                Americal Sign Language With <br /> Machine Learning
              </p>
            </div>
            <button className="py-2 px-5 bg-black text-white rounded-3xl dark:bg-white dark:text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="pt-48 text-center">
        <p>
          This game will be using your webcam and machine learning to <br />
          analyze your handshapes. Everything is processed locally and <br /> no
          webcam data will be sent or stored anywhere
        </p>
      </div>
    </div>
  );
};

export default Herotwo;
