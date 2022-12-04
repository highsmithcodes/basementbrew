import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };

  return (
    <>
      <div className="main-default">
        <div className='main-banner'>
          <div className="banner-content">
            <div className="left-banner">
              <h1>Basement Brew</h1>
              <div className="sub-title">A place to share your beer brewing accomplishments</div>
            </div>
            <div className="right-banner">
              <div className="sign-in">
                <p> Sign In/Sign Up With Google To Continue </p>
                <button onClick={signInWithGoogle}> Sign In With Google </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};