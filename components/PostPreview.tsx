import Link from 'next/link';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { PostMetadata } from '@/constants/types';

const PostPreview = (props: PostMetadata) => {
	return (
		<Card>
			<img
				src={props.featuredImage}
				alt='card-image'
				width={500}
				height={500}
				className='object-contain mx-auto'
			/>
			<CardHeader className=''>
				<CardTitle className='pt-4 leading-8'>
					<Link
						href={`/articles/${props.slug}`}
						className='text-primary line-clamp-2 hover:underline underline-offset-2'
					>
						{props.title}
					</Link>
				</CardTitle>
				<CardDescription className='line-clamp-2'>
					{props.subtitle}
				</CardDescription>
			</CardHeader>
		</Card>
	);
};

export default PostPreview;
