import React, { useEffect } from "react";
import { useBlog } from "./contexts/BlogContext";

import Button from "./components/Button.js";
import Newsletter from "./Newsletter.js";

const Footer = () => {
  const { appID } = useBlog();

  return (
    <footer className="container p-2 border-accent mt-auto">
      <div className="flex justify-between items-center">
        <p>
          &copy; 2025 {appID.title}{" "}
          <small className="block">
            build: <code className="text-accent">{appID.build}</code>
          </small>
        </p>
        <p>
          Creat cu <span className="text-accent">♥</span> pentru dezvoltatori
        </p>
      </div>
    </footer>
  );
};

const Header = () => {
  const {
    appID,
    menu,
    route: activeRoute,
    navigateTo,
    theme,
    toggleTheme,
  } = useBlog();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-10 bg-accent">
      <div className="container p-2 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold uppercase text-surface">
            {appID.title}
          </h1>
          <div className="text-sm text-surface">{appID.slogan}</div>
        </div>
        <nav>
          <ul className="flex gap items-center">
            {menu.map((item) => {
              return (
                <li key={item.route}>
                  <a
                    className={`font-bold uppercase cursor-pointer ${item.route == activeRoute ? "bg-surface text-accent" : "text-surface"}`}
                    onClick={() => navigateTo(item.route)}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-surface"
              >
                <svg
                  className="text-lg"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
          </ul>
        </nav>

        <Button variant="surface" onClick={toggleTheme}>
          <span>{isDark ? "Light" : "Dark"}</span>
        </Button>
      </div>
    </header>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col container p-2">{children}</main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
