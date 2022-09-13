import Container from '../components/container';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import MorePosts from '../components/more-posts';
import SiteNav from '../components/site-nav';
import Post from '../interfaces/post';
import { getAllPosts } from '../lib/api';


type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  const nav = <SiteNav routes={[
    { name: 'Index' }
  ]} />;

  return (
    <>
      <Layout nav={nav}>
        <Intro />
        <section className='pt-8'>
          <Container>

            {heroPost && (
              <HeroPost
                title={heroPost.title}
                date={heroPost.date}
                slug={heroPost.slug}
              />
            )}

            {morePosts.length > 0 && <MorePosts posts={morePosts} />}

          </Container>
        </section>
      </Layout>
    </>
  );

}

export const getStaticProps = async () => {

  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return Promise.resolve({
    props: { allPosts },
  });

};

