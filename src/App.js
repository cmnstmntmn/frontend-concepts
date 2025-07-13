// BlogProvider - Aici mentinem state-ul global
import { BlogProvider, useBlog } from "./contexts/BlogContext.js";

// Our Pages
import ArticlesPage from "./pages/articles/ArticlesPage.js";
import DesprePage from "./pages/DesprePage.js";
import DebugPage from "./pages/DebugPage.js";

// Naive RouteComponent
const RouteComponent = ({}) => {
  const { route } = useBlog();

  const routeComponentMap = {
    NOOP: <span>Pagina nu a fost gasita.</span>,
    home: <ArticlesPage />,
    despre: <DesprePage />,
    debug: <DebugPage />,
  }[route];

  return routeComponentMap;
};

// Main App
export const App = () => {
  return (
    <BlogProvider>
      <RouteComponent />
    </BlogProvider>
  );
};
