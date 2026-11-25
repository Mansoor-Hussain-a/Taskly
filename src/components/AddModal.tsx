import { motion } from "motion/react";
import { createPortal } from "react-dom";

export default function AddModal() {
  return createPortal(
    <motion.div className="fixed z-10 w-screen h-screen flex justify-center items-center top-0 bg-black/30 backdrop-blur-sm ">
      <motion.div
        className=" w-[80%] h-[80%]  rounded-3xl bg-bg-mid opacity-100 "
        initial={{ y: -200, scale: 0.5 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <form action=""></form>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
