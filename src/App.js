import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Base from "./Component/Base/Base";
import Toppings from "./Component/topping/Toppings";
import Order from "./Component/orders/Orders";
import { AnimatePresence } from "framer-motion";
// import Modal from "./Component/Modal/modal";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(true);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        toppings: prevPizza.toppings.includes(topping)
          ? prevPizza.toppings.filter((item) => item !== topping)
          : [...prevPizza.toppings, topping],
      };
    });
  };

  return (
    <>
      <Header />
      {/* {<Modal showModal={showModal} setShowModal={setShowModal}/>} */}
      <AnimatePresence>
        <Routes>
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
          <Route path="/order" element={<Order pizza={pizza} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
