"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";
import React from "react";

const BlogPage = () => {
  // const res = await fetch("http://localhost:3001/blogs", {
  //     cache: "no-store"
  // });
  // const blogs = await res.json();

  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");
  console.log(blogs);

  return (
    <div className="w-[90%] mx-auto">
      <div className="my-5 text-center">
        <h3 className="text-2xl font-bold">All Blogs</h3>
        <p>
          <i>This is all blogs page.</i>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-2">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
