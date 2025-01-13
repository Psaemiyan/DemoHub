
export default function FeaturedStories() {
  const stories = [
    { id: 1, title: "Story 1", description: "Brief description of story 1", image: "story1.jpg" },
    { id: 2, title: "Story 2", description: "Brief description of story 2", image: "story2.jpg" },
    { id: 3, title: "Story 3", description: "Brief description of story 3", image: "story3.jpg" },
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

