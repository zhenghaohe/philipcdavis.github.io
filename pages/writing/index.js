import { getSortedPostsData } from "../../lib/posts";
import { Text } from "rebass";
import Date from "../../components/Date";
import Layout from "../../components/Layout";
import Link from "../../components/Link";

function Writing({ allPostsData }) {
  return (
    <Layout>
      <div>
        {allPostsData.map(({ id, date, title }) => (
          <div key={id}>
            <Text
              fontWeight="normal"
              fontSize={3}
              color="var(--smoke-dark)"
              mt={4}
              mb={-2}
            >
              <Date dateString={date} />
            </Text>

            <Link href={`/writing/${id}`} fontWeight="bold" fontSize={[3, 4]}>
              {title}
            </Link>
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
