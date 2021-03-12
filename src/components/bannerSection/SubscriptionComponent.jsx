const SubscriptionComponent = () => {
  return (
    <div className="flex my-6 animate-bounce">
      <input
        className="border-pharma-A-200 placeholder-gray-400 shadow-md border border-opacity-100  px-3 py-2 rounded-full w-64"
        placeholder="Your email address"
      ></input>
      <button className="bg-pharma-A-400 shadow-md show-modal px-3 py-2 rounded-full text-white w-24 lg:w-32 -ml-8">
        Subscribe
      </button>
    </div>
  );
};

export default SubscriptionComponent;
