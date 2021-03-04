import { Link } from 'react-router-dom';
import '../styles/nav.scss';

const Nav = () => {
  return (
    <nav>
      <Link to={`/products?search=tech&length=0`} className="auth-btn">
        Tech
      </Link>
    </nav>
  );
};

export default Nav;
