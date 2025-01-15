export default function Header() {
  return (
    <header>

      <div className="top-bar">

      <div className="search-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <div className="countries-container">
          <ul>
            <li>U.S.</li>
            <li>International</li>
            <li>Canada</li>
            <li>Español</li>
            <li>中文</li>
          </ul>
        </div>

        <div className="buttons-container">
          <button>SUBSCRIBE FOR $.50 (CDN) / WEEK</button>
          <button>LOG IN</button>
        </div>
      </div>
   
      <div className="date">
        <p>Tuesday January 14, 2025</p>
        <p>Today's Paper</p>
      </div>

      <div className="logo">
        <h1>The New York Times</h1>
      </div>

    </header>
  );
}

