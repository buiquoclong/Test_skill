import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Task1 from "./task1/Task1";
import Task2 from "./task2/Task2";
import Info from "./info";

const App = () => {
  return (
    <Router>
      <div className="h-screen w-screen flex flex-col bg-gray-100 p-4 m-auto">
        <div
          className={`justify-center items-center p-4 transition-all duration-500 mx-auto w-full flex translate-y-0 h-auto"
          `}
        >
          <div className="flex space-x-2">
            <Link to="/task1">
              <button className="bg-blue-500 text-white px-4 py-2 rounded transition-all duration-500 outline-none">
                Task 1
              </button>
            </Link>
            <Link to="/task2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded transition-all duration-500 outline-none">
                Task 2
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-md">
            <Routes>
              <Route path="/" element={<Info />} />
              <Route path="/task1" element={<Task1 />} />
              <Route path="/task2" element={<Task2 />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
