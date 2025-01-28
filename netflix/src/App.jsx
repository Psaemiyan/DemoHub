import React, { useState } from 'react'
import './App.css'

// Placeholder movie data
const movieCategories = [
  {
    title: 'Trending Now',
    movies: [
      { id: 1, title: 'Stranger Things', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABVmiBxOqtqNhTmDSVhh8BPbxwkgTh4j_LJQxAJFmZt4aCMEqOjUQkOk9UqKHhTpRR_Uxb_7gqKA5Q7VfwFqyaDZLfqsXIwUz.jpg' },
      { id: 2, title: 'The Witcher', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABdpQXzJqvn0jFGnzUHbfh0VfOKq4qMpXMdMOFdqrKMzqSGxfmzFCeKIh_Yz7XqtWkbOOPvwzCJOKqRjcqrqxqCsUyMsN.jpg' },
      { id: 3, title: 'Wednesday', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABe2QmDpqbqKHVMIIKaQZCwmFjDKmKN_-LPQyqwRPqwNzqBxfJNbZxOZmkYXqEcUVuTVIGKPqI1XiNJqRzFnBSKqpqRRn.jpg' },
      { id: 4, title: 'Black Mirror', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABfmXAQYz0LBQzFXcRIPuRc4-8ZM4ZKRoAgMkIhEyTmtTTOZqXh3ZOVVGsHXxqIqXUyqrpqhsRRqPJQzRqKnqzqSNqMsN.jpg' },
      { id: 5, title: 'Squid Game', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABdyWyVk_YOqrMOmKXqwh6-YqKFqKqRrqzqSNqMsN.jpg' }
    ]
  },
  {
    title: 'Popular on Netflix',
    movies: [
      { id: 6, title: 'Money Heist', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABbRrqKpqrqzqSNqMsNqRrqzqSNqMsN.jpg' },
      { id: 7, title: 'Narcos', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABdpQXzJqvn0jFGnzUHbfh0VfOKq4qMpXMdMOFdqrKMzqSGxfmzFCeKIh_Yz7XqtWkbOOPvwzCJOKqRjcqrqxqCsUyMsN.jpg' },
      { id: 8, title: 'Dark', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABVmiBxOqtqNhTmDSVhh8BPbxwkgTh4j_LJQxAJFmZt4aCMEqOjUQkOk9UqKHhTpRR_Uxb_7gqKA5Q7VfwFqyaDZLfqsXIwUz.jpg' },
      { id: 9, title: 'You', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABe2QmDpqbqKHVMIIKaQZCwmFjDKmKN_-LPQyqwRPqwNzqBxfJNbZxOZmkYXqEcUVuTVIGKPqI1XiNJqRzFnBSKqpqRRn.jpg' },
      { id: 10, title: 'Ozark', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABfmXAQYz0LBQzFXcRIPuRc4-8ZM4ZKRoAgMkIhEyTmtTTOZqXh3ZOVVGsHXxqIqXUyqrpqhsRRqPJQzRqKnqzqSNqMsN.jpg' }
    ]
  },
  {
    title: 'Top 10 in the US Today',
    movies: [
      { id: 11, title: 'Top Gun', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABdyWyVk_YOqrMOmKXqwh6-YqKFqKqRrqzqSNqMsN.jpg' },
      { id: 12, title: 'Inception', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABbRrqKpqrqzqSNqMsNqRrqzqSNqMsN.jpg' },
      { id: 13, title: 'Breaking Bad', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABdpQXzJqvn0jFGnzUHbfh0VfOKq4qMpXMdMOFdqrKMzqSGxfmzFCeKIh_Yz7XqtWkbOOPvwzCJOKqRjcqrqxqCsUyMsN.jpg' },
      { id: 14, title: 'Pulp Fiction', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABVmiBxOqtqNhTmDSVhh8BPbxwkgTh4j_LJQxAJFmZt4aCMEqOjUQkOk9UqKHhTpRR_Uxb_7gqKA5Q7VfwFqyaDZLfqsXIwUz.jpg' },
      { id: 15, title: 'The Matrix', poster: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABe2QmDpqbqKHVMIIKaQZCwmFjDKmKN_-LPQyqwRPqwNzqBxfJNbZxOZmkYXqEcUVuTVIGKPqI1XiNJqRzFnBSKqpqRRn.jpg' }
    ]
  }
]

function MovieRow({ category }) {
  return (
    <div className="movie-row">
      <h2>{category.title}</h2>
      <div className="movie-list">
        {category.movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-hover">
              <h3>{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  const [activeProfile, setActiveProfile] = useState(null)

  // Profiles selection
  const profiles = [
    { id: 1, name: 'Pari', avatar: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/default.jpg' },
    { id: 2, name: 'Kids', avatar: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/default.jpg' },
    { id: 3, name: 'Guest', avatar: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/default.jpg' }
  ]

  if (!activeProfile) {
    return (
      <div className="profile-selection">
        <h1>Who's watching?</h1>
        <div className="profiles">
          {profiles.map(profile => (
            <div 
              key={profile.id} 
              className="profile"
              onClick={() => setActiveProfile(profile)}
            >
              <img src={profile.avatar} alt={profile.name} />
              <p>{profile.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="netflix-home">
      <header>
        <div className="logo">NETFLIX</div>
        <nav>
          <a href="#" className="active">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
        </nav>
        <div className="user-section">
          <div className="search">🔍</div>
          <div className="notifications">🔔</div>
          <div 
            className="profile-menu"
            onClick={() => setActiveProfile(null)}
          >
            <img src={activeProfile.avatar} alt={activeProfile.name} />
          </div>
        </div>
      </header>

      <div className="hero-banner">
        <img src="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6dd7BVWqDf6LU43mM/AAAABdpQXzJqvn0jFGnzUHbfh0VfOKq4qMpXMdMOFdqrKMzqSGxfmzFCeKIh_Yz7XqtWkbOOPvwzCJOKqRjcqrqxqCsUyMsN.jpg" alt="Hero Banner" />
        <div className="hero-details">
          <h1>Stranger Things</h1>
          <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.</p>
          <div className="hero-actions">
            <button className="play">▶ Play</button>
            <button className="more-info">ℹ More Info</button>
          </div>
        </div>
      </div>

      <div className="movie-rows">
        {movieCategories.map((category, index) => (
          <MovieRow key={index} category={category} />
        ))}
      </div>
    </div>
  )
}

export default App
