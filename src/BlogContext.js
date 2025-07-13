import { useState, useContext, createContext } from "react";

// Constants
const ARTICLES_API_URL =
  "https://gist.githubusercontent.com/cmnstmntmn/a96aeb7875ff582cee6ee18000a2077a/raw/8e61684f73c94b3202824564d8792f8ad03273a4/articles.json";
export const NETWORK_REQUEST_STATES = {
  NOOP: "NOOP",
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

// Creăm contextul pentru blog
const BlogContext = createContext();

// Custom hook pentru folosirea contextului
export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};

// Provider pentru context
export const BlogProvider = ({ children }) => {
  const [title] = useState("My Blog");
  const [appID] = useState({
    title: "MyBlog",
    slogan: "Călătoria mea în dezvoltarea web",
    build: "####",
    branch: "develop",
  });
  const [theme, setTheme] = useState("light");
  const [route, setRoute] = useState("home");
  const [menu] = useState([
    {
      route: "home",
      title: "Acasa",
    },
    {
      route: "despre",
      title: "Despre",
    },
    {
      route: "debug",
      title: "</>",
    },
  ]);
  const [articles, setData] = useState({
    state: NETWORK_REQUEST_STATES.NOOP,
    data: [],
  });

  const getArticles = async () => {
    // Setam state-ul pe Loading
    setData((prev) => ({
      ...prev,
      state: NETWORK_REQUEST_STATES.LOADING,
    }));

    // Simulam delay pentru loading state
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      // Efectuam un raspun catre API
      const response = await fetch(ARTICLES_API_URL);
      const data = await response.json();

      // Setam raspunsul de la API in state
      setData(() => ({
        state: NETWORK_REQUEST_STATES.SUCCESS,
        data,
      }));
    } catch (e) {
      // In caz de eroare, punem eroarea in state
      setData(() => ({
        state: NETWORK_REQUEST_STATES.ERROR,
        error: e.message,
        data: [],
      }));
    }
  };

  const navigateTo = (route) => setRoute(() => route);
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const state = {
    appID,
    menu,
    route,
    navigateTo,
    theme,
    toggleTheme,
    articles,
    getArticles,
  };

  return <BlogContext.Provider value={state}>{children}</BlogContext.Provider>;
};
