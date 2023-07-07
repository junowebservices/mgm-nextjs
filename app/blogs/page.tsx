import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Image from "next/image";

const Blogs = () => {
  const postMetadata = getPostMetadata();
  const recentBlog = postMetadata.slice(0, 1).map((post) => (
    <div className="grid lg:grid-cols-2">
      <Image
        src={post.featuredImage}
        alt="Featured Image"
        width={1000}
        height={500}
        className="object-contain"
      />
      <div key={post.slug}>
        <h1>{post.title}</h1>
        <p>{post.subtitle}</p>
      </div>
    </div>
  ));
  const otherBlogs = postMetadata
    // .slice(1, postMetadata.length)
    .map((post) => <PostPreview key={post.slug} {...post} />);

  return (
    <section className="inside mt-4 mb-12">
      {/* {recentBlog} */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{otherBlogs}</div>
    </section>
  );
};

export default Blogs;
