import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const url = "https://course-api.com/react-tours-project";
const Product = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            Product
            <div className="grid grid-cols-3 gap-3">
                {data &&
                    data.map((item, index) => (
                        <div
                            key={item.id}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                            <img
                                className="rounded-t-lg h-72"
                                height={300}
                                src={item.image}
                                alt=""
                            />

                            <div className="p-5">
                                <button
                                    onClick={() =>
                                        navigate(`/Product/${index + 1}`)
                                    }
                                >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                </button>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                                <Link
                                    to={`/product/${index + 1}`}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Read more
                                    <svg
                                        aria-hidden="true"
                                        className="w-4 h-4 ml-2 -mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Product;
