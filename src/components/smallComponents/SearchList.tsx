import { Search } from "lucide-react";

function SearchList() {
  return (
    <div className="flex  items-center w-full p-4  gap-2 shadow-light-shadow rounded-lg ">
      <Search className="shrink-0 text-primary" />
      <input
        type="text"
        placeholder="Search Tasks"
        className="py-2 px-3 grow shrink-2 rounded-lg w-[clamp(50px,30%,300px)] outline-0 border-0"
      />
      <button className="bg-primary py-2 text-text-main px-3 rounded-md cursor-pointer ">
        Search
      </button>
    </div>
  );
}
export default SearchList;
