import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import SearchInput from "../src/components/searchInput/SearchInput";
import LocationIcon from "./assets/images/icons/icon-location.svg";
import CompanuIcon from "./assets/images/icons/icon-company.svg";
import TwitterIcon from "./assets/images/icons/icon-twitter.svg";
import WebSiteIcon from "./assets/images/icons/icon-website.svg";

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: false;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: null;
  twitter_username: null;
  public_repos: number;
  public_gists: Number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
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
      const response = await axios.get(`http://localhost:8000/octacat
      `);
      const data = response.data;
      setItems(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const clickChangeInputValue = () => {
    requestUser();
  };

  return (
    <div className={changeMode ? "App dark-mode" : "App light-mode"}>
      <Header handleChangeMode={handleChangeMode} changeMode={changeMode} />
      <SearchInput
        changeInputValue={changeInputValue}
        clickChangeInputValue={clickChangeInputValue}
      />
      <div className="mainCardInfo">
        <div className="personalCard">
          <ul>
            {items &&
              items.map((user) => (
                <li>
                  <img src={user.avatar_url} className="userAvatar" />
                </li>
              ))}
          </ul>
          <div className="personalInfo">
            <div className="userInfo">
              <h2 className="userName">The Octocat</h2>
              <h3 className="userLogin">@octocat</h3>
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
        <div className="userFollow">
          <div className="userFollowInfo">
            <div>
              <label>Repos</label>
              <p>8</p>
            </div>
            <div>
              <label>Followers</label>
              <p>2928</p>
            </div>
            <div>
              <label>Following</label>
              <p>9</p>
            </div>
          </div>
        </div>
        <div className="locationInfo">
          <div className="location">
            <img src={LocationIcon} />
            <p>San Francisco</p>
          </div>
          <div className="githubLink">
            <img src={WebSiteIcon} />
            <a href="https://github.blog">https://github.blog</a>
          </div>
          <div className="twitter">
            <img src={TwitterIcon} />
            <p>Not Available</p>
          </div>
          <div className="github">
            <img src={CompanuIcon} />
            <p>@github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
