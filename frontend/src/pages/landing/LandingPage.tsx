// import Header from "../../components/Header"
import "../../styles/landing.css"
const LandingPage = () => {
  return (
    <div className="main">
      <div className="container">
      <div className="intro-text">
            <div>
              <h1 className="items-center title text-yellow-500">Welcome to Memo</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              
                <button  className="landingbutton">
                  Login
                </button>
              
              
                <button
                  
                  className="landingbutton"
                >
                  Signup
                </button>
              
            </div>
          </div>
      </div>
    </div>
  );
};

export default LandingPage;
