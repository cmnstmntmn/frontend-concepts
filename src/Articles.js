import { useEffect } from "react";
import { useBlog, NETWORK_REQUEST_STATES } from "./BlogContext";

import Badge from "./Badge";
import Button from "./Button";

const Article = ({ id, title, pubDate, cover, description, status }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ro-RO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Simple markdown-like parsing for bold text
  const parseDescription = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");
  };

  return (
    <article className="flex flex-col transform-hover border p-1 bg-surface">
      <header className="mb-1">
        <h2 className="text-lg font-bold uppercase mb-0.5">{title}</h2>
        <Badge status={status} />
        <time className="text-sm px-1" dateTime={pubDate}>
          {formatDate(pubDate)}
        </time>
      </header>
      <img className="border mb-1 md:order-first" src={cover} alt={title} />
      <p
        className="mb-1"
        dangerouslySetInnerHTML={{ __html: parseDescription(description) }}
      ></p>
      <footer>
        <a className="text-accent font-bold uppercase" href={`#article-${id}`}>
          Citește mai mult →
        </a>
      </footer>
    </article>
  );
};

const Articles = () => {
  const { articles, getArticles } = useBlog();

  useEffect(() => {
    getArticles();
  }, []);

  const resourceComponent = {
    [NETWORK_REQUEST_STATES.SUCCESS]: articles.data.map((article) => (
      <Article key={article.id} {...article} />
    )),
    [NETWORK_REQUEST_STATES.ERROR]: (
      <div>
        <h2>Eroare</h2>
        <p>A aparut o eroare.</p>
        <pre className="text-accent">
          {JSON.stringify(articles.error, null, 2)}
        </pre>
        <Button onClick={getArticles}>Reincearca</Button>
      </div>
    ),
    [NETWORK_REQUEST_STATES.LOADING]: (
      <div>
        <h2>Loading...</h2>
        <p>Incarcam lista de articole.</p>
      </div>
    ),
  }[articles.state];

  return (
    <section className="grid md:grid-cols-3 gap">{resourceComponent}</section>
  );
};

export default Articles;
