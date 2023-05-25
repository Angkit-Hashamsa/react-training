import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const navLinkData = [
    {
        id: 1,
        link: "../about",
        name: "Dashboard",
    },
    {
        id: 4,
        link: "chart",
        name: "Chart",
    },
    {
        id: 5,
        link: "market",
        name: "Market",
    },
    {
        id: 10,
        link: "result",
        name: "Result",
    },
];

const About = () => {
    return (
        <div>
            <h2 className="text-center text-2xl text-purple-400 font-semibold mt-6 capitalize">
                About the products
            </h2>
            <div className="bg-violet-500 flex px-4 py-3 gap-3 w-[75%] mx-auto">
                {navLinkData.map((item) => (
                    <NavLink
                        to={item.link}
                        style={({ isActive, isPending }) => {
                            return {
                                color: isActive ? "yellow" : "white",
                            };
                        }}
                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                        aria-current="page"
                        end
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>

            <Outlet />
        </div>
    );
};

export default About;
