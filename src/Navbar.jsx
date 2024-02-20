import "./Navbar.css";

export function Navbar() {
 const links = [
    {
      id: 1,
      name: "HOT",
      path: "/",
    },
    {
      id: 2,
      name: "JUICY",
      path: "/about",
    },
    {
      id: 3,
      name: "COSY",
      path: "/contact",
    },
  ];

  return (
    <nav className="navbar">
      {links.map((link) => {
        return (
          <a key={link.id} href={link.path}>
            {link.name}
          </a>
        );
      })}
    </nav>
  );
}