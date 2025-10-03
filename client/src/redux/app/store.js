import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import blogReducer from "../features/singleBlog/blogSlice";
import filterReducer from "../features/filter/filterSlice";
import relatedBlogsSlice from "../features/relatedBlogs/relatedBlogsSlice";
const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    filter: filterReducer,
    relatedBlogs: relatedBlogsSlice,
  },
});

export default store;
