
export default function MiscArticles() {
  const sections = [
    { id: 1, title: "Opinion", snippet: "Article title or snippet here." },
    { id: 2, title: "Arts", snippet: "Article title or snippet here." },
    { id: 3, title: "Travel", snippet: "Article title or snippet here." },
  ];

  return (
    <section className="additional-sections">
      {sections.map((section) => (
        <div className="column" key={section.id}>
          <h4>{section.title}</h4>
          <p>{section.snippet}</p>
        </div>
      ))}
    </section>
  );
}

