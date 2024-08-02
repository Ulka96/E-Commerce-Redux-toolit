// Images
import Empty from "../images/Empty.png";

const EmptyCart = () => {
  return (
    <div className="col-span-9 flex flex-col items-center justify-center h-full">
      <div>
        <img src={Empty} alt="empty" />
      </div>
      <h1 className="text-3xl font-black mb-3 mt-8">
        Nothing found<span className="text-yellow-400">.</span>
      </h1>
      <p className="font-medium text-neutral-400 text-center mb-8">
        We could not find anything matching your <br /> needs. Try to look for
        something else
      </p>
      <button className="uppercase font-black text-white bg-black text-medium px-4 py-3 rounded-lg transition-all duration-200 hover:bg-[#0075ff]">
        Clear filters
      </button>
    </div>
  );
};

export default EmptyCart;
