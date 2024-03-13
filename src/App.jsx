import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

 const handleAddToBookmarks = blog => {
   setBookmarks([...bookmarks, blog])
 }

 const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time)

    // remove the read from the bookmarks
    // console.log("Removing", id);
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
 }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs  handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
