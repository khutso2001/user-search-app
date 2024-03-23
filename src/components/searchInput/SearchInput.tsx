import React from "react";
import SearchIcon from "../../assets/images/icons/icon-search.svg";
import "./SearchInput.css";

interface Props {
  changeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clickChangeInputValue: () => void;
}
export default function SearchInput(props: Props) {
  const { changeInputValue, clickChangeInputValue } = props;
  return (
    <div className="searchInput">
      <img src={SearchIcon} alt="search icon" className="searchInputIcon" />
      <input
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
