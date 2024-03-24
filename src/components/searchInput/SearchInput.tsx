import React from "react";
import SearchIcon from "../../assets/images/icons/icon-search.svg";
import "./SearchInput.css";

interface Props {
  changeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clickChangeInputValue: () => void;
  changeMode: Boolean;
}
export default function SearchInput(props: Props) {
  const { changeInputValue, clickChangeInputValue, changeMode } = props;
  return (
    <div
      className="searchInput"
      style={{
        color: changeMode ? "#FFFFFF" : "#4B6A9B",
        background: changeMode ? "#1E2A47" : "#FEFEFE",
      }}
    >
      <img src={SearchIcon} alt="search icon" className="searchInputIcon" />
      <input
        style={{
          color: changeMode ? "#FFFFFF" : "#4B6A9B",
          background: changeMode ? "#1E2A47" : "#FEFEFE",
        }}
        type="text"
        placeholder="Search GitHub username…"
        onChange={changeInputValue}
      />
      <button
        type="submit"
        className="searchInputButton"
        onClick={clickChangeInputValue}
      >
        Search
      </button>
    </div>
  );
}
