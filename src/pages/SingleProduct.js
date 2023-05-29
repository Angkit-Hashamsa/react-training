import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const { id } = useParams();

    // useCallback is used for caching a function
    const fetchData = useCallback(async () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }, [id]);

    useEffect(() => {
        fetchData(id);
    }, [fetchData, id]);
    return (
        <div>
            SingleProduct
            <div> {id}</div>
        </div>
    );
};

export default SingleProduct;
