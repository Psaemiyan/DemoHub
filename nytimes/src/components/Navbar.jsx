export default function NavBar() {
  const navItems = [
    "World",
    "U.S.",
    "Politics",
    "Business",
    "Technology",
    "Health",
    "Sports",
    "Arts",
    "Travel",
    "Opinions",
  ];

  return (
    <nav className="main-nav">
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

