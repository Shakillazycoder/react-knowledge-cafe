import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3 container mx-auto">
      <h1 className="text-4xl">Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead} key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
