import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion"

const containerVariants = {
  initial: { 
    opacity: 0, 
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
    } 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    }
  },
};

const childVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  }
}


const Order = ({ pizza, setShowModal }) => {
  const [showTitle, setShowTitle] = useState(true)
  setTimeout(() => {setShowTitle(false)}, 4000)

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, [setShowModal])

  return (
      <motion.div className="container order"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
      >
        <AnimatePresence>
          <h2> Thank you for your order :) </h2>
        </AnimatePresence>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>

    </motion.div>
  )
}

export default Order;