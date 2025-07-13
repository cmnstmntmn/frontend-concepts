// BlogProvider - Aici mentinem state-ul global
import { BlogProvider, useBlog } from "./BlogContext.js";

// Our Pages
import HomePage from "./HomePage.js";
import DesprePage from "./DesprePage.js";
import DebugPage from "./DebugPage.js";

// Naive RouteComponent
const RouteComponent = ({}) => {
  const { route } = useBlog();

  const routeComponentMap = {
    NOOP: <span>Pagina nu a fost gasita.</span>,
    home: <HomePage />,
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
