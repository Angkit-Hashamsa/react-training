import "./App.css";
import Book from "./components/Book";

const Library = [
  {
    id: 1,
    title: "one",
    authorName: "Harry",
    bookname: "harry potter",
  },
  {
    id: 2,
    title: "two",
    authorName: "Harry",
    bookname: "absbdbasbd",
  },
  {
    id: 3,
    title: "three",
    authorName: "Harry three",
    bookname: "harry asdadad",
  },
  {
    id: 4,
    title: "four",
    authorName: "Harry four",
    bookname: "harry hahshha",
  },
];

function App() {
  return (
    <>
      {Library.map((item) => {
        console.log(item);
        const { title, authorName, bookname } = item;
        return (
          <Book
            key={item.id}
            title={title}
            authorName={authorName}
            bookname={bookname}
          />
        );
      })}
    </>
  );
}

export default App;
