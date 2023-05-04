import React, { useEffect, useState } from "react";

const FetchAPi = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const mfetchMydata = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log("I am called");
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    mfetchMydata();
  }, []);

  if (isLoading) {
    return <h2>I am Loading ......</h2>;
  }

  return (
    <div style={{ margin: "0 auto", width: "50vw" }}>
      <button onClick={() => setCount(count + 1)}>count</button>
      {count}
      FetchAPi
      {data.slice(0, 10).map((item) => {
        return (
          <article key={item.id}>
            Title
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        );
      })}
    </div>
  );
};

export default FetchAPi;
