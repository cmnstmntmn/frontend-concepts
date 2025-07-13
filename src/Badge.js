const Badge = ({ status }) => {
  const statusClassMap = {
    completed: "bg-success",
    ongoing: "bg-warning",
    upcoming: "bg-info",
  }[status];

  return (
    <div
      className={`inline-block px-1 py-1 text-sm font-bold uppercase ${statusClassMap} text-surface mb-0.5`}
    >
      {status}
    </div>
  );
};

export default Badge;
