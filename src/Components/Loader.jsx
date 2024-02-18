const Loader = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="">
          <progress className="progress w-56"></progress>
          {/* <span className="loading loading-infinity loading-lg"></span> */}
        </div>
      </div>
    </div>
  );
};

export default Loader;
