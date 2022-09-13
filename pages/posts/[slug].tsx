import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from '../../components/container';
import Layout from '../../components/layout';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import SiteNav from '../../components/site-nav';
import type PostType from '../../interfaces/post';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';

type Props = {
    post: PostType
}

export default function Post({ post }: Props) {

    const router = useRouter();

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    const nav = <SiteNav routes={[
        { name: 'Index', path: '/' },
        { name: 'Posts' },
        { name: post.title }
    ]} />;

    return (
        <Layout nav={nav}>
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article className="mb-32">
                            <Head>
                                <title>
                                    {post.title} | {CMS_NAME}
                                </title>
                            </Head>
                            <PostHeader
                                title={post.title}
                                date={post.date}
                            />
                            <PostBody content={post.content} />
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    );
}

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {

    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ]);

    const content = await markdownToHtml(post.content || '');

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {

    const posts = getAllPosts(['slug']);

    return Promise.resolve({
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    });
}