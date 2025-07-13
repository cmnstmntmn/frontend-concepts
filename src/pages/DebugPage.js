import { useBlog } from "../contexts/BlogContext";
import Layout from "../Layout";

const DebugPage = () => {
  const appState = useBlog();

  return (
    <Layout>
      <h2>State-ul aplicatiei</h2>
      <p className="mb-2">Un mod rapid de a inspecta state-ul aplicatiei.</p>
      <pre className="text-accent">{JSON.stringify(appState, null, 2)}</pre>
    </Layout>
  );
};

export default DebugPage;
