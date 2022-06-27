import Head from 'next/head';

function HeadInfo({ title, keyowrd, contents }) {
    return (
        <Head>
            <title>{title}</title>
            <meta keyword={keyowrd} />
            <meta contents={contents} />
        </Head>
    );
}

HeadInfo.defaultProps = {
    title: 'MY Blog',
    keyword: 'Blog powered by Next js',
    contents: 'practice next js'
}

export default HeadInfo;