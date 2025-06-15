import { IoEllipsisVertical } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";

const Search = () => {
  /**
   * TODO: Make the search dynamic.
   */
  
  return (
    <div className="relative mb-[22px] rounded-[20px] shadow-lg">
      <input
        className="w-full rounded-3xl px-[20px] py-[16px] ps-[50px] font-secondary text-base font-medium"
        type="text"
        placeholder="Search"
        name="search"
        id="search"
      />
      <span className="absolute top-1/2 left-[20px] -translate-y-1/2 text-2xl">
        <RiSearchLine />
      </span>
      <span className="absolute top-1/2 right-[20px] -translate-y-1/2 text-2xl text-primary">
        <IoEllipsisVertical />
      </span>
    </div>
  );
};

export default Search;
