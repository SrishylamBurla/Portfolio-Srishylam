import * as React from "react";
import expensesImage from "../Images/2024-08-16 (1).png";
import foodImage from "../Images/2024-08-16 (2).png";
import { AnimatePresence, motion } from "framer-motion"

function Projects() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center w-[90vw] h-[100vh] gap-5 bg-slate-700 rounded-2xl">
        <AnimatePresence>
        <motion.div initial={{opacity:0, scale:0}}
                  animate={{opacity:1, scale:1}}
                  exit={{opacity:0, scale:0}}
                  transition={{
                    ease: "anticipate",
                    duration: 0.3
                  }} className="flex flex-col w-[500px] h-[550px]  bg-slate-500 rounded-2xl">
          <img
            className="rounded-t-2xl p-2 bg-slate-500"
            src={foodImage}
            alt="food-image"
          />
          <h4 className="p-2 bg-slate-500 text-white">
            Food Delivery Application
          </h4>
          <div className="flex flex-col p-1 m-2 bg-slate-400 rounded-2xl">
            <p className="bg-slate-500 rounded-2xl p-2 text-white">
              Developed a food delivery application with integration of
              third-party payment processors. App has been developed with roles
              such as User (Order food, Track order) and Admin (handles orders).
            </p>
            
           <a className="text-white no-underline hover:no-underline bg-slate-600 rounded-xl p-2" href="https://mern-pizza-delivery-25ff0849f36b.herokuapp.com/">Deployed Url</a> 
            <a className="text-white no-underline hover:no-underline bg-slate-600 rounded-xl p-2 mt-2" href="https://github.com/SrishylamBurla/mern-pizza-delivery">GitHub</a>
            
            </div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0}}
                  animate={{opacity:1, scale:1}}
                  exit={{opacity:0, scale:0}}
                  transition={{
                    ease: "anticipate",
                    duration: 0.3
                  }} className="flex flex-col w-[500px] h-[550px]  bg-slate-500 rounded-2xl">
          <img
            className="rounded-t-2xl p-2 bg-slate-500"
            src={expensesImage}
            alt="expense-image"
          />
          <h4 className="p-2 bg-slate-500 text-white">
            Expenses Tracker Application
          </h4>
          <div className="flex flex-col p-1 m-2 bg-slate-400 rounded-2xl">
            <p className="bg-slate-500 rounded-2xl p-2 text-white">
              Developed a comprehensive expenses tracker application using the
              MERN stack, allowing users to efficiently manage and monitor their
              finances
            </p>
            <a className="text-white no-underline hover:no-underline bg-slate-600 rounded-xl p-2" href="https://finances-tracker-dev-4f22db38f690.herokuapp.com/">Deployed Url</a>
            <a className="text-white no-underline hover:no-underline bg-slate-600 rounded-xl p-2 mt-2" href="https://github.com/SrishylamBurla/Finances-Tracker">GitHub</a>
          
          </div>
          </motion.div>
          </AnimatePresence>
      </div>
    </div>
  );
}

export default Projects;
