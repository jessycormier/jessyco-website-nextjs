import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';

const Meta = () => {
    return (
        <Head>
            <meta name="theme-color" content="#000" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta name="description" content={`Welcome to ${CMS_NAME}.`} />
        </Head>
    );
};

export default Meta;