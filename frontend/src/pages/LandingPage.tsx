import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="intro-text">
            <div>

              <h1 className="items-center title text-yellow-500">
                Welcome to Memo
              </h1>

              <p className="subtitle text-gray-600">
                <i>One Safe place for all your notes.</i>
              </p>

            </div>

            <div className="buttonContainer">
              <button
                className="landingbutton bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => navigate("/login")}
              >
                Login
              </button>

              <button
                className="landingbutton bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => navigate("/register")}
              >
                Signup
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
