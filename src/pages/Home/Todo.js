import { memo } from "react";

const Todos = ({ todos, setTodos }) => {
    return (
        <>
            <button onClick={setTodos}>SetTODO</button>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
};

// usememo is use to cache the props
export default memo(Todos);
