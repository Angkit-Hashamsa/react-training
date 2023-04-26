import React from "react";
import Title from "./title";
const Book = (props) => {
  const { title, authorName, bookname } = props;
  return (
    <div style={{ border: "2px solid red", width: "200px" }}>
      <Title {...props} />
      <h4>Author Name: {authorName}</h4>
      Book Name : {bookname}
    </div>
  );
};

export default Book;
