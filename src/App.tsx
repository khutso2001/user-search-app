import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import SearchInput from "../src/components/searchInput/SearchInput";
import LocationIcon from "./assets/images/icons/icon-location.svg";
import CompanuIcon from "./assets/images/icons/icon-company.svg";
import TwitterIcon from "./assets/images/icons/icon-twitter.svg";
import WebSiteIcon from "./assets/images/icons/icon-website.svg";
import { User } from "./userInterfase";

function App() {
  const [changeMode, setChangeMode] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<User[] | null>(null);

  const handleChangeMode = () => {
    setChangeMode(!changeMode);
  };
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    requestUser();
  }, []);

  const requestUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/octacat`);
      const data = response.data;
      setItems(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const clickChangeInputValue = () => {
    requestUser();
  };

  function mapUserDetails<T>(
    items: User[] | null,
    renderFn: (user: User, index: number) => T
  ) {
    if (!items || !Array.isArray(items)) {
      return null;
    }

    return items.map((user, index) => renderFn(user, index));
  }
  return (
    <div className={changeMode ? "App dark-mode" : "App light-mode"}>
      <Header handleChangeMode={handleChangeMode} changeMode={changeMode} />
      <SearchInput
        changeInputValue={changeInputValue}
        clickChangeInputValue={clickChangeInputValue}
        changeMode={changeMode}
      />
      <div
        className="mainCardInfo"
        style={{
          color: changeMode ? "#FFFFFF" : "#4B6A9B",
          background: changeMode ? "#1E2A47" : "#FEFEFE",
        }}
      >
        <div className="personalCard">
          {items &&
            items.map((user) => (
              <img src={user.avatar_url} className="userAvatar" />
            ))}

          <div className="personalInfo">
            <div className="userInfo">
              {items &&
                items.map((user) => <h2 className="userName">{user.name}</h2>)}
              {items &&
                items.map((user) => (
                  <h3 className="userLogin">@{user.login} </h3>
                ))}
            </div>
            <p className="userDate">Joined 25 Jan 2011</p>
          </div>
        </div>
        <div className="moreInfo">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>
        <div
          className="userFollow"
          style={{
            color: changeMode ? "#FFFFFF" : "#4B6A9B",
            background: changeMode ? "#141D2F" : "#F6F8FF",
          }}
        >
          <div
            className="userFollowInfo"
            style={{
              color: changeMode ? "#FFFFFF" : "#4B6A9B",
              background: changeMode ? "#141D2F" : "#F6F8FF",
            }}
          >
            <div>
              <label>Repos</label>
              {items && items.map((user) => <p>{user.public_repos}</p>)}
            </div>
            <div>
              <label>Followers</label>
              {items && items.map((user) => <p>{user.followers}</p>)}
            </div>
            <div>
              <label>Following</label>
              {items && items.map((user) => <p>{user.following}</p>)}
            </div>
          </div>
        </div>
        <div className="locationInfo">
          <div className="location">
            <img src={LocationIcon} />
            {items && items.map((user) => <p>{user.location}</p>)}
          </div>
          <div className="githubLink">
            <img src={WebSiteIcon} />
            {items &&
              items.map((user) => (
                <a href="https://github.blog">{user.blog}</a>
              ))}
          </div>
          <div className="twitter">
            <img src={TwitterIcon} />
            {items && items.map((user) => <p>{user.twitter_username}</p>)}
          </div>
          <div className="github">
            <img src={CompanuIcon} />
            {items && items.map((user) => <p>{user.company}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
