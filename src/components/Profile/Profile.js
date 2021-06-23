import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const handleToggleMenu = () => {
    document
      .querySelector(".header-links")
      .classList.toggle("show-header-links");
  };

  return (
    <div className="profile">
      <header className="header">
        <section className="header-top">
          <div className="logo">
            <h1>SWAPPED!</h1>
          </div>
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="header-icons">
            <i className="far fa-user-circle"></i>
            <i className="fas fa-search"></i>
            <i className="far fa-bell"></i>
            <i className="far fa-paper-plane"></i>
            <i className="fas fa-bars menubtn" onClick={handleToggleMenu}></i>
          </div>
        </section>
        <section className="header-bottom">
          <input type="text" placeholder="search..." />
        </section>
      </header>
      <section className="container">
        <div className="welcome">
          <div className="pp"></div>
          <h2 className="name">Hi John!</h2>
        </div>
        <main>
          <section className="main-left">
            <h2>My Profile</h2>
            <div className="main-left-links">
              <Link to=" /wallet">
                <i className="fas fa-wallet"></i> My wallet
              </Link>
              <Link to=" /history">
                <i className="fas fa-history"></i> History
              </Link>
              <Link to=" /notifications">
                <i className="far fa-bell"></i> Notifications
              </Link>
              <Link to=" /sttings">
                <i className="fas fa-cog"></i> Settings
              </Link>
              <Link to=" /help">
                <i className="fas fa-question"></i> Help
              </Link>
              <Link to=" /logout">
                <i className="fas fa-sign-out-alt"></i> Logout
              </Link>
            </div>
          </section>
          <section className="main-center">
            <h2>Personal Information</h2>
            <div className="name-container">
              <div className="name-g1">
                <label htmlFor="fn">Firstname</label>
                <input type="text" id="fn" />
              </div>
              <div className="name-g2">
                <label htmlFor="sn">Surname</label>
                <input type="text" id="sn" />
              </div>
            </div>
            <div className="email-container">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" />
            </div>
            <div className="pw-container">
              <div className="pw-g1">
                <label htmlFor="pw">Password</label>
                <input type="password" id="pw" />
              </div>
              <div className="pw-g2">
                <label htmlFor="newpw">New password</label>
                <input type="password" id="newpw" />
              </div>
            </div>
            <div className="nin-container">
              <label htmlFor="nin">National ID (NIN)</label>
              <input type="text" id="nin" />
            </div>
            <div className="swapped">
              <h2>Items you've swapped</h2>
              <div className="swapped-items">
                <div className="s1"></div>
                <div className="s2"></div>
                <div className="s3"></div>
              </div>
            </div>
          </section>
          <section className="main-right">
            <h2>Recommended for you</h2>
            <div className="recommended">
              <div className="r1"></div>
              <div className="r2"></div>
              <div className="r3"></div>
              <div className="r4"></div>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Profile;
