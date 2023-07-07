import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { PostMetadata } from "@/constants/types";

const PostPreview = (props: PostMetadata) => {
  return (
    <Card>
      <Image
        priority
        src={props.featuredImage}
        alt="card-image"
        width={500}
        height={50}
        className="object-contain mx-auto"
      />
      <CardHeader className="">
        <CardTitle className="pt-4 line-clamp-3 leading-8">
          <Link
            href={`/blogs/${props.slug}`}
            className="text-primary hover:underline underline-offset-2"
          >
            {props.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {props.subtitle}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default PostPreview;
