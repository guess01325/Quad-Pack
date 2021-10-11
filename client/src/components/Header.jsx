import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const { currentUser, handleLogout } = props;
  console.log(currentUser)
  return (
    <div className="header">
     <header>
       <Link to="/">
          <h1>Quad Pack</h1>
       </Link>
                <nav>
                {
                    currentUser ? (
                        <div>
                            <p>{props.currentUser.username}</p>
                            <Link to='/events'>Events</Link>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <div>
                    <Link className="header-links" to='/sign-up'>Sign Up</Link>
                    <Link className="header-links" to='/sign-in'>Sign In</Link>
                    
                    </div>
                    )}
               

                </nav>
                </header>
    </div>
  );
}

export default Header;