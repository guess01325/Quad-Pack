import { Link } from "react-router-dom";
import "../assets/Header.css";

function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="header">
      <header>
        <div className="home-link"></div>
        <nav>
          {currentUser ? (
            <div>
              <p>{props.currentUser.username}</p>
              <Link to="/">
                <h1 className="home-link">Home</h1>
              </Link>
              <Link to="/events">
                Events
                </Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="nav-buttons">
               <Link to="/">
                Home
              </Link>
              <Link to="/sign-up">Sign Up</Link>
              <Link to="/sign-in">Sign In</Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
