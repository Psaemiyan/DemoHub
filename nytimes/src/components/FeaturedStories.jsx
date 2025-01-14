
export default function FeaturedStories() {
  const stories = [
    { id: 1, title: "Fires ramp up difficulty of hosting 2028 summer olympics in LA", 
      description: "5 minute read", 
      image: "story1.jpg" },

    { id: 2, title: "Maps: Tracking the Los Angeles Wildfires", 
      description: "2 minute read", 
      image: "story2.jpg" }
    
  ];

  return (
    <section className="featured-stories">
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={`/images/${story.image}`} alt={story.title} />
          <h3>{story.title}</h3>
          <p>{story.description}</p>
        </div>
      ))}
    </section>
  );
}

