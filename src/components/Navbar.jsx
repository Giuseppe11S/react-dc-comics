
const navLinks = [
  { name: "Characters", href: "/characters" },
  { name: "Comics", href: "/comics" },
  { name: "Movies", href: "/movies" },
  { name: "TV", href: "/tv" },
  { name: "Games", href: "/games" },
  { name: "Collectibles", href: "/collectibles" },
  { name: "Videos", href: "/videos" },
  { name: "Fans", href: "/fans" },
  { name: "News", href: "/news" },
  { name: "Shop", href: "/shop" },
];

// Aggiungo links dinamicamente tramite map
const linksNavItems = <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href}>
              {link.name}
            </a>
          </li>
        ))}
        </ul>

const Navbar = () => {
  return (
    <div className="cnt-navbar">
      <img src="./img/dc-logo.png" alt="Logo nav"/>
        <div className="navbar-links">
          {linksNavItems}
      </div>
  </div>
  )
}

export default Navbar