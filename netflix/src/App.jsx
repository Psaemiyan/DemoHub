import React, { useState } from 'react'
import './App.css'

// Consolidated movie list
const movies = [
  { 
    id: 1, 
    title: 'Stranger Things', 
    poster: './stranger-things.jpeg',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.'
  },
  { 
    id: 2, 
    title: 'The Witcher', 
    poster: './witcher.jpeg',
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.'
  },
  { 
    id: 3, 
    title: 'Wednesday', 
    poster: './wednesday.jpeg',
    description: 'Follows Wednesday Addams\' years as a student at Nevermore Academy, where she attempts to master her emerging psychic abilities.'
  },
  { 
    id: 4, 
    title: 'Black Mirror', 
    poster: './black-mirror.jpeg',
    description: 'An anthology series exploring a twisted, high-tech multiverse where humanity\'s greatest innovations and darkest instincts collide.'
  },
  { 
    id: 5, 
    title: 'Squid Game', 
    poster: './squidgame.jpeg',
    description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games with a tempting prize, unaware of the deadly stakes.'
  }
]

// Movie categories using the same movies
const movieCategories = [
  {
    title: 'Trending Now',
    movies: movies.slice(0, 3)
  },
  {
    title: 'Popular on Netflix',
    movies: movies.slice(2, 5)
  },
  {
    title: 'Top 10 in the US Today',
    movies: movies.slice(0, 5)
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
    { id: 1, name: 'Pari', avatar: './netflix-profile-pictures.webp' },
    { id: 2, name: 'Kids', avatar: './netflix-profile-pictures-2.webp' },
    { id: 3, name: 'Guest', avatar: './netflix-profile-pictures-3.webp' }
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
          <div 
            className="profile add-profile"
            onClick={() => alert('working on it!')}
          >
            <div className="add-profile-icon">+</div>
            <p>Add Profile</p>
          </div>
        </div>
        <button className="manage-profiles">
          Manage Profiles
        </button>
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
        <img src={'./header-img.jpg'} alt="Hero Banner" />
        <div className="hero-details">
          <h1>{movies[0].title}</h1>
          <p>{movies[0].description}</p>
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
