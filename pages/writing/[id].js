import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import { Box } from "rebass";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Box
        className="post"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
