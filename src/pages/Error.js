import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="h-[100vh] w-[100vw] grid ">
      <div className="grid items-center justify-center">
        <div>
          <h2 className="text-5xl font-bold my-4">404 PAGE NOT FOUND</h2>
          <Link className="px-4 py-3 bg-blue-400 text-white rounded-sm" to="/">
            GO BACk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
