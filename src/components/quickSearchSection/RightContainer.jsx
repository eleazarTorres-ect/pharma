const RightContainer = () => {
  return (
    <div className="flex flex-wrap content-center justify-center mt-5 md:mt-0">
      <div className=" flex flex-wrap w-4/5 lg:w-1/2 content-center justify-center">
        <div className="flex flex-grow flex-wrap content-center justify-center">
          <div className="bg-white p-4 md:p-8 w-full shadow rounded-lg">
            <div className="my-3">
              <input
                className="border border-pharma-A-300 border-2 px-3 py-1 rounded-lg w-64 sm:w-48 lg:w-64"
                placeholder="Search items..."
              ></input>
            </div>
            <div className=" my-3">
              <input
                className="border border-pharma-A-300 border-2 px-3 py-1 rounded-lg w-32"
                placeholder="Enter Quantity..."
              ></input>
            </div>
            <div className="my-3 align-right">
              <button className="bg-pharma-A-400 px-3 py-1 rounded-lg text-white w-32">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
