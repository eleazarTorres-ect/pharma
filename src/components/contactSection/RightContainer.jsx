const RightContainer = () => {
  return (
    <div className="p-5 w-full md:w-1/2">
      <div>
        <div className="bg-white p-5 w-auto shadow rounded-lg">
          <div className=" my-3">
            <input
              className="border-pharma-A-200 border-2 px-3 py-1 placeholder-gray-400 rounded-lg w-60 sm:w-48 lg:w-96"
              placeholder="Enter Name"
            ></input>
          </div>
          <div className=" my-3">
            <input
              className="border-pharma-A-200 border-2 px-3 placeholder-gray-400 py-1 rounded-lg w-60 md:w-48 lg:w-96"
              placeholder="Enter Email Address"
            ></input>
          </div>
          <div className=" my-3">
            <select className="border-pharma-A-200 border-2 text-gray-400 px-3 py-1 rounded-lg w-60 sm:w-48 xl:w-96">
              <option>Choose Inquiry Type</option>
              <option>Inventory</option>
              <option>Order</option>
              <option>Others</option>
            </select>
          </div>
          <div className=" my-3">
            <textarea
              className=" border-pharma-A-200 border-2 px-3 py-1 rounded-lg w-60 md:w-48 lg:w-96 placeholder-gray-400"
              rows="3"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <div className="my-3">
            <button className="primary-color-A-400 border-4 px-3 py-1 rounded-lg text-white w-32">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
