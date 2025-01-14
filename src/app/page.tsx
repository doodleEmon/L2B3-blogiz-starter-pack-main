import LatestBlogs from "@/components/latestBlogs/latestBlogs";

const HomePage = async () => {
  const res = await fetch("http://localhost:3001/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  return (
    <>
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
