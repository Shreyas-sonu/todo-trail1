import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbarBlock">
      <button>
        <Link to="/create">+ Add</Link>
      </button>
    </div>
  );
};

export default Nav;
