import { useState } from "react";
import useFetch from "./hooks/useFetch";
import useToggleHook from "./hooks/useToggleHook";
import "./index.css";

const url = "https://jsonplaceholder.typicode.com/posts/";
function App() {
  const [currentId, setId] = useState(1);
  const { data, isError, isLoading } = useFetch(url);
  const { isOpen, modalOpen, modalClose, toggle } = useToggleHook();
  if (isLoading) {
    return <h2>I am Loading ......</h2>;
  }

  if (isError) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div style={{ margin: "0 auto", width: "100vw" }} className="p-4">
      {isOpen && <h2>I am Open</h2>}
      <div className="flex gap-2">
        <button onClick={modalOpen}>Open</button>
        <button onClick={modalClose}>close</button>
        <button onClick={toggle}>toggle</button>
      </div>
      FetchAPi
      <div className="w-[90%]">
        <div className="flex items-center justify-between gap-3 ">
          {data &&
            data.slice(0, 5).map((item) => {
              return (
                <article key={item.id} className="px-4 shadow">
                  Title
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </article>
              );
            })}
        </div>
      </div>
      <div>
        {[0, 1, 2, 3, 4, 5, 6].map((item) => (
          <button onClick={() => setId(item)} key={item}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
