import Link from 'next/link';
import DateFormatter from './date-formatter';

type Props = {
    title: string
    date: string
    slug: string
}

const PostPreview = ({
    title,
    date,
    slug,
}: Props) => {
    return (
        <div>
            <h3 className="text-3xl mb-3 leading-snug">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a className="hover:underline">{title}</a>
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DateFormatter dateString={date} />
            </div>
        </div>
    );
};

export default PostPreview;