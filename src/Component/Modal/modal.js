import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const BackDrop = {
  visiable: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {/* To get Out of the Animation to exit the animaiton */}
      <AnimatePresence exitBeforeEnter>
        {showModal && (
          <motion.div
            className="backdrop"
            variants={BackDrop}
            animate="visible"
            initial="hidden"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
