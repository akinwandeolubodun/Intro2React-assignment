import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "./UserProfile";

function App() {

  return (
    <div className="UserProfile">
      <header >
        <h1 className="">User Profiles</h1>
        <p>
            Click User profile to add a new user and click to cross it off!
          </p>
      </header>
      <div className="user-profile-wrapper">
        {/* Render the array of users using the UserProfile in this div */}
          <UserProfile name ={"JohnDoe"} email={"john@example.com"} imgUrl={"https://xsgames.co/randomusers/avatar.php?g=male"} />
          <UserProfile name ={"Jane Smith"} email={"jane@example.com"} imgUrl={"https://xsgames.co/randomusers/avatar.php?g=female"} />
          <UserProfile name ={"Michael Johnson"} email={"michael@example.com"} imgUrl={"https://xsgames.co/randomusers/avatar.php?g=male"} />
          <UserProfile name ={"Emily Brown"} email={"emily@example.com"} imgUrl={"https://xsgames.co/randomusers/avatar.php?g=female"} />
          <UserProfile name ={"David Wilson"} email={"david@example.com"} imgUrl={"https://xsgames.co/randomusers/avatar.php?g=male"} />
          <UserProfile name ={"Sarah Davis"} email={"sarah@example.com"} imgUrl={"https://xsgames.co/randomusers/avatar.php?g=female"} />
          <UserProfile name ={"Daniel Thompson"} email={"daniel@example.com"} imgUrl={"https://xsgames.co/randomusers/avatar.php?g=male"} />
          <UserProfile name ={"Olivia Martinez"} email={"olivia@example.com"} imgUrl={"https://xsgames.co/randomusers/avatar.php?g=female"} />
    </div>
    </div>
  );
}

export default App;
