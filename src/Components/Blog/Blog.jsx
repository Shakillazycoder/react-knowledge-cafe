const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="space-y-5 mb-5">
      <img
        className="w-full rounded-2xl"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img className="h-14 w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>{reading_time} mins read </span>
          <button onClick={() => handleAddToBookmarks(blog)}><CiBookmark></CiBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <div>
        <p>
          {hashtags.map((hashtag, index) => {
            return (
              <span key={index}>
                <a href="">#{hashtag}</a>{" "}
              </span>
            );
          })}
        </p>
      </div>
      <button className="text-purple-800 underline font-bold" onClick={()=> handleMarkAsRead(id, reading_time)}>Mark as Read</button>
    </div>
  );
};

export default Blog;
import { CiBookmark } from "react-icons/ci";
