import { Plus, Search } from "lucide-react";
import handleAddTodo from "../functions/handleAddTodo";
import Categories from "./Categories";
import { useState } from "react";
import AddModal from "./AddModal";

function DashboardLeft() {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <div className=" h-96 pt-10 text-text-main ">
      <div className="flex flex-col  gap-10 px-[10%] justify-center ">
        <div className="flex flex-col gap-2">
          <h1 className="text-text-body text-2xl md:text-4xl ">
            Good evening, Esmira
          </h1>
          <p className="text-text-body text-xs md:text-base">
            Here's what you need to get done today.
          </p>
        </div>
        <div className="flex  items-center w-full p-4  gap-2 shadow-primary-shadow rounded-lg ">
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
        <Categories />
        {showAddModal && <AddModal />}
        <div>
          <Plus
            className="fixed bottom-25 bg-primary rounded-full p-1 right-[15vw] lg:right-[35vw]"
            size={45}
            onClick={() => {
              handleAddTodo({ showModal: { showAddModal, setShowAddModal } });
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default DashboardLeft;
