import React from "react";
import { useLocation } from "react-router-dom";
const Chart = () => {
    const location = useLocation();
    console.log(location);
    return <div>Chart</div>;
};

export default Chart;
