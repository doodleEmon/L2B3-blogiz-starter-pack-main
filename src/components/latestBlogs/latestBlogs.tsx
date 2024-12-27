import { Blog } from "@/types";
import React from "react";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div>
      <div className="my-5 text-center">
        <h3 className="text-2xl font-bold">Latest Blogs</h3>
        <p>
          <i>This is latest blogs page.</i>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 my-2">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 my-2 p-2">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
