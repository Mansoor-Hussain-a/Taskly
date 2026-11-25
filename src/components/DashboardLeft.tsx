import { Plus } from "lucide-react";
import handleAddTodo from "../functions/handleAddTodo";
import Categories from "./Categories";
import { useState } from "react";
import AddModal from "./AddModal";
import { AnimatePresence } from "motion/react";
import Greeting from "./smallComponents/Greeting";
import SearchList from "./smallComponents/SearchList";

function DashboardLeft() {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <div className=" h-96 pt-10 text-text-main ">
      <div className="flex flex-col  gap-10 px-[10%] justify-center ">
        <Greeting />
        <SearchList />
        <Categories />
        <AnimatePresence>{showAddModal && <AddModal />}</AnimatePresence>
        <div className="cursor-pointer">
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
