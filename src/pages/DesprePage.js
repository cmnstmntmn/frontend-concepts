import { useBlog } from "../contexts/BlogContext";
import Layout from "../Layout";

const DesprePage = () => {
  const appState = useBlog();

  return (
    <Layout>
      <h2>Nothing here</h2>
      <p>TODO: Add some data about me here.</p>
    </Layout>
  );
};

export default DesprePage;
