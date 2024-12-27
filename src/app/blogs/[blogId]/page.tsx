import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";

interface BlogId {
  params: {
    blogId: string;
  };
}

// this is for ssg
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:3001/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

const BlogDetailsPage = async ({ params }: BlogId) => {
  const response = await fetch(`http://localhost:3001/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blogDetails = await response.json();
  return (
    <div>
      <h3>This is blog details page.</h3>
      <div>
        <BlogDetails blog={blogDetails} />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
