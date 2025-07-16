import React, { useEffect } from "react";


interface CardProps {
  title: string;
  budget_price: number;
  setBalanceAmount: React.Dispatch<React.SetStateAction<number>>;
}

const Card = ({ title, budget_price, setBalanceAmount }: CardProps) => {

  // useEffect(() => {
    
  //   setBalanceAmount((prev: number) => prev - budget_price);
  // }, []);


  return (
    <div className=" dark:bg-gray-800 shadow-lg bg-white rounded-2xl p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl w-full sm:w-72 mx-auto group">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold dark:text-white group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h2>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
          Budget
        </span>
      </div>

      <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
        ₹{budget_price.toLocaleString()}
      </div>

      <div className="flex items-center justify-between mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300">
          View Details
        </button>
        <span className="text-xs text-gray-400 dark:text-gray-300">Updated just now</span>
      </div>
    </div>
  );
};

export default Card;