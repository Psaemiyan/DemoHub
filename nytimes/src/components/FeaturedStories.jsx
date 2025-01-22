import React from 'react';

export default function FeaturedStories() {
  const stories = [
    { 
      id: 1, 
      title: "Fires ramp up difficulty of hosting 2028 summer olympics in LA", 
      description: "5 minute read",
      image: "image-6.webp"
    },
    { 
      id: 2, 
      title: "Maps: Tracking the Los Angeles Wildfires", 
      description: "2 minute read",
      image: "image-7.webp"
    },
    { 
      id: 3, 
      title: "Another Featured Story", 
      description: "3 minute read",
      image: "image-8.webp"
    }
  ];

  return (
    <section className="featured-stories">
      {stories.map((story) => (
        <div className="featured-story-item" key={story.id}>
          <img src={`/images/${story.image}`} alt={story.title} />
          <div className="featured-story-content">
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
