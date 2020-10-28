import { getSortedPostsData } from "../../lib/posts";
import { default as NextLink } from "next/link";
import { Text, Link } from "rebass";
import Date from "../../components/Date";
import Layout from "../../components/layout";

function Writing({ allPostsData }) {
  return (
    <Layout>
      <div>
        {allPostsData.map(({ id, date, title }) => (
          <div key={id}>
            <Text fontSize={3} color="var(--smoke-dark)" mt={4} mb={-1}>
              <Date dateString={date} />
            </Text>

            <NextLink href={`/writing/${id}`}>
              <Link fontSize={[3, 4]}>{title}</Link>
            </NextLink>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Writing;
