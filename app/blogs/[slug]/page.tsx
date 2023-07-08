import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import Image from "next/image";

const getPostContent = (slug: string) => {
  const folder = "blogs/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="inside">
      <div className="mb-12">
        <Image
          src={post.data.featuredImage}
          width={1500}
          height={200}
          className="object-cover w-full lg:h-[500px]"
          alt="image"
        />
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-3xl lg:text-5xl text-black mt-8">
            {post.data.title}
          </h1>
          <p className="text-secondaryTextColor text-sm mt-2 lg:mt-4">
            {post.data.date}
          </p>
        </div>
      </div>

      <article className="text-lg max-w-[800px] mx-auto">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
