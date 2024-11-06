import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* Animate Presence removes the Whole dom from the html */
const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "afterChildren",
      staggerChildren: 0.4,
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

  return (
    <motion.div
      className="container order"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {/* <AnimatePresence> */}
      <h2>Thank you for your order :)</h2>
      {/* </AnimatePresence> */}
      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div>
        {pizza.toppings.map((topping) => (
          <div>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
