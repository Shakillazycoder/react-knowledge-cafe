import Bookmark from "../BookMark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 container mx-auto  ml-4 mt-2 pt-4 rounded-2xl">
            
            <div>
                <h3 className="text-3xl text-center border-2 border-purple-500 rounded-2xl p-4 bg-purple-100">Spent time on read: {readingTime} min</h3>
            </div>
            <h2 className="text-3xl text-center">BookMarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>
                    )
            }
        </div>
    );
};

export default Bookmarks;