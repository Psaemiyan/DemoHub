
export default function MiscArticles() {
  const sections = [
    { id: 1, title: "Trump Supporters Go All In for Pete Hegseth With Money and Coordination", 
      snippet: "Conservative organizations are targeting G.O.P. senators, saying that they will pay a price if they do not back Donald Trump’s choice for defense secretary." },

    { id: 2, title: "Judge Allows Release of Half of Special Counsel’s Report on Trump Cases", 
      snippet: "The judge blocked a volume about Donald Trump’s documents case from being shown to Congress but allowed the release of a volume about the election case." },

    { id: 3, title: "An Illustrator Dies, His Last Book Unfinished. In Steps His Son.", 
      snippet: "A beloved illustrator died in the middle of a project. His son, who had been drifting away from art for years, was given the chance to finish the work." },
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

