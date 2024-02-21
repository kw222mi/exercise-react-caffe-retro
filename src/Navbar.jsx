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
      <ul className="nav-list">
      {links.map((link) => {
        return (
         <li className="nav-item" key={link.id}><a  href={link.path}>
            {link.name}
          </a></li> 
        );
      })}
      </ul>
    </nav>
  );
}

