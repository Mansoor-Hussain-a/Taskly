import { motion } from "motion/react";
import { createPortal } from "react-dom";

export default function AddModal() {
  return createPortal(
    <motion.div className="fixed z-10 w-screen h-screen flex justify-center items-center top-0 bg-black opacity-30 backdrop-blur-2xl">
      <motion.div
        className=" w-[80%] h-[80%]  rounded-3xl bg-amber-50 opacity-100"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <form action=""></form>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
