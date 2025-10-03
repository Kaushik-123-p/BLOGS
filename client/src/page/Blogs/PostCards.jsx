import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/features/blogs/blogsSlice";
import Card from "./card";

const PostCards = () => {
  const dispatch = useDispatch();

  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  const { tags, search } = useSelector((state) => state.filter);
  console.log(tags, search);

  useEffect(() => {
    dispatch(fetchBlogs({ tags, search }));
  }, [dispatch, tags, search]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // console.log(blogs, isLoading, isError, error);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full lg:w-2/3">
      {!isError && !isLoading && currentBlogs.length > 0 ? (
        <div>
          {currentBlogs.map((blog, index) => (
            <Card key={index} blog={blog} />
          ))}
          {
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={indexOfLastBlog >= blogs.length}
              >
                Next
              </button>
              <div className="flex items-center">
                <span className="mx-2">Page {currentPage}</span>
              </div>
            </div>
          }
        </div>
      ) : (
        <div>No blogs available</div>
      )}
    </div>
  );
};

export default PostCards;
