import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <div className="navbar-logo">
        Basement Brew
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        {!user ? (
        <Link to="/login"> Login </Link> 
        ) : ( 
          <Link to="/createpost"> Create Post </Link>  
        )}
        <div className="user">
        {user && (
          <>
            {/* {user?.displayName} */}
            {/* <img src={user?.photoURL || ""} width="20" height="20" /> */}
            <a className="logout" onClick={signUserOut}> Log Out</a>
          </>
        )}
      </div>
      </div>
    </div>
  );
};