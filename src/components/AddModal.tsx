import { motion } from "motion/react";
import type { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
type Props = {
  setShowAddModal: Dispatch<SetStateAction<boolean>>;
};
export default function AddModal({ setShowAddModal }: Props) {
  return createPortal(
    <motion.div
      className="fixed z-10 w-screen h-screen flex justify-center items-center top-0 bg-black/30 backdrop-blur-sm "
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowAddModal((prev) => !prev);
        }
      }}
    >
      <motion.div
        className=" w-[80%] h-[80%]  rounded-3xl bg-bg-mid opacity-100 "
        initial={{ y: -200, scale: 0.5 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: -600, scale: 0.5 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <form action=""></form>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
