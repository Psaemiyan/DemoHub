
export default function MiscArticles() {
  const sections = [
    { id: 1, title: "L.A. Braces for ‘Explosive Fire Growth’ From Dangerous Winds", 
      snippet: "The heavy gusts predicted for later Monday threaten the progress that firefighters have made against the blazes that have ravaged Los Angeles." },

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

