import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

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

    // <div
    //   className="border border-slate-300 p-4 rounded-md shadow-sm
    // bg-white"
    // >
    //   <p className="text-sm text-slate-400">{props.date}</p>

    //   <Link href={`/blogs/${props.slug}`}>
    //     <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
    //   </Link>
    //   <p className="text-slate-700">{props.subtitle}</p>
    // </div>
  );
};

export default PostPreview;
