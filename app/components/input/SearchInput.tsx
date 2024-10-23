import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[460px] sm:mt-4 md:mt-[0px]">
      <span className="absolute  top-1/2 transform -translate-y-1/2 text-gray-400">
        <AiOutlineSearch className="w-5 h-5" />
      </span>
      <input
        type="text"
        placeholder="Search for movies..."
        className="w-full pl-10 pr-4 py-2  bg-transparent border-b border-black-200 rounded-none focus:outline-none  focus:border-b-black-600"
      />
    </div>
  );
};

export default SearchInput;
